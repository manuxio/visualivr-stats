'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    _classCallCheck(this, Login);

    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'app flex-row align-items-center' },
        _react2.default.createElement(
          _reactstrap.Container,
          null,
          _react2.default.createElement(
            _reactstrap.Row,
            { className: 'justify-content-center' },
            _react2.default.createElement(
              _reactstrap.Col,
              { md: '8' },
              _react2.default.createElement(
                _reactstrap.CardGroup,
                null,
                _react2.default.createElement(
                  _reactstrap.Card,
                  { className: 'p-4' },
                  _react2.default.createElement(
                    _reactstrap.CardBody,
                    null,
                    _react2.default.createElement(
                      'h1',
                      null,
                      'Login'
                    ),
                    _react2.default.createElement(
                      'p',
                      { className: 'text-muted' },
                      'Sign In to your account'
                    ),
                    _react2.default.createElement(
                      _reactstrap.InputGroup,
                      { className: 'mb-3' },
                      _react2.default.createElement(
                        _reactstrap.InputGroupAddon,
                        null,
                        _react2.default.createElement('i', { className: 'icon-user' })
                      ),
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: 'Username' })
                    ),
                    _react2.default.createElement(
                      _reactstrap.InputGroup,
                      { className: 'mb-4' },
                      _react2.default.createElement(
                        _reactstrap.InputGroupAddon,
                        null,
                        _react2.default.createElement('i', { className: 'icon-lock' })
                      ),
                      _react2.default.createElement(_reactstrap.Input, { type: 'password', placeholder: 'Password' })
                    ),
                    _react2.default.createElement(
                      _reactstrap.Row,
                      null,
                      _react2.default.createElement(
                        _reactstrap.Col,
                        { xs: '6' },
                        _react2.default.createElement(
                          _reactstrap.Button,
                          { color: 'primary', className: 'px-4' },
                          'Login'
                        )
                      ),
                      _react2.default.createElement(
                        _reactstrap.Col,
                        { xs: '6', className: 'text-right' },
                        _react2.default.createElement(
                          _reactstrap.Button,
                          { color: 'link', className: 'px-0' },
                          'Forgot password?'
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.Card,
                  { className: 'text-white bg-primary py-5 d-md-down-none', style: { width: 44 + '%' } },
                  _react2.default.createElement(
                    _reactstrap.CardBody,
                    { className: 'text-center' },
                    _react2.default.createElement(
                      'div',
                      null,
                      _react2.default.createElement(
                        'h2',
                        null,
                        'Sign up'
                      ),
                      _react2.default.createElement(
                        'p',
                        null,
                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                      ),
                      _react2.default.createElement(
                        _reactstrap.Button,
                        { color: 'primary', className: 'mt-3', active: true },
                        'Register Now!'
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

  return Login;
}(_react.Component);

var _default = Login;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Login, 'Login', 'react-src/views/Pages/Login/Login.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/views/Pages/Login/Login.js');
}();

;