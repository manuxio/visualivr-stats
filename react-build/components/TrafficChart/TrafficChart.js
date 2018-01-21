'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactChartjs = require('react-chartjs-2');

var _agent = require('../../reduxstore/agent.js');

var _agent2 = _interopRequireDefault(_agent);

var _datasetHelper = require('../../tools/datasetHelper.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mainChart = {};

var mainChartOpts = {};

var TrafficChart = function (_Component) {
  _inherits(TrafficChart, _Component);

  function TrafficChart(props) {
    _classCallCheck(this, TrafficChart);

    var _this = _possibleConstructorReturn(this, (TrafficChart.__proto__ || Object.getPrototypeOf(TrafficChart)).call(this, props));

    _this.state = _extends({}, props, {
      graphData: null
    });
    _this.state.datasetReady = (0, _datasetHelper.isDatasetReady)(_this.state);
    _this.state.datasetChanged = false;
    return _this;
  }

  _createClass(TrafficChart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _state = this.state,
          datasetReady = _state.datasetReady,
          datasetChanged = _state.datasetChanged,
          mandato = _state.mandato,
          idcliente = _state.idcliente,
          start = _state.start,
          end = _state.end;

      console.log('TrafficChart componentDidMount', datasetReady, datasetChanged);
      if (datasetReady) {
        this.setState({
          graphData: null,
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

      var _state2 = this.state,
          mandato = _state2.mandato,
          idcliente = _state2.idcliente,
          start = _state2.start,
          end = _state2.end;

      console.log('TrafficChart', 'Loading data');
      _agent2.default.requests.get('/vivr/openedfiles').then(function (response) {
        var kk = ['year', 'month', 'day', 'hour'];
        kk.forEach(function (k) {
          if (response[k]) {
            var vals = response[k].data;
            vals.forEach(function (v) {
              if (v.x) {
                v.x = new Date(v.x);
              }
            });
          }
        });
        console.log('response', response.day.data);
        _this3.setState({
          graphData: response
        });
      }, function (e) {
        console.log('E', e);
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var _this4 = this;

      if ((0, _datasetHelper.isDatasetChanged)(newProps, this.state)) {
        this.setState(_extends({}, newProps, {
          datasetChanged: true,
          datasetReady: (0, _datasetHelper.isDatasetReady)(newProps)
        }), function () {
          _this4.reloadData();
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
      var _state3 = this.state,
          datasetReady = _state3.datasetReady,
          datasetChanged = _state3.datasetChanged,
          mandato = _state3.mandato,
          idcliente = _state3.idcliente,
          start = _state3.start,
          end = _state3.end,
          graphData = _state3.graphData;

      if (!graphData) {
        return _react2.default.createElement(
          'div',
          null,
          'Waiting...'
        );
      }
      return _react2.default.createElement(
        'div',
        { className: 'chart-wrapper', style: { height: 300 + 'px', marginTop: 40 + 'px' } },
        _react2.default.createElement(_reactChartjs.Line, {
          options: {
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
          },
          data: {
            labels: ['Red', 'Green', 'Yellow'],
            datasets: [{
              // label: null,
              data: graphData.day.data
            }]
          },
          height: 300
        })
      );
    }
  }]);

  return TrafficChart;
}(_react.Component);

var _default = (0, _reactRedux.connect)(_datasetHelper.datasetMapStateToProps)(TrafficChart);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mainChart, 'mainChart', 'react-src/components/TrafficChart/TrafficChart.js');

  __REACT_HOT_LOADER__.register(mainChartOpts, 'mainChartOpts', 'react-src/components/TrafficChart/TrafficChart.js');

  __REACT_HOT_LOADER__.register(TrafficChart, 'TrafficChart', 'react-src/components/TrafficChart/TrafficChart.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/components/TrafficChart/TrafficChart.js');
}();

;