import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Bar, Line } from 'react-chartjs-2';
import {
  Card,
  CardBody
} from 'reactstrap';
import agent from '../../reduxstore/agent.js';
import {
  isDatasetChanged,
  isDatasetReady,
  datasetMapStateToProps
} from '../../tools/datasetHelper.js';

class CardBox extends Component {
  static propTypes = {
    icon: PropTypes.string,
    type: PropTypes.string,
    refreshInterval: PropTypes.number,
    height: PropTypes.number.isRequired,
    value: PropTypes.string,
    title: PropTypes.string,
    dataUrl: PropTypes.string,
    className: PropTypes.string
  }

  static defaultProps = {
    refreshInterval: 0,
    dataUrl: '',
    className: ''
  }

  constructor(props) {
    super(props);
    this.state = {
      ...props,
      data: null,
      datasetReady: isDatasetReady(props),
      datasetChanged: false,
      error: false
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
    console.log('CardBox', 'Loading data');
    const urlsToLoad = [this.props.dataUrl];
    const webRequests = urlsToLoad.map((url) => agent.requests.get(url));
    if (this.dataReloader) {
      clearTimeout(this.dataReloader);
    }
    Promise.all(webRequests)
      .then(
        (copyOfReplies) => {
          const replies = copyOfReplies;
          this.setState({
            error: false,
            data: replies[0]
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
    if (isDatasetChanged(newProps, this.state) || JSON.stringify(this.props.dataUrl) === JSON.stringify(newProps.dataUrl)) {
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
    console.log('CardBox data', data);
    return (
      <Card className={this.props.className}>
        <CardBody>
          <div className="h1 text-muted text-right mb-2">
            <i className={ this.props.icon }></i>
          </div>
          <div className="h4 mb-0">{ data }</div>
          <small className="text-muted text-uppercase font-weight-bold">{ this.props.title }</small>
        </CardBody>
      </Card>
    );
  }
}

export default connect(datasetMapStateToProps)(CardBox);
