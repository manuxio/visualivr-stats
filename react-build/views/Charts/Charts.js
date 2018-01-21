'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var line = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    fill: false,
    lineTension: 0.1,
    backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [65, 59, 80, 81, 56, 55, 40]
  }]
};

var bar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgba(255,99,132,0.2)',
    borderColor: 'rgba(255,99,132,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    hoverBorderColor: 'rgba(255,99,132,1)',
    data: [65, 59, 80, 81, 56, 55, 40]
  }]
};

var doughnut = {
  labels: ['Red', 'Green', 'Yellow'],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
  }]
};

var radar = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgba(179,181,198,0.2)',
    borderColor: 'rgba(179,181,198,1)',
    pointBackgroundColor: 'rgba(179,181,198,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(179,181,198,1)',
    data: [65, 59, 90, 81, 56, 55, 40]
  }, {
    label: 'My Second dataset',
    backgroundColor: 'rgba(255,99,132,0.2)',
    borderColor: 'rgba(255,99,132,1)',
    pointBackgroundColor: 'rgba(255,99,132,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(255,99,132,1)',
    data: [28, 48, 40, 19, 96, 27, 100]
  }]
};

var pie = {
  labels: ['Red', 'Green', 'Yellow'],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
  }]
};

var polar = {
  datasets: [{
    data: [11, 16, 7, 3, 14],
    backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
    label: 'My dataset' // for legend
  }],
  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
};

var Charts = function (_Component) {
  _inherits(Charts, _Component);

  function Charts() {
    _classCallCheck(this, Charts);

    return _possibleConstructorReturn(this, (Charts.__proto__ || Object.getPrototypeOf(Charts)).apply(this, arguments));
  }

  _createClass(Charts, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'animated fadeIn' },
        _react2.default.createElement(
          _reactstrap.CardColumns,
          { className: 'cols-2' },
          _react2.default.createElement(
            _reactstrap.Card,
            null,
            _react2.default.createElement(
              _reactstrap.CardHeader,
              null,
              'Line Chart',
              _react2.default.createElement(
                'div',
                { className: 'card-actions' },
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.chartjs.org' },
                  _react2.default.createElement(
                    'small',
                    { className: 'text-muted' },
                    'docs'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.CardBody,
              null,
              _react2.default.createElement(
                'div',
                { className: 'chart-wrapper' },
                _react2.default.createElement(_reactChartjs.Line, { data: line,
                  options: {
                    maintainAspectRatio: false
                  }
                })
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Card,
            null,
            _react2.default.createElement(
              _reactstrap.CardHeader,
              null,
              'Bar Chart',
              _react2.default.createElement(
                'div',
                { className: 'card-actions' },
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.chartjs.org' },
                  _react2.default.createElement(
                    'small',
                    { className: 'text-muted' },
                    'docs'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.CardBody,
              null,
              _react2.default.createElement(
                'div',
                { className: 'chart-wrapper' },
                _react2.default.createElement(_reactChartjs.Bar, { data: bar,
                  options: {
                    maintainAspectRatio: false
                  }
                })
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Card,
            null,
            _react2.default.createElement(
              _reactstrap.CardHeader,
              null,
              'Doughnut Chart',
              _react2.default.createElement(
                'div',
                { className: 'card-actions' },
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.chartjs.org' },
                  _react2.default.createElement(
                    'small',
                    { className: 'text-muted' },
                    'docs'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.CardBody,
              null,
              _react2.default.createElement(
                'div',
                { className: 'chart-wrapper' },
                _react2.default.createElement(_reactChartjs.Doughnut, { data: doughnut })
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Card,
            null,
            _react2.default.createElement(
              _reactstrap.CardHeader,
              null,
              'Radar Chart',
              _react2.default.createElement(
                'div',
                { className: 'card-actions' },
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.chartjs.org' },
                  _react2.default.createElement(
                    'small',
                    { className: 'text-muted' },
                    'docs'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.CardBody,
              null,
              _react2.default.createElement(
                'div',
                { className: 'chart-wrapper' },
                _react2.default.createElement(_reactChartjs.Radar, { data: radar })
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Card,
            null,
            _react2.default.createElement(
              _reactstrap.CardHeader,
              null,
              'Pie Chart',
              _react2.default.createElement(
                'div',
                { className: 'card-actions' },
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.chartjs.org' },
                  _react2.default.createElement(
                    'small',
                    { className: 'text-muted' },
                    'docs'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.CardBody,
              null,
              _react2.default.createElement(
                'div',
                { className: 'chart-wrapper' },
                _react2.default.createElement(_reactChartjs.Pie, { data: pie })
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Card,
            null,
            _react2.default.createElement(
              _reactstrap.CardHeader,
              null,
              'Polar Area Chart',
              _react2.default.createElement(
                'div',
                { className: 'card-actions' },
                _react2.default.createElement(
                  'a',
                  { href: 'http://www.chartjs.org' },
                  _react2.default.createElement(
                    'small',
                    { className: 'text-muted' },
                    'docs'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.CardBody,
              null,
              _react2.default.createElement(
                'div',
                { className: 'chart-wrapper' },
                _react2.default.createElement(_reactChartjs.Polar, { data: polar })
              )
            )
          )
        )
      );
    }
  }]);

  return Charts;
}(_react.Component);

var _default = Charts;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(line, 'line', 'react-src/views/Charts/Charts.js');

  __REACT_HOT_LOADER__.register(bar, 'bar', 'react-src/views/Charts/Charts.js');

  __REACT_HOT_LOADER__.register(doughnut, 'doughnut', 'react-src/views/Charts/Charts.js');

  __REACT_HOT_LOADER__.register(radar, 'radar', 'react-src/views/Charts/Charts.js');

  __REACT_HOT_LOADER__.register(pie, 'pie', 'react-src/views/Charts/Charts.js');

  __REACT_HOT_LOADER__.register(polar, 'polar', 'react-src/views/Charts/Charts.js');

  __REACT_HOT_LOADER__.register(Charts, 'Charts', 'react-src/views/Charts/Charts.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/views/Charts/Charts.js');
}();

;