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

var Register = function (_Component) {
  _inherits(Register, _Component);

  function Register() {
    _classCallCheck(this, Register);

    return _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).apply(this, arguments));
  }

  _createClass(Register, [{
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
              { md: '6' },
              _react2.default.createElement(
                _reactstrap.Card,
                { className: 'mx-4' },
                _react2.default.createElement(
                  _reactstrap.CardBody,
                  { className: 'p-4' },
                  _react2.default.createElement(
                    'h1',
                    null,
                    'Register'
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'text-muted' },
                    'Create your account'
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
                    { className: 'mb-3' },
                    _react2.default.createElement(
                      _reactstrap.InputGroupAddon,
                      null,
                      '@'
                    ),
                    _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: 'Email' })
                  ),
                  _react2.default.createElement(
                    _reactstrap.InputGroup,
                    { className: 'mb-3' },
                    _react2.default.createElement(
                      _reactstrap.InputGroupAddon,
                      null,
                      _react2.default.createElement('i', { className: 'icon-lock' })
                    ),
                    _react2.default.createElement(_reactstrap.Input, { type: 'password', placeholder: 'Password' })
                  ),
                  _react2.default.createElement(
                    _reactstrap.InputGroup,
                    { className: 'mb-4' },
                    _react2.default.createElement(
                      _reactstrap.InputGroupAddon,
                      null,
                      _react2.default.createElement('i', { className: 'icon-lock' })
                    ),
                    _react2.default.createElement(_reactstrap.Input, { type: 'password', placeholder: 'Repeat password' })
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { color: 'success', block: true },
                    'Create Account'
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.CardFooter,
                  { className: 'p-4' },
                  _react2.default.createElement(
                    _reactstrap.Row,
                    null,
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '12', sm: '6' },
                      _react2.default.createElement(
                        _reactstrap.Button,
                        { className: 'btn-facebook', block: true },
                        _react2.default.createElement(
                          'span',
                          null,
                          'facebook'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '12', sm: '6' },
                      _react2.default.createElement(
                        _reactstrap.Button,
                        { className: 'btn-twitter', block: true },
                        _react2.default.createElement(
                          'span',
                          null,
                          'twitter'
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

  return Register;
}(_react.Component);

var _default = Register;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Register, 'Register', 'react-src/views/Pages/Register/Register.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/views/Pages/Register/Register.js');
}();

;