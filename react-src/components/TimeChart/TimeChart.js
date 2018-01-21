import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Bar, Line } from 'react-chartjs-2';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  ButtonGroup,
  ButtonToolbar,
  Label,
  Input
} from 'reactstrap';
import agent from '../../reduxstore/agent.js';
import {
  isDatasetChanged,
  isDatasetReady,
  datasetMapStateToProps
} from '../../tools/datasetHelper.js';

class TimeChart extends Component {
  static propTypes = {
    type: PropTypes.string,
    refreshInterval: PropTypes.number,
    height: PropTypes.number.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    periods: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        key: PropTypes.string
      })
    ),
    defaultPeriod: PropTypes.string,
    dataUrls: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired
      })
    )
  }

  static defaultProps = {
    type: 'line',
    refreshInterval: 0,
    defaultPeriod: 'day',
    dataUrls: [],
    periods: [
      {
        name: 'Anno',
        key: 'year'
      },
      {
        name: 'Quadrimestre',
        key: 'quarter'
      },
      {
        name: 'Mese',
        key: 'month'
      },
      {
        name: 'Settimana',
        key: 'week'
      },
      {
        name: 'Giorno',
        key: 'day'
      },
      {
        name: 'Ora',
        key: 'hour'
      }
    ]
  }

  constructor(props) {
    super(props);
    console.log('Props', props);
    this.state = {
      ...props,
      data: null,
      datasetReady: isDatasetReady(props),
      datasetChanged: false,
      error: false,
      currentPeriod: props.defaultPeriod
    };
  }

  componentWillUnmount() {
    if (this.dataReloader) {
      clearTimeout(this.dataReloader);
    }
  }

  componentDidMount() {
    const {
      datasetReady
    } = this.state;
    if (datasetReady) {
      this.setState({
        error: false,
        data: null,
        datasetChanged: false
      }, () => {
        this.reloadData();
      });
    }
  }

  reloadData() {
    console.log('TrafficChart', 'Loading data');
    const urlsToLoad = this.props.dataUrls.map((dataUrl) => dataUrl.url);
    const webRequests = urlsToLoad.map((url) => agent.requests.get(url));
    if (this.dataReloader) {
      clearTimeout(this.dataReloader);
    }
    Promise.all(webRequests)
      .then(
        (copyOfReplies) => {
          const replies = copyOfReplies;
          console.log('replies', replies);
          replies.forEach((reply) => {
            const kk = ['alltime', 'year', 'quarter', 'month', 'week', 'day', 'hour'];
            kk.forEach((k) => {
              if (reply[k]) {
                const vals = reply[k].data;
                vals.forEach((v) => {
                  if (v.x) {
                    v.x = new Date(v.x);
                  }
                });
              }
            });
          });
          this.setState({
            error: false,
            data: replies
          }, () => {
            if (this.props.refreshInterval > 0) {
              this.dataReloader = setTimeout(() => {
                const {
                  datasetReady
                } = this.state;
                if (datasetReady) {
                  this.reloadData();
                }
              }, this.props.refreshInterval);
            }
          });
        },
        (e) => {
          this.setState({
            error: true,
            errorMessage: e
          });
        }
      );
  }

  componentWillReceiveProps(newProps) {
    if (isDatasetChanged(newProps, this.state) || JSON.stringify(this.props.dataUrls) === JSON.stringify(newProps.dataUrls)) {
      this.setState({
        ...newProps,
        datasetChanged: true,
        datasetReady: isDatasetReady(newProps)
      }, () => {
        if (isDatasetReady(newProps)) {
          this.reloadData();
        }
      });
    } else {
      this.setState({
        ...newProps,
        datasetChanged: false,
        datasetReady: isDatasetReady(newProps)
      });
    }
  }

  render() {
    const {
      data
    } = this.state;
    console.log('TimeChart data', data);
    if (!data || data.length < 1) {
      return (
        <Card>
          <CardBody>
            <Row>
              <Col sm="5">
                <CardTitle className="mb-0">{this.props.title}</CardTitle>
                <div className="small text-muted">{this.props.description}</div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      );
    }
    // let tooltipFormat = 'll HH:mm';
    // if (this.state.currentPeriod === 'month') {
    //   tooltipFormat = 'MM/YYYY';
    // }
    // if (this.state.currentPeriod === 'week') {
    //   tooltipFormat = 'w';
    // }
    // if (this.state.currentPeriod === 'day') {
    //   tooltipFormat = 'w';
    // }
    // console.log('tooltipFormat', tooltipFormat);
    console.log('this.state.currentPeriod', this.state.currentPeriod);
    const chartOptions = {
      legend: {
        display: true
      },
      maintainAspectRatio: false,
      title: {
        text: null
      },
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            // tooltipFormat: tooltipFormat,
            displayFormats: {
              week: 'll (w)'
            },
            unit: this.state.currentPeriod
          },
          distribution: 'linear',
          bounds: 'ticks',
          ticks: {
            source: 'data'
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: false,
            labelString: ''
          }
        }]
      }
    };
    const chartData = {
      labels: this.props.dataUrls.map((dU) => dU.name),
      datasets: data.reduce((prev, curr, pos) => {
        console.log('curr', this.state.currentPeriod, curr[this.state.currentPeriod]);
        if (curr[this.state.currentPeriod]) {
          prev.push({
            data: curr[this.state.currentPeriod].data,
            label: this.props.dataUrls[pos].name,
            borderColor: this.props.dataUrls[pos].color,
            backgroundColor: this.props.dataUrls[pos].color,
            fill: false
          });
        }
        return prev;
      }, [])
    };

    console.log('chartData', chartData);

    return (
      <Card>
        <CardBody>
          <Row>
            <Col sm="5">
              <CardTitle className="mb-0">{this.props.title}</CardTitle>
              <div className="small text-muted">{this.props.description}</div>
            </Col>
            <Col sm="7" className="d-none d-sm-inline-block">
              <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
              <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                <ButtonGroup className="mr-3" data-toggle="buttons" aria-label="First group">
                  {
                    this.props.periods.map((period) => {
                      const existsOne = data.reduce((prev, curr) => {
                        if (prev) { return prev; }
                        if (curr[period.key]) {
                          return true;
                        }
                        return false;
                      }, false);

                      if (!existsOne) {
                        return null;
                      }
                      return (
                        <Label className={`btn btn-outline-secondary ${period.key === this.state.currentPeriod ? 'active' : ''}`} key={period.key}>
                          <Input type="radio" name="options" onClick={() => {
                            console.log('Set period', period.key);
                            this.setState({
                              currentPeriod: period.key
                            });
                          }}/>{period.name}
                        </Label>
                      );
                    })
                  }
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
          <div className="chart-wrapper" style={{height: this.props.height + 'px', marginTop: 40 + 'px'}}>
            {
              this.props.type === 'line'
                ? <Line options={chartOptions} data={chartData} height={this.props.height} />
                : <Bar options={chartOptions} data={chartData} height={this.props.height} />
            }
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default connect(datasetMapStateToProps)(TimeChart);
