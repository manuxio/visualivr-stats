'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactRouterRedux = require('react-router-redux');

var _reactRedux = require('react-redux');

require('font-awesome/css/font-awesome.min.css');

require('simple-line-icons/css/simple-line-icons.css');

require('../../scss/style.scss');

require('../../scss/core/_dropdown-menu-right.scss');

var _Full = require('../../containers/Full/');

var _Full2 = _interopRequireDefault(_Full);

var _Login = require('../../views/Pages/Login/');

var _Login2 = _interopRequireDefault(_Login);

var _Register = require('../../views/Pages/Register/');

var _Register2 = _interopRequireDefault(_Register);

var _Page = require('../../views/Pages/Page404/');

var _Page2 = _interopRequireDefault(_Page);

var _Page3 = require('../../views/Pages/Page500/');

var _Page4 = _interopRequireDefault(_Page3);

var _store = require('../../reduxstore/store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Styles
// Import Font Awesome Icons Set

// Import Simple Line Icons Set

// Import Main styles for this application

// Temp fix for reactstrap


// Containers


var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: _store.store },
        _react2.default.createElement(
          _reactRouterRedux.ConnectedRouter,
          { history: _store.history },
          _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/login', name: 'Login Page', component: _Login2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/register', name: 'Register Page', component: _Register2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/404', name: 'Page 404', component: _Page2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/500', name: 'Page 500', component: _Page4.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/', name: 'Home', component: _Full2.default })
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var _default = App;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(App, 'App', 'react-src/containers/App/App.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/containers/App/App.js');
}();

;