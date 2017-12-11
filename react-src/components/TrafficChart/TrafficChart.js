import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Bar, Line} from 'react-chartjs-2';
import agent from '../../reduxstore/agent.js';
import {
  isDatasetChanged,
  isDatasetReady,
  datasetMapStateToProps
} from '../../tools/datasetHelper.js';

const mainChart = {
};

const mainChartOpts = {
};


class TrafficChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      graphData: null
    };
    this.state.datasetReady = isDatasetReady(this.state);
    this.state.datasetChanged = false;
  }

  componentDidMount() {
    const {
      datasetReady,
      datasetChanged,
      mandato,
      idcliente,
      start,
      end
    } = this.state;
    console.log('TrafficChart componentDidMount', datasetReady, datasetChanged);
    if (datasetReady) {
      this.setState({
        graphData: null,
        datasetChanged: false
      }, () => {
        this.reloadData();
      });
    }
  }

  reloadData() {
    const {
      mandato,
      idcliente,
      start,
      end
    } = this.state;
    console.log('TrafficChart', 'Loading data');
    agent.requests.get('/vivr/openedfiles').then(
      (response) => {
        const kk = ['year', 'month', 'day', 'hour'];
        kk.forEach((k) => {
          if (response[k]) {
            const vals = response[k].data;
            vals.forEach((v) => {
              if (v.x) {
                v.x = new Date(v.x);
              }
            });
          }
        });
        console.log('response', response.day.data);
        this.setState({
          graphData: response
        });
      },
      (e) => {
        console.log('E', e);
      }
    );
  }

  componentWillReceiveProps(newProps) {
    if (isDatasetChanged(newProps, this.state)) {
      this.setState({
        ...newProps,
        datasetChanged: true,
        datasetReady: isDatasetReady(newProps)
      }, () => {
        this.reloadData();
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
      datasetReady,
      datasetChanged,
      mandato,
      idcliente,
      start,
      end,
      graphData
    } = this.state;
    if (!graphData) {
      return (<div>Waiting...</div>);
    }
    return (<div className="chart-wrapper" style={{height: 300 + 'px', marginTop: 40 + 'px'}}>
      <Line
        options={{
          legend: {
            display: false
          },
          maintainAspectRatio: false,
          title: {
            text: ''
          },
          scales: {
            xAxes: [{
              type: 'time',
              time: {
                tooltipFormat: 'll HH:mm',
                displayFormats: {
                  hour: 'DD/MM hA'
                }
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
                labelString: 'value'
              }
            }]
          }
        }}
        data={{
          labels: [
            'Red',
            'Green',
            'Yellow'
          ],
          datasets: [{
            // label: null,
            data: graphData.day.data
          }]
        }}
        height={300}
      />
    </div>);
  }
}

export default connect(datasetMapStateToProps)(TrafficChart);
