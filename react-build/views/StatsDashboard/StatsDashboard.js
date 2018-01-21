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

var brandPrimary = '#20a8d8';
var brandSuccess = '#4dbd74';
var brandInfo = '#63c2de';
var brandWarning = '#f8cb00';
var brandDanger = '#f86c6b';

// Card Chart 1
var cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: brandPrimary,
    borderColor: 'rgba(255,255,255,.55)',
    data: [65, 59, 84, 84, 51, 55, 40]
  }]
};

var cardChartOpts1 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent'
      }

    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5
      }
    }]
  },
  elements: {
    line: {
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4
    }
  }

  // Card Chart 2
};var cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: brandInfo,
    borderColor: 'rgba(255,255,255,.55)',
    data: [1, 18, 9, 17, 34, 22, 11]
  }]
};

var cardChartOpts2 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent'
      }

    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5
      }
    }]
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4
    }
  }

  // Card Chart 3
};var cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgba(255,255,255,.2)',
    borderColor: 'rgba(255,255,255,.55)',
    data: [78, 81, 80, 45, 34, 12, 40]
  }]
};

var cardChartOpts3 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4
    }
  }

  // Card Chart 4
};var cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgba(255,255,255,.3)',
    borderColor: 'transparent',
    data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
  }]
};

var cardChartOpts4 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false,
      barPercentage: 0.6
    }],
    yAxes: [{
      display: false
    }]
  }

  // Social Box Chart
};var socialBoxData = [{ data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' }, { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' }, { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' }, { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' }];

var makeSocialBoxData = function makeSocialBoxData(dataSetNo) {
  var dataset = socialBoxData[dataSetNo];
  var data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: dataset.data,
      label: dataset.label
    }]
  };
  return function () {
    return data;
  };
};

var socialChartOpts = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
};

// sparkline charts
var sparkLineChartData = [{
  data: [35, 23, 56, 22, 97, 23, 64],
  label: 'New Clients'
}, {
  data: [65, 59, 84, 84, 51, 55, 40],
  label: 'Recurring Clients'
}, {
  data: [35, 23, 56, 22, 97, 23, 64],
  label: 'Pageviews'
}, {
  data: [65, 59, 84, 84, 51, 55, 40],
  label: 'Organic'
}, {
  data: [78, 81, 80, 45, 34, 12, 40],
  label: 'CTR'
}, {
  data: [1, 13, 9, 17, 34, 41, 38],
  label: 'Bounce Rate'
}];

var makeSparkLineData = function makeSparkLineData(dataSetNo, variant) {
  var dataset = sparkLineChartData[dataSetNo];
  var data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      backgroundColor: 'transparent',
      borderColor: variant ? variant : '#c2cfd6',
      data: dataset.data,
      label: dataset.label
    }]
  };
  return function () {
    return data;
  };
};

var sparklineChartOpts = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  },
  legend: {
    display: false
  }
};

// Main Chart

// convert Hex to RGBA
function convertHex(hex, opacity) {
  hex = hex.replace('#', '');
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
  return result;
}

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

var mainChart = {
  labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: convertHex(brandInfo, 10),
    borderColor: brandInfo,
    pointHoverBackgroundColor: '#fff',
    borderWidth: 2,
    data: data1
  }, {
    label: 'My Second dataset',
    backgroundColor: 'transparent',
    borderColor: brandSuccess,
    pointHoverBackgroundColor: '#fff',
    borderWidth: 2,
    data: data2
  }, {
    label: 'My Third dataset',
    backgroundColor: 'transparent',
    borderColor: brandDanger,
    pointHoverBackgroundColor: '#fff',
    borderWidth: 1,
    borderDash: [8, 5],
    data: data3
  }]
};

var mainChartOpts = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        drawOnChartArea: false
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        maxTicksLimit: 5,
        stepSize: Math.ceil(250 / 5),
        max: 250
      }
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
};

var StatsDashboard = function (_Component) {
  _inherits(StatsDashboard, _Component);

  function StatsDashboard(props) {
    _classCallCheck(this, StatsDashboard);

    var _this = _possibleConstructorReturn(this, (StatsDashboard.__proto__ || Object.getPrototypeOf(StatsDashboard)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.state = {
      dropdownOpen: false
    };
    return _this;
  }

  _createClass(StatsDashboard, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'animated fadeIn' },
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'text-white bg-primary' },
              _react2.default.createElement(
                _reactstrap.CardBody,
                { className: 'pb-0' },
                _react2.default.createElement(
                  _reactstrap.ButtonGroup,
                  { className: 'float-right' },
                  _react2.default.createElement(
                    _reactstrap.ButtonDropdown,
                    { id: 'card1', isOpen: this.state.card1,
                      toggle: function toggle() {
                        _this2.setState({ card1: !_this2.state.card1 });
                      } },
                    _react2.default.createElement(
                      _reactstrap.DropdownToggle,
                      { caret: true, className: 'p-0', color: 'transparent' },
                      _react2.default.createElement('i', { className: 'icon-settings' })
                    ),
                    _react2.default.createElement(
                      _reactstrap.DropdownMenu,
                      { right: true },
                      _react2.default.createElement(
                        _reactstrap.DropdownItem,
                        null,
                        'Action'
                      ),
                      _react2.default.createElement(
                        _reactstrap.DropdownItem,
                        null,
                        'Another action'
                      ),
                      _react2.default.createElement(
                        _reactstrap.DropdownItem,
                        { disabled: true },
                        'Disabled action'
                      ),
                      _react2.default.createElement(
                        _reactstrap.DropdownItem,
                        null,
                        'Something else here'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'h4',
                  { className: 'mb-0' },
                  '9.823'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Members online'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'chart-wrapper px-3', style: { height: '70px' } },
                _react2.default.createElement(_reactChartjs.Line, { data: cardChartData1, options: cardChartOpts1, height: 70 })
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'text-white bg-info' },
              _react2.default.createElement(
                _reactstrap.CardBody,
                { className: 'pb-0' },
                _react2.default.createElement(
                  _reactstrap.ButtonGroup,
                  { className: 'float-right' },
                  _react2.default.createElement(
                    _reactstrap.Dropdown,
                    { id: 'card2', isOpen: this.state.card2,
                      toggle: function toggle() {
                        _this2.setState({ card2: !_this2.state.card2 });
                      } },
                    _react2.default.createElement(
                      _reactstrap.DropdownToggle,
                      { className: 'p-0', color: 'transparent' },
                      _react2.default.createElement('i', { className: 'icon-location-pin' })
                    ),
                    _react2.default.createElement(
                      _reactstrap.DropdownMenu,
                      { right: true },
                      _react2.default.createElement(
                        _reactstrap.DropdownItem,
                        null,
                        'Action'
                      ),
                      _react2.default.createElement(
                        _reactstrap.DropdownItem,
                        null,
                        'Another action'
                      ),
                      _react2.default.createElement(
                        _reactstrap.DropdownItem,
                        null,
                        'Something else here'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'h4',
                  { className: 'mb-0' },
                  '9.823'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Members online'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'chart-wrapper px-3', style: { height: '70px' } },
                _react2.default.createElement(_reactChartjs.Line, { data: cardChartData2, options: cardChartOpts2, height: 70 })
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'text-white bg-warning' },
              _react2.default.createElement(
                _reactstrap.CardBody,
                { className: 'pb-0' },
                _react2.default.createElement(
                  _reactstrap.ButtonGroup,
                  { className: 'float-right' },
                  _react2.default.createElement(
                    _reactstrap.Dropdown,
                    { id: 'card3', isOpen: this.state.card3,
                      toggle: function toggle() {
                        _this2.setState({ card3: !_this2.state.card3 });
                      } },
                    _react2.default.createElement(
                      _reactstrap.DropdownToggle,
                      { caret: true, className: 'p-0', color: 'transparent' },
                      _react2.default.createElement('i', { className: 'icon-settings' })
                    ),
                    _react2.default.createElement(
                      _reactstrap.DropdownMenu,
                      { right: true },
                      _react2.default.createElement(
                        _reactstrap.DropdownItem,
                        null,
                        'Action'
                      ),
                      _react2.default.createElement(
                        _reactstrap.DropdownItem,
                        null,
                        'Another action'
                      ),
                      _react2.default.createElement(
                        _reactstrap.DropdownItem,
                        null,
                        'Something else here'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'h4',
                  { className: 'mb-0' },
                  '9.823'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Members online'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'chart-wrapper px-0', style: { height: '70px' } },
                _react2.default.createElement(_reactChartjs.Line, { data: cardChartData3, options: cardChartOpts3, height: 70 })
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'text-white bg-danger' },
              _react2.default.createElement(
                _reactstrap.CardBody,
                { className: 'pb-0' },
                _react2.default.createElement(
                  _reactstrap.ButtonGroup,
                  { className: 'float-right' },
                  _react2.default.createElement(
                    _reactstrap.ButtonDropdown,
                    { id: 'card4', isOpen: this.state.card4,
                      toggle: function toggle() {
                        _this2.setState({ card4: !_this2.state.card4 });
                      } },
                    _react2.default.createElement(
                      _reactstrap.DropdownToggle,
                      { caret: true, className: 'p-0', color: 'transparent' },
                      _react2.default.createElement('i', { className: 'icon-settings' })
                    ),
                    _react2.default.createElement(
                      _reactstrap.DropdownMenu,
                      { right: true },
                      _react2.default.createElement(
                        _reactstrap.DropdownItem,
                        null,
                        'Action'
                      ),
                      _react2.default.createElement(
                        _reactstrap.DropdownItem,
                        null,
                        'Another action'
                      ),
                      _react2.default.createElement(
                        _reactstrap.DropdownItem,
                        null,
                        'Something else here'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'h4',
                  { className: 'mb-0' },
                  '9.823'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Members online'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'chart-wrapper px-3', style: { height: '70px' } },
                _react2.default.createElement(_reactChartjs.Bar, { data: cardChartData4, options: cardChartOpts4, height: 70 })
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            null,
            _react2.default.createElement(
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
                      'Traffic'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'small text-muted' },
                      'November 2015'
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
                        _react2.default.createElement(
                          _reactstrap.Label,
                          { htmlFor: 'option1', className: 'btn btn-outline-secondary' },
                          _react2.default.createElement(_reactstrap.Input, { type: 'radio', name: 'options', id: 'option1' }),
                          ' Day'
                        ),
                        _react2.default.createElement(
                          _reactstrap.Label,
                          { htmlFor: 'option2', className: 'btn btn-outline-secondary active' },
                          _react2.default.createElement(_reactstrap.Input, { type: 'radio', name: 'options', id: 'option2', defaultChecked: true }),
                          ' Month'
                        ),
                        _react2.default.createElement(
                          _reactstrap.Label,
                          { htmlFor: 'option3', className: 'btn btn-outline-secondary' },
                          _react2.default.createElement(_reactstrap.Input, { type: 'radio', name: 'options', id: 'option3' }),
                          ' Year'
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'chart-wrapper', style: { height: 300 + 'px', marginTop: 40 + 'px' } },
                  _react2.default.createElement(_reactChartjs.Line, { data: mainChart, options: mainChartOpts, height: 300 })
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardFooter,
                null,
                _react2.default.createElement(
                  'ul',
                  null,
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'div',
                      { className: 'text-muted' },
                      'Visits'
                    ),
                    _react2.default.createElement(
                      'strong',
                      null,
                      '29.703 Users (40%)'
                    ),
                    _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs mt-2', color: 'success', value: '40' })
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'd-none d-md-table-cell' },
                    _react2.default.createElement(
                      'div',
                      { className: 'text-muted' },
                      'Unique'
                    ),
                    _react2.default.createElement(
                      'strong',
                      null,
                      '24.093 Users (20%)'
                    ),
                    _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs mt-2', color: 'info', value: '20' })
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'div',
                      { className: 'text-muted' },
                      'Pageviews'
                    ),
                    _react2.default.createElement(
                      'strong',
                      null,
                      '78.706 Views (60%)'
                    ),
                    _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs mt-2', color: 'warning', value: '60' })
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'd-none d-md-table-cell' },
                    _react2.default.createElement(
                      'div',
                      { className: 'text-muted' },
                      'New Users'
                    ),
                    _react2.default.createElement(
                      'strong',
                      null,
                      '22.123 Users (80%)'
                    ),
                    _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs mt-2', color: 'danger', value: '80' })
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'd-none d-md-table-cell' },
                    _react2.default.createElement(
                      'div',
                      { className: 'text-muted' },
                      'Bounce Rate'
                    ),
                    _react2.default.createElement(
                      'strong',
                      null,
                      'Average 40.15%'
                    ),
                    _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs mt-2', color: 'primary', value: '40' })
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '6', sm: '6', lg: '3' },
            _react2.default.createElement(
              'div',
              { className: 'social-box facebook' },
              _react2.default.createElement('i', { className: 'fa fa-facebook' }),
              _react2.default.createElement(
                'div',
                { className: 'chart-wrapper' },
                _react2.default.createElement(_reactChartjs.Line, { data: makeSocialBoxData(0), options: socialChartOpts, height: 90 })
              ),
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    '89k'
                  ),
                  _react2.default.createElement(
                    'span',
                    null,
                    'friends'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    '459'
                  ),
                  _react2.default.createElement(
                    'span',
                    null,
                    'feeds'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '6', sm: '6', lg: '3' },
            _react2.default.createElement(
              'div',
              { className: 'social-box twitter' },
              _react2.default.createElement('i', { className: 'fa fa-twitter' }),
              _react2.default.createElement(
                'div',
                { className: 'chart-wrapper' },
                _react2.default.createElement(_reactChartjs.Line, { data: makeSocialBoxData(1), options: socialChartOpts, height: 90 })
              ),
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    '973k'
                  ),
                  _react2.default.createElement(
                    'span',
                    null,
                    'followers'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    '1.792'
                  ),
                  _react2.default.createElement(
                    'span',
                    null,
                    'tweets'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '6', sm: '6', lg: '3' },
            _react2.default.createElement(
              'div',
              { className: 'social-box linkedin' },
              _react2.default.createElement('i', { className: 'fa fa-linkedin' }),
              _react2.default.createElement(
                'div',
                { className: 'chart-wrapper' },
                _react2.default.createElement(_reactChartjs.Line, { data: makeSocialBoxData(2), options: socialChartOpts, height: 90 })
              ),
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    '500+'
                  ),
                  _react2.default.createElement(
                    'span',
                    null,
                    'contacts'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    '292'
                  ),
                  _react2.default.createElement(
                    'span',
                    null,
                    'feeds'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '6', sm: '6', lg: '3' },
            _react2.default.createElement(
              'div',
              { className: 'social-box google-plus' },
              _react2.default.createElement('i', { className: 'fa fa-google-plus' }),
              _react2.default.createElement(
                'div',
                { className: 'chart-wrapper' },
                _react2.default.createElement(_reactChartjs.Line, { data: makeSocialBoxData(3), options: socialChartOpts, height: 90 })
              ),
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    '894'
                  ),
                  _react2.default.createElement(
                    'span',
                    null,
                    'followers'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    '92'
                  ),
                  _react2.default.createElement(
                    'span',
                    null,
                    'circles'
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            null,
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Traffic ',
                '&',
                ' Sales'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Row,
                  null,
                  _react2.default.createElement(
                    _reactstrap.Col,
                    { xs: '12', md: '6', xl: '4' },
                    _react2.default.createElement(
                      _reactstrap.Row,
                      null,
                      _react2.default.createElement(
                        _reactstrap.Col,
                        { sm: '6' },
                        _react2.default.createElement(
                          'div',
                          { className: 'callout callout-info' },
                          _react2.default.createElement(
                            'small',
                            { className: 'text-muted' },
                            'New Clients'
                          ),
                          _react2.default.createElement('br', null),
                          _react2.default.createElement(
                            'strong',
                            { className: 'h4' },
                            '9,123'
                          ),
                          _react2.default.createElement(
                            'div',
                            { className: 'chart-wrapper' },
                            _react2.default.createElement(_reactChartjs.Line, { data: makeSparkLineData(0, brandPrimary), options: sparklineChartOpts, width: 100, height: 30 })
                          )
                        )
                      ),
                      _react2.default.createElement(
                        _reactstrap.Col,
                        { sm: '6' },
                        _react2.default.createElement(
                          'div',
                          { className: 'callout callout-danger' },
                          _react2.default.createElement(
                            'small',
                            { className: 'text-muted' },
                            'Recurring Clients'
                          ),
                          _react2.default.createElement('br', null),
                          _react2.default.createElement(
                            'strong',
                            { className: 'h4' },
                            '22,643'
                          ),
                          _react2.default.createElement(
                            'div',
                            { className: 'chart-wrapper' },
                            _react2.default.createElement(_reactChartjs.Line, { data: makeSparkLineData(1, brandDanger), options: sparklineChartOpts, width: 100, height: 30 })
                          )
                        )
                      )
                    ),
                    _react2.default.createElement('hr', { className: 'mt-0' }),
                    _react2.default.createElement(
                      'ul',
                      { className: 'horizontal-bars' },
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'div',
                          { className: 'title' },
                          'Monday'
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'bars' },
                          _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'info', value: '34' }),
                          _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'danger', value: '78' })
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'div',
                          { className: 'title' },
                          'Tuesday'
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'bars' },
                          _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'info', value: '56' }),
                          _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'danger', value: '94' })
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'div',
                          { className: 'title' },
                          'Wednesday'
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'bars' },
                          _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'info', value: '12' }),
                          _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'danger', value: '67' })
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'div',
                          { className: 'title' },
                          'Thursday'
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'bars' },
                          _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'info', value: '43' }),
                          _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'danger', value: '91' })
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'div',
                          { className: 'title' },
                          'Friday'
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'bars' },
                          _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'info', value: '22' }),
                          _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'danger', value: '73' })
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'div',
                          { className: 'title' },
                          'Saturday'
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'bars' },
                          _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'info', value: '53' }),
                          _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'danger', value: '82' })
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                          'div',
                          { className: 'title' },
                          'Sunday'
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'bars' },
                          _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'info', value: '9' }),
                          _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'danger', value: '69' })
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        { className: 'legend' },
                        _react2.default.createElement(_reactstrap.Badge, { pill: true, color: 'info' }),
                        _react2.default.createElement(
                          'small',
                          null,
                          'New clients'
                        ),
                        '\xA0 ',
                        _react2.default.createElement(_reactstrap.Badge, { pill: true, color: 'danger' }),
                        _react2.default.createElement(
                          'small',
                          null,
                          'Recurring clients'
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Col,
                    { xs: '12', md: '6', xl: '4' },
                    _react2.default.createElement(
                      _reactstrap.Row,
                      null,
                      _react2.default.createElement(
                        _reactstrap.Col,
                        { sm: '6' },
                        _react2.default.createElement(
                          'div',
                          { className: 'callout callout-warning' },
                          _react2.default.createElement(
                            'small',
                            { className: 'text-muted' },
                            'Pageviews'
                          ),
                          _react2.default.createElement('br', null),
                          _react2.default.createElement(
                            'strong',
                            { className: 'h4' },
                            '78,623'
                          ),
                          _react2.default.createElement(
                            'div',
                            { className: 'chart-wrapper' },
                            _react2.default.createElement(_reactChartjs.Line, { data: makeSparkLineData(2, brandWarning), options: sparklineChartOpts, width: 100, height: 30 })
                          )
                        )
                      ),
                      _react2.default.createElement(
                        _reactstrap.Col,
                        { sm: '6' },
                        _react2.default.createElement(
                          'div',
                          { className: 'callout callout-success' },
                          _react2.default.createElement(
                            'small',
                            { className: 'text-muted' },
                            'Organic'
                          ),
                          _react2.default.createElement('br', null),
                          _react2.default.createElement(
                            'strong',
                            { className: 'h4' },
                            '49,123'
                          ),
                          _react2.default.createElement(
                            'div',
                            { className: 'chart-wrapper' },
                            _react2.default.createElement(_reactChartjs.Line, { data: makeSparkLineData(3, brandSuccess), options: sparklineChartOpts, width: 100, height: 30 })
                          )
                        )
                      )
                    ),
                    _react2.default.createElement('hr', { className: 'mt-0' }),
                    _react2.default.createElement(
                      'ul',
                      { className: 'horizontal-bars type-2' },
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement('i', { className: 'icon-user' }),
                        _react2.default.createElement(
                          'span',
                          { className: 'title' },
                          'Male'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'value' },
                          '43%'
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'bars' },
                          _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'warning', value: '43' })
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement('i', { className: 'icon-user-female' }),
                        _react2.default.createElement(
                          'span',
                          { className: 'title' },
                          'Female'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'value' },
                          '37%'
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'bars' },
                          _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'warning', value: '37' })
                        )
                      ),
                      _react2.default.createElement('li', { className: 'divider' }),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement('i', { className: 'icon-globe' }),
                        _react2.default.createElement(
                          'span',
                          { className: 'title' },
                          'Organic Search'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'value' },
                          '191,235 ',
                          _react2.default.createElement(
                            'span',
                            { className: 'text-muted small' },
                            '(56%)'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'bars' },
                          _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'success', value: '56' })
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement('i', { className: 'icon-social-facebook' }),
                        _react2.default.createElement(
                          'span',
                          { className: 'title' },
                          'Facebook'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'value' },
                          '51,223 ',
                          _react2.default.createElement(
                            'span',
                            { className: 'text-muted small' },
                            '(15%)'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'bars' },
                          _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'success', value: '15' })
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement('i', { className: 'icon-social-twitter' }),
                        _react2.default.createElement(
                          'span',
                          { className: 'title' },
                          'Twitter'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'value' },
                          '37,564 ',
                          _react2.default.createElement(
                            'span',
                            { className: 'text-muted small' },
                            '(11%)'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'bars' },
                          _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'success', value: '11' })
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement('i', { className: 'icon-social-linkedin' }),
                        _react2.default.createElement(
                          'span',
                          { className: 'title' },
                          'LinkedIn'
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'value' },
                          '27,319 ',
                          _react2.default.createElement(
                            'span',
                            { className: 'text-muted small' },
                            '(8%)'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'bars' },
                          _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'success', value: '8' })
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        { className: 'divider text-center' },
                        _react2.default.createElement(
                          _reactstrap.Button,
                          { color: 'link', size: 'sm', className: 'text-muted', 'data-toggle': 'tooltip', 'data-placement': 'top',
                            title: '', 'data-original-title': 'show more' },
                          _react2.default.createElement('i', { className: 'icon-options' })
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Col,
                    { xs: '12', xl: '4' },
                    _react2.default.createElement(
                      _reactstrap.Row,
                      null,
                      _react2.default.createElement(
                        _reactstrap.Col,
                        { sm: '6' },
                        _react2.default.createElement(
                          'div',
                          { className: 'callout' },
                          _react2.default.createElement(
                            'small',
                            { className: 'text-muted' },
                            'CTR'
                          ),
                          _react2.default.createElement('br', null),
                          _react2.default.createElement(
                            'strong',
                            { className: 'h4' },
                            '23%'
                          ),
                          _react2.default.createElement(
                            'div',
                            { className: 'chart-wrapper' },
                            _react2.default.createElement(_reactChartjs.Line, { data: makeSparkLineData(4), options: sparklineChartOpts, width: 100, height: 30 })
                          )
                        )
                      ),
                      _react2.default.createElement(
                        _reactstrap.Col,
                        { sm: '6' },
                        _react2.default.createElement(
                          'div',
                          { className: 'callout callout-primary' },
                          _react2.default.createElement(
                            'small',
                            { className: 'text-muted' },
                            'Bounce Rate'
                          ),
                          _react2.default.createElement('br', null),
                          _react2.default.createElement(
                            'strong',
                            { className: 'h4' },
                            '5%'
                          ),
                          _react2.default.createElement(
                            'div',
                            { className: 'chart-wrapper' },
                            _react2.default.createElement(_reactChartjs.Line, { data: makeSparkLineData(5, brandPrimary), options: sparklineChartOpts, width: 100, height: 30 })
                          )
                        )
                      )
                    ),
                    _react2.default.createElement('hr', { className: 'mt-0' }),
                    _react2.default.createElement(
                      'ul',
                      { className: 'icons-list' },
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement('i', { className: 'icon-screen-desktop bg-primary' }),
                        _react2.default.createElement(
                          'div',
                          { className: 'desc' },
                          _react2.default.createElement(
                            'div',
                            { className: 'title' },
                            'iMac 4k'
                          ),
                          _react2.default.createElement(
                            'small',
                            null,
                            'Lorem ipsum dolor sit amet'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'value' },
                          _react2.default.createElement(
                            'div',
                            { className: 'small text-muted' },
                            'Sold this week'
                          ),
                          _react2.default.createElement(
                            'strong',
                            null,
                            '1.924'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'actions' },
                          _react2.default.createElement(
                            _reactstrap.Button,
                            { color: 'link', className: 'text-muted' },
                            _react2.default.createElement('i', { className: 'icon-settings' })
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement('i', { className: 'icon-screen-smartphone bg-info' }),
                        _react2.default.createElement(
                          'div',
                          { className: 'desc' },
                          _react2.default.createElement(
                            'div',
                            { className: 'title' },
                            'Samsung Galaxy Edge'
                          ),
                          _react2.default.createElement(
                            'small',
                            null,
                            'Lorem ipsum dolor sit amet'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'value' },
                          _react2.default.createElement(
                            'div',
                            { className: 'small text-muted' },
                            'Sold this week'
                          ),
                          _react2.default.createElement(
                            'strong',
                            null,
                            '1.224'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'actions' },
                          _react2.default.createElement(
                            _reactstrap.Button,
                            { color: 'link', className: 'text-muted' },
                            _react2.default.createElement('i', { className: 'icon-settings' })
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement('i', { className: 'icon-screen-smartphone bg-warning' }),
                        _react2.default.createElement(
                          'div',
                          { className: 'desc' },
                          _react2.default.createElement(
                            'div',
                            { className: 'title' },
                            'iPhone 6S'
                          ),
                          _react2.default.createElement(
                            'small',
                            null,
                            'Lorem ipsum dolor sit amet'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'value' },
                          _react2.default.createElement(
                            'div',
                            { className: 'small text-muted' },
                            'Sold this week'
                          ),
                          _react2.default.createElement(
                            'strong',
                            null,
                            '1.163'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'actions' },
                          _react2.default.createElement(
                            _reactstrap.Button,
                            { color: 'link', className: 'text-muted' },
                            _react2.default.createElement('i', { className: 'icon-settings' })
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement('i', { className: 'icon-user bg-danger' }),
                        _react2.default.createElement(
                          'div',
                          { className: 'desc' },
                          _react2.default.createElement(
                            'div',
                            { className: 'title' },
                            'Premium accounts'
                          ),
                          _react2.default.createElement(
                            'small',
                            null,
                            'Lorem ipsum dolor sit amet'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'value' },
                          _react2.default.createElement(
                            'div',
                            { className: 'small text-muted' },
                            'Sold this week'
                          ),
                          _react2.default.createElement(
                            'strong',
                            null,
                            '928'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'actions' },
                          _react2.default.createElement(
                            _reactstrap.Button,
                            { color: 'link', className: 'text-muted' },
                            _react2.default.createElement('i', { className: 'icon-settings' })
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement('i', { className: 'icon-social-spotify bg-success' }),
                        _react2.default.createElement(
                          'div',
                          { className: 'desc' },
                          _react2.default.createElement(
                            'div',
                            { className: 'title' },
                            'Spotify Subscriptions'
                          ),
                          _react2.default.createElement(
                            'small',
                            null,
                            'Lorem ipsum dolor sit amet'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'value' },
                          _react2.default.createElement(
                            'div',
                            { className: 'small text-muted' },
                            'Sold this week'
                          ),
                          _react2.default.createElement(
                            'strong',
                            null,
                            '893'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'actions' },
                          _react2.default.createElement(
                            _reactstrap.Button,
                            { color: 'link', className: 'text-muted' },
                            _react2.default.createElement('i', { className: 'icon-settings' })
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement('i', { className: 'icon-cloud-download bg-danger' }),
                        _react2.default.createElement(
                          'div',
                          { className: 'desc' },
                          _react2.default.createElement(
                            'div',
                            { className: 'title' },
                            'Ebook'
                          ),
                          _react2.default.createElement(
                            'small',
                            null,
                            'Lorem ipsum dolor sit amet'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'value' },
                          _react2.default.createElement(
                            'div',
                            { className: 'small text-muted' },
                            'Downloads'
                          ),
                          _react2.default.createElement(
                            'strong',
                            null,
                            '121.924'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'actions' },
                          _react2.default.createElement(
                            _reactstrap.Button,
                            { color: 'link', className: 'text-muted' },
                            _react2.default.createElement('i', { className: 'icon-settings' })
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement('i', { className: 'icon-camera bg-warning' }),
                        _react2.default.createElement(
                          'div',
                          { className: 'desc' },
                          _react2.default.createElement(
                            'div',
                            { className: 'title' },
                            'Photos'
                          ),
                          _react2.default.createElement(
                            'small',
                            null,
                            'Lorem ipsum dolor sit amet'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'value' },
                          _react2.default.createElement(
                            'div',
                            { className: 'small text-muted' },
                            'Uploaded'
                          ),
                          _react2.default.createElement(
                            'strong',
                            null,
                            '12.125'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'actions' },
                          _react2.default.createElement(
                            _reactstrap.Button,
                            { color: 'link', className: 'text-muted' },
                            _react2.default.createElement('i', { className: 'icon-settings' })
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'li',
                        { className: 'divider text-center' },
                        _react2.default.createElement(
                          _reactstrap.Button,
                          { color: 'link', size: 'sm', className: 'text-muted', 'data-toggle': 'tooltip', 'data-placement': 'top',
                            title: 'show more' },
                          _react2.default.createElement('i', { className: 'icon-options' })
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  _reactstrap.Table,
                  { hover: true, responsive: true, className: 'table-outline mb-0 d-none d-sm-table' },
                  _react2.default.createElement(
                    'thead',
                    { className: 'thead-light' },
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'th',
                        { className: 'text-center' },
                        _react2.default.createElement('i', { className: 'icon-people' })
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'User'
                      ),
                      _react2.default.createElement(
                        'th',
                        { className: 'text-center' },
                        'Country'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Usage'
                      ),
                      _react2.default.createElement(
                        'th',
                        { className: 'text-center' },
                        'Payment Method'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Activity'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        { className: 'text-center' },
                        _react2.default.createElement(
                          'div',
                          { className: 'avatar' },
                          _react2.default.createElement('img', { src: 'img/avatars/1.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' }),
                          _react2.default.createElement('span', { className: 'avatar-status badge-success' })
                        )
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          'div',
                          null,
                          'Yiorgos Avraamu'
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'small text-muted' },
                          _react2.default.createElement(
                            'span',
                            null,
                            'New'
                          ),
                          ' | Registered: Jan 1, 2015'
                        )
                      ),
                      _react2.default.createElement(
                        'td',
                        { className: 'text-center' },
                        _react2.default.createElement('img', { src: 'img/flags/USA.png', alt: 'USA', style: { height: 24 + 'px' } })
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          'div',
                          { className: 'clearfix' },
                          _react2.default.createElement(
                            'div',
                            { className: 'float-left' },
                            _react2.default.createElement(
                              'strong',
                              null,
                              '50%'
                            )
                          ),
                          _react2.default.createElement(
                            'div',
                            { className: 'float-right' },
                            _react2.default.createElement(
                              'small',
                              { className: 'text-muted' },
                              'Jun 11, 2015 - Jul 10, 2015'
                            )
                          )
                        ),
                        _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'success', value: '50' })
                      ),
                      _react2.default.createElement(
                        'td',
                        { className: 'text-center' },
                        _react2.default.createElement('i', { className: 'fa fa-cc-mastercard', style: { fontSize: 24 + 'px' } })
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          'div',
                          { className: 'small text-muted' },
                          'Last login'
                        ),
                        _react2.default.createElement(
                          'strong',
                          null,
                          '10 sec ago'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        { className: 'text-center' },
                        _react2.default.createElement(
                          'div',
                          { className: 'avatar' },
                          _react2.default.createElement('img', { src: 'img/avatars/2.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' }),
                          _react2.default.createElement('span', { className: 'avatar-status badge-danger' })
                        )
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          'div',
                          null,
                          'Avram Tarasios'
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'small text-muted' },
                          _react2.default.createElement(
                            'span',
                            null,
                            'Recurring'
                          ),
                          ' | Registered: Jan 1, 2015'
                        )
                      ),
                      _react2.default.createElement(
                        'td',
                        { className: 'text-center' },
                        _react2.default.createElement('img', { src: 'img/flags/Brazil.png', alt: 'Brazil', style: { height: 24 + 'px' } })
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          'div',
                          { className: 'clearfix' },
                          _react2.default.createElement(
                            'div',
                            { className: 'float-left' },
                            _react2.default.createElement(
                              'strong',
                              null,
                              '10%'
                            )
                          ),
                          _react2.default.createElement(
                            'div',
                            { className: 'float-right' },
                            _react2.default.createElement(
                              'small',
                              { className: 'text-muted' },
                              'Jun 11, 2015 - Jul 10, 2015'
                            )
                          )
                        ),
                        _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'info', value: '10' })
                      ),
                      _react2.default.createElement(
                        'td',
                        { className: 'text-center' },
                        _react2.default.createElement('i', { className: 'fa fa-cc-visa', style: { fontSize: 24 + 'px' } })
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          'div',
                          { className: 'small text-muted' },
                          'Last login'
                        ),
                        _react2.default.createElement(
                          'strong',
                          null,
                          '5 minutes ago'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        { className: 'text-center' },
                        _react2.default.createElement(
                          'div',
                          { className: 'avatar' },
                          _react2.default.createElement('img', { src: 'img/avatars/3.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' }),
                          _react2.default.createElement('span', { className: 'avatar-status badge-warning' })
                        )
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          'div',
                          null,
                          'Quintin Ed'
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'small text-muted' },
                          _react2.default.createElement(
                            'span',
                            null,
                            'New'
                          ),
                          ' | Registered: Jan 1, 2015'
                        )
                      ),
                      _react2.default.createElement(
                        'td',
                        { className: 'text-center' },
                        _react2.default.createElement('img', { src: 'img/flags/India.png', alt: 'India', style: { height: 24 + 'px' } })
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          'div',
                          { className: 'clearfix' },
                          _react2.default.createElement(
                            'div',
                            { className: 'float-left' },
                            _react2.default.createElement(
                              'strong',
                              null,
                              '74%'
                            )
                          ),
                          _react2.default.createElement(
                            'div',
                            { className: 'float-right' },
                            _react2.default.createElement(
                              'small',
                              { className: 'text-muted' },
                              'Jun 11, 2015 - Jul 10, 2015'
                            )
                          )
                        ),
                        _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'warning', value: '74' })
                      ),
                      _react2.default.createElement(
                        'td',
                        { className: 'text-center' },
                        _react2.default.createElement('i', { className: 'fa fa-cc-stripe', style: { fontSize: 24 + 'px' } })
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          'div',
                          { className: 'small text-muted' },
                          'Last login'
                        ),
                        _react2.default.createElement(
                          'strong',
                          null,
                          '1 hour ago'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        { className: 'text-center' },
                        _react2.default.createElement(
                          'div',
                          { className: 'avatar' },
                          _react2.default.createElement('img', { src: 'img/avatars/4.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' }),
                          _react2.default.createElement('span', { className: 'avatar-status badge-secondary' })
                        )
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          'div',
                          null,
                          'En\xE9as Kwadwo'
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'small text-muted' },
                          _react2.default.createElement(
                            'span',
                            null,
                            'New'
                          ),
                          ' | Registered: Jan 1, 2015'
                        )
                      ),
                      _react2.default.createElement(
                        'td',
                        { className: 'text-center' },
                        _react2.default.createElement('img', { src: 'img/flags/France.png', alt: 'France', style: { height: 24 + 'px' } })
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          'div',
                          { className: 'clearfix' },
                          _react2.default.createElement(
                            'div',
                            { className: 'float-left' },
                            _react2.default.createElement(
                              'strong',
                              null,
                              '98%'
                            )
                          ),
                          _react2.default.createElement(
                            'div',
                            { className: 'float-right' },
                            _react2.default.createElement(
                              'small',
                              { className: 'text-muted' },
                              'Jun 11, 2015 - Jul 10, 2015'
                            )
                          )
                        ),
                        _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'danger', value: '98' })
                      ),
                      _react2.default.createElement(
                        'td',
                        { className: 'text-center' },
                        _react2.default.createElement('i', { className: 'fa fa-paypal', style: { fontSize: 24 + 'px' } })
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          'div',
                          { className: 'small text-muted' },
                          'Last login'
                        ),
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Last month'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        { className: 'text-center' },
                        _react2.default.createElement(
                          'div',
                          { className: 'avatar' },
                          _react2.default.createElement('img', { src: 'img/avatars/5.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' }),
                          _react2.default.createElement('span', { className: 'avatar-status badge-success' })
                        )
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          'div',
                          null,
                          'Agapetus Tade\xE1\u0161'
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'small text-muted' },
                          _react2.default.createElement(
                            'span',
                            null,
                            'New'
                          ),
                          ' | Registered: Jan 1, 2015'
                        )
                      ),
                      _react2.default.createElement(
                        'td',
                        { className: 'text-center' },
                        _react2.default.createElement('img', { src: 'img/flags/Spain.png', alt: 'Spain', style: { height: 24 + 'px' } })
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          'div',
                          { className: 'clearfix' },
                          _react2.default.createElement(
                            'div',
                            { className: 'float-left' },
                            _react2.default.createElement(
                              'strong',
                              null,
                              '22%'
                            )
                          ),
                          _react2.default.createElement(
                            'div',
                            { className: 'float-right' },
                            _react2.default.createElement(
                              'small',
                              { className: 'text-muted' },
                              'Jun 11, 2015 - Jul 10, 2015'
                            )
                          )
                        ),
                        _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'info', value: '22' })
                      ),
                      _react2.default.createElement(
                        'td',
                        { className: 'text-center' },
                        _react2.default.createElement('i', { className: 'fa fa-google-wallet', style: { fontSize: 24 + 'px' } })
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          'div',
                          { className: 'small text-muted' },
                          'Last login'
                        ),
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Last week'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        { className: 'text-center' },
                        _react2.default.createElement(
                          'div',
                          { className: 'avatar' },
                          _react2.default.createElement('img', { src: 'img/avatars/6.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' }),
                          _react2.default.createElement('span', { className: 'avatar-status badge-danger' })
                        )
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          'div',
                          null,
                          'Friderik D\xE1vid'
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'small text-muted' },
                          _react2.default.createElement(
                            'span',
                            null,
                            'New'
                          ),
                          ' | Registered: Jan 1, 2015'
                        )
                      ),
                      _react2.default.createElement(
                        'td',
                        { className: 'text-center' },
                        _react2.default.createElement('img', { src: 'img/flags/Poland.png', alt: 'Poland', style: { height: 24 + 'px' } })
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          'div',
                          { className: 'clearfix' },
                          _react2.default.createElement(
                            'div',
                            { className: 'float-left' },
                            _react2.default.createElement(
                              'strong',
                              null,
                              '43%'
                            )
                          ),
                          _react2.default.createElement(
                            'div',
                            { className: 'float-right' },
                            _react2.default.createElement(
                              'small',
                              { className: 'text-muted' },
                              'Jun 11, 2015 - Jul 10, 2015'
                            )
                          )
                        ),
                        _react2.default.createElement(_reactstrap.Progress, { className: 'progress-xs', color: 'success', value: '43' })
                      ),
                      _react2.default.createElement(
                        'td',
                        { className: 'text-center' },
                        _react2.default.createElement('i', { className: 'fa fa-cc-amex', style: { fontSize: 24 + 'px' } })
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          'div',
                          { className: 'small text-muted' },
                          'Last login'
                        ),
                        _react2.default.createElement(
                          'strong',
                          null,
                          'Yesterday'
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return StatsDashboard;
}(_react.Component);

var _default = StatsDashboard;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(brandPrimary, 'brandPrimary', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(brandSuccess, 'brandSuccess', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(brandInfo, 'brandInfo', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(brandWarning, 'brandWarning', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(brandDanger, 'brandDanger', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(cardChartData1, 'cardChartData1', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(cardChartOpts1, 'cardChartOpts1', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(cardChartData2, 'cardChartData2', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(cardChartOpts2, 'cardChartOpts2', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(cardChartData3, 'cardChartData3', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(cardChartOpts3, 'cardChartOpts3', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(cardChartData4, 'cardChartData4', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(cardChartOpts4, 'cardChartOpts4', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(socialBoxData, 'socialBoxData', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(makeSocialBoxData, 'makeSocialBoxData', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(socialChartOpts, 'socialChartOpts', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(sparkLineChartData, 'sparkLineChartData', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(makeSparkLineData, 'makeSparkLineData', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(sparklineChartOpts, 'sparklineChartOpts', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(convertHex, 'convertHex', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(random, 'random', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(elements, 'elements', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(data1, 'data1', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(data2, 'data2', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(data3, 'data3', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(i, 'i', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(mainChart, 'mainChart', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(mainChartOpts, 'mainChartOpts', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(StatsDashboard, 'StatsDashboard', 'react-src/views/StatsDashboard/StatsDashboard.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/views/StatsDashboard/StatsDashboard.js');
}();

;