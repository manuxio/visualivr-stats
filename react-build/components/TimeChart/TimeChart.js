'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reactChartjs = require('react-chartjs-2');

var _reactstrap = require('reactstrap');

var _agent = require('../../reduxstore/agent.js');

var _agent2 = _interopRequireDefault(_agent);

var _datasetHelper = require('../../tools/datasetHelper.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimeChart = function (_Component) {
  _inherits(TimeChart, _Component);

  function TimeChart(props) {
    _classCallCheck(this, TimeChart);

    var _this = _possibleConstructorReturn(this, (TimeChart.__proto__ || Object.getPrototypeOf(TimeChart)).call(this, props));

    console.log('Props', props);
    _this.state = _extends({}, props, {
      data: null,
      datasetReady: (0, _datasetHelper.isDatasetReady)(props),
      datasetChanged: false,
      error: false,
      currentPeriod: props.defaultPeriod
    });
    return _this;
  }

  _createClass(TimeChart, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.dataReloader) {
        clearTimeout(this.dataReloader);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var datasetReady = this.state.datasetReady;

      if (datasetReady) {
        this.setState({
          error: false,
          data: null,
          datasetChanged: false
        }, function () {
          _this2.reloadData();
        });
      }
    }
  }, {
    key: 'reloadData',
    value: function reloadData() {
      var _this3 = this;

      console.log('TrafficChart', 'Loading data');
      var urlsToLoad = this.props.dataUrls.map(function (dataUrl) {
        return dataUrl.url;
      });
      var webRequests = urlsToLoad.map(function (url) {
        return _agent2.default.requests.get(url);
      });
      if (this.dataReloader) {
        clearTimeout(this.dataReloader);
      }
      Promise.all(webRequests).then(function (copyOfReplies) {
        var replies = copyOfReplies;
        console.log('replies', replies);
        replies.forEach(function (reply) {
          var kk = ['alltime', 'year', 'quarter', 'month', 'week', 'day', 'hour'];
          kk.forEach(function (k) {
            if (reply[k]) {
              var vals = reply[k].data;
              vals.forEach(function (v) {
                if (v.x) {
                  v.x = new Date(v.x);
                }
              });
            }
          });
        });
        _this3.setState({
          error: false,
          data: replies
        }, function () {
          if (_this3.props.refreshInterval > 0) {
            _this3.dataReloader = setTimeout(function () {
              var datasetReady = _this3.state.datasetReady;

              if (datasetReady) {
                _this3.reloadData();
              }
            }, _this3.props.refreshInterval);
          }
        });
      }, function (e) {
        _this3.setState({
          error: true,
          errorMessage: e
        });
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var _this4 = this;

      if ((0, _datasetHelper.isDatasetChanged)(newProps, this.state) || JSON.stringify(this.props.dataUrls) === JSON.stringify(newProps.dataUrls)) {
        this.setState(_extends({}, newProps, {
          datasetChanged: true,
          datasetReady: (0, _datasetHelper.isDatasetReady)(newProps)
        }), function () {
          if ((0, _datasetHelper.isDatasetReady)(newProps)) {
            _this4.reloadData();
          }
        });
      } else {
        this.setState(_extends({}, newProps, {
          datasetChanged: false,
          datasetReady: (0, _datasetHelper.isDatasetReady)(newProps)
        }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var data = this.state.data;

      console.log('TimeChart data', data);
      if (!data || data.length < 1) {
        return _react2.default.createElement(
          _reactstrap.Card,
          null,
          _react2.default.createElement(
            _reactstrap.CardBody,
            null,
            _react2.default.createElement(
              _reactstrap.Row,
              null,
              _react2.default.createElement(
                _reactstrap.Col,
                { sm: '5' },
                _react2.default.createElement(
                  _reactstrap.CardTitle,
                  { className: 'mb-0' },
                  this.props.title
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'small text-muted' },
                  this.props.description
                )
              )
            )
          )
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
      var chartOptions = {
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
      var chartData = {
        labels: this.props.dataUrls.map(function (dU) {
          return dU.name;
        }),
        datasets: data.reduce(function (prev, curr, pos) {
          console.log('curr', _this5.state.currentPeriod, curr[_this5.state.currentPeriod]);
          if (curr[_this5.state.currentPeriod]) {
            prev.push({
              data: curr[_this5.state.currentPeriod].data,
              label: _this5.props.dataUrls[pos].name,
              borderColor: _this5.props.dataUrls[pos].color,
              backgroundColor: _this5.props.dataUrls[pos].color,
              fill: false
            });
          }
          return prev;
        }, [])
      };

      console.log('chartData', chartData);

      return _react2.default.createElement(
        _reactstrap.Card,
        null,
        _react2.default.createElement(
          _reactstrap.CardBody,
          null,
          _react2.default.createElement(
            _reactstrap.Row,
            null,
            _react2.default.createElement(
              _reactstrap.Col,
              { sm: '5' },
              _react2.default.createElement(
                _reactstrap.CardTitle,
                { className: 'mb-0' },
                this.props.title
              ),
              _react2.default.createElement(
                'div',
                { className: 'small text-muted' },
                this.props.description
              )
            ),
            _react2.default.createElement(
              _reactstrap.Col,
              { sm: '7', className: 'd-none d-sm-inline-block' },
              _react2.default.createElement(
                _reactstrap.Button,
                { color: 'primary', className: 'float-right' },
                _react2.default.createElement('i', { className: 'icon-cloud-download' })
              ),
              _react2.default.createElement(
                _reactstrap.ButtonToolbar,
                { className: 'float-right', 'aria-label': 'Toolbar with button groups' },
                _react2.default.createElement(
                  _reactstrap.ButtonGroup,
                  { className: 'mr-3', 'data-toggle': 'buttons', 'aria-label': 'First group' },
                  this.props.periods.map(function (period) {
                    var existsOne = data.reduce(function (prev, curr) {
                      if (prev) {
                        return prev;
                      }
                      if (curr[period.key]) {
                        return true;
                      }
                      return false;
                    }, false);

                    if (!existsOne) {
                      return null;
                    }
                    return _react2.default.createElement(
                      _reactstrap.Label,
                      { className: 'btn btn-outline-secondary ' + (period.key === _this5.state.currentPeriod ? 'active' : ''), key: period.key },
                      _react2.default.createElement(_reactstrap.Input, { type: 'radio', name: 'options', onClick: function onClick() {
                          console.log('Set period', period.key);
                          _this5.setState({
                            currentPeriod: period.key
                          });
                        } }),
                      period.name
                    );
                  })
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'chart-wrapper', style: { height: this.props.height + 'px', marginTop: 40 + 'px' } },
            this.props.type === 'line' ? _react2.default.createElement(_reactChartjs.Line, { options: chartOptions, data: chartData, height: this.props.height }) : _react2.default.createElement(_reactChartjs.Bar, { options: chartOptions, data: chartData, height: this.props.height })
          )
        )
      );
    }
  }]);

  return TimeChart;
}(_react.Component);

TimeChart.propTypes = {
  type: _propTypes2.default.string,
  refreshInterval: _propTypes2.default.number,
  height: _propTypes2.default.number.isRequired,
  title: _propTypes2.default.string,
  description: _propTypes2.default.string,
  periods: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string,
    key: _propTypes2.default.string
  })),
  defaultPeriod: _propTypes2.default.string,
  dataUrls: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string,
    url: _propTypes2.default.string.isRequired,
    color: _propTypes2.default.string.isRequired
  }))
};
TimeChart.defaultProps = {
  type: 'line',
  refreshInterval: 0,
  defaultPeriod: 'day',
  dataUrls: [],
  periods: [{
    name: 'Anno',
    key: 'year'
  }, {
    name: 'Quadrimestre',
    key: 'quarter'
  }, {
    name: 'Mese',
    key: 'month'
  }, {
    name: 'Settimana',
    key: 'week'
  }, {
    name: 'Giorno',
    key: 'day'
  }, {
    name: 'Ora',
    key: 'hour'
  }]
};

var _default = (0, _reactRedux.connect)(_datasetHelper.datasetMapStateToProps)(TimeChart);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TimeChart, 'TimeChart', 'react-src/components/TimeChart/TimeChart.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/components/TimeChart/TimeChart.js');
}();

;