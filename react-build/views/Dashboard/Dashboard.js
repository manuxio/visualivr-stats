'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactstrap = require('reactstrap');

var _TimeChart = require('../../components/TimeChart');

var _TimeChart2 = _interopRequireDefault(_TimeChart);

var _CardBox = require('../../components/CardBox');

var _CardBox2 = _interopRequireDefault(_CardBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard(props) {
    _classCallCheck(this, Dashboard);

    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.state = {
      dropdownOpen: false
    };
    return _this;
  }

  _createClass(Dashboard, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'animated fadeIn' },
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(_CardBox2.default, { dataUrl: 'vivr/openedfilesalltime', icon: 'fa fa-files-o', className: 'text-white bg-primary', title: 'Contratti aperti' })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(_CardBox2.default, { dataUrl: 'vivr/verifiedcodesalltime', icon: 'icon-user-following', className: 'text-white bg-warning', title: 'Contratti con autenticazione' })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(_CardBox2.default, { dataUrl: 'vivr/failedpaymentsalltime', icon: 'icon-ban', className: 'text-white bg-danger', title: 'Contratti con pagamenti falliti' })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(_CardBox2.default, { dataUrl: 'vivr/succededpaymentsalltime', icon: 'fa fa-credit-card', className: 'text-white bg-success', title: 'Contratti con pagamenti effettuati' })
          )
        ),
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            null,
            _react2.default.createElement(_TimeChart2.default, {
              refreshInterval: 10000,
              type: 'line',
              height: 400,
              title: 'Pratiche Visual IVR',
              description: 'Pratiche aperte, autenticazioni concluse, pagamenti',
              dataUrls: [{
                name: 'Contratti aperti',
                url: '/vivr/openedfiles',
                color: 'red'
              }, {
                name: 'Debitori autenticati',
                url: '/vivr/verifiedcodes',
                color: 'grey'
              }, {
                name: 'Pagamenti conclusi (pos o neg)',
                url: '/vivr/completedpayments',
                color: 'black'
              }, {
                name: 'Pagamenti falliti',
                url: '/vivr/failedpayments',
                color: 'navy'
              }, {
                name: 'Pagamenti riusciti',
                url: '/vivr/succededpayments',
                color: 'green'
              }]
            })
          )
        )
      );
    }
  }]);

  return Dashboard;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(Dashboard);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Dashboard, 'Dashboard', 'react-src/views/Dashboard/Dashboard.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'react-src/views/Dashboard/Dashboard.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/views/Dashboard/Dashboard.js');
}();

;