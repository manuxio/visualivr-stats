"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Switches = function (_Component) {
  _inherits(Switches, _Component);

  function Switches() {
    _classCallCheck(this, Switches);

    return _possibleConstructorReturn(this, (Switches.__proto__ || Object.getPrototypeOf(Switches)).apply(this, arguments));
  }

  _createClass(Switches, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "animated fadeIn" },
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: "12" },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                "3d Switch"
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-3d switch-primary" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-3d switch-secondary" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-3d switch-success" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-3d switch-warning" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-3d switch-info" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-3d switch-danger" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: "12", md: "6" },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                "Switch default"
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-primary" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-secondary" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-success" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-warning" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-info" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-danger" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: "12", md: "6" },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                "Switch default - pills"
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-pill switch-primary" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-pill switch-secondary" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-pill switch-success" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-pill switch-warning" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-pill switch-info" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-pill switch-danger" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: "12", md: "6" },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                "Switch outline"
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-primary-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-secondary-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-success-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-warning-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-info-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-danger-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: "12", md: "6" },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                "Switch outline - pills"
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-pill switch-primary-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-pill switch-secondary-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-pill switch-success-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-pill switch-warning-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-pill switch-info-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-pill switch-danger-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: "12", md: "6" },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                "Switch outline alternative"
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-primary-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-secondary-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-success-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-warning-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-info-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-danger-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: "12", md: "6" },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                "Switch outline alternative - pills"
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-pill switch-primary-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-pill switch-secondary-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-pill switch-success-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-pill switch-warning-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-pill switch-info-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-default switch-pill switch-danger-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: "12", md: "6" },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                "Switch with text"
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-primary" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-secondary" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-success" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-warning" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-info" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-danger" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: "12", md: "6" },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                "Switch with text - pills"
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-pill switch-primary" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-pill switch-secondary" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-pill switch-success" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-pill switch-warning" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-pill switch-info" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-pill switch-danger" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: "12", md: "6" },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                "Switch with text outline"
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-primary-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-secondary-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-success-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-warning-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-info-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-danger-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: "12", md: "6" },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                "Switch with text outline - pills"
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-pill switch-primary-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-pill switch-secondary-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-pill switch-success-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-pill switch-warning-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-pill switch-info-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-pill switch-danger-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: "12", md: "6" },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                "Switch with text outline alternative"
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-primary-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-secondary-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-success-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-warning-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-info-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-danger-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: "12", md: "6" },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                "Switch with text outline alternative - pills"
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-pill switch-primary-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-pill switch-secondary-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-pill switch-success-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-pill switch-warning-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-pill switch-info-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-text switch-pill switch-danger-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "On", "data-off": "Off" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: "12", md: "6" },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                "Switch with icon"
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-primary" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF164", "data-off": "\uF165" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-secondary" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF087", "data-off": "\uF088" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-success" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF028", "data-off": "\uF026" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-warning" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-info" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-danger" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: "12", md: "6" },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                "Switch with icon - pills"
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-pill switch-primary" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-pill switch-secondary" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-pill switch-success" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-pill switch-warning" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-pill switch-info" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-pill switch-danger" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: "12", md: "6" },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                "Switch with icon outline"
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-primary-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-secondary-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-success-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-warning-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-info-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-danger-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: "12", md: "6" },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                "Switch with icon outline - pills"
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-pill switch-primary-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-pill switch-secondary-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-pill switch-success-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-pill switch-warning-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-pill switch-info-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-pill switch-danger-outline" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: "12", md: "6" },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                "Switch with icon outline alternative"
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-primary-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-secondary-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-success-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-warning-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-info-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-danger-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: "12", md: "6" },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                "Switch with icon outline alternative - pills"
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-pill switch-primary-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-pill switch-secondary-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-pill switch-success-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-pill switch-warning-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-pill switch-info-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                ),
                "\xA0\xA0\xA0",
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: "switch switch-icon switch-pill switch-danger-outline-alt" },
                  _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                  _react2.default.createElement("span", { className: "switch-label", "data-on": "\uF00C", "data-off": "\uF00D" }),
                  _react2.default.createElement("span", { className: "switch-handle" })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: "12" },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                "Sizes"
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                { className: "p-0" },
                _react2.default.createElement(
                  _reactstrap.Table,
                  { hover: true, striped: true, className: "table-align-middle mb-0" },
                  _react2.default.createElement(
                    "thead",
                    null,
                    _react2.default.createElement(
                      "tr",
                      null,
                      _react2.default.createElement(
                        "th",
                        null,
                        "Size"
                      ),
                      _react2.default.createElement(
                        "th",
                        null,
                        "Example"
                      ),
                      _react2.default.createElement(
                        "th",
                        null,
                        "CSS Class"
                      )
                    )
                  ),
                  _react2.default.createElement(
                    "tbody",
                    null,
                    _react2.default.createElement(
                      "tr",
                      null,
                      _react2.default.createElement(
                        "td",
                        null,
                        "Large"
                      ),
                      _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement(
                          _reactstrap.Label,
                          { className: "switch switch-lg switch-3d switch-primary" },
                          _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                          _react2.default.createElement("span", { className: "switch-label" }),
                          _react2.default.createElement("span", { className: "switch-handle" })
                        )
                      ),
                      _react2.default.createElement(
                        "td",
                        null,
                        "Add following class ",
                        _react2.default.createElement(
                          "code",
                          null,
                          ".switch-lg"
                        )
                      )
                    ),
                    _react2.default.createElement(
                      "tr",
                      null,
                      _react2.default.createElement(
                        "td",
                        null,
                        "Normal"
                      ),
                      _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement(
                          _reactstrap.Label,
                          { className: "switch switch-3d switch-primary" },
                          _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                          _react2.default.createElement("span", { className: "switch-label" }),
                          _react2.default.createElement("span", { className: "switch-handle" })
                        )
                      ),
                      _react2.default.createElement(
                        "td",
                        null,
                        "-"
                      )
                    ),
                    _react2.default.createElement(
                      "tr",
                      null,
                      _react2.default.createElement(
                        "td",
                        null,
                        "Small"
                      ),
                      _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement(
                          _reactstrap.Label,
                          { className: "switch switch-sm switch-3d switch-primary" },
                          _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                          _react2.default.createElement("span", { className: "switch-label" }),
                          _react2.default.createElement("span", { className: "switch-handle" })
                        )
                      ),
                      _react2.default.createElement(
                        "td",
                        null,
                        "Add following class ",
                        _react2.default.createElement(
                          "code",
                          null,
                          ".switch-sm"
                        )
                      )
                    ),
                    _react2.default.createElement(
                      "tr",
                      null,
                      _react2.default.createElement(
                        "td",
                        null,
                        "Extra small"
                      ),
                      _react2.default.createElement(
                        "td",
                        null,
                        _react2.default.createElement(
                          _reactstrap.Label,
                          { className: "switch switch-xs switch-3d switch-primary" },
                          _react2.default.createElement(_reactstrap.Input, { type: "checkbox", className: "switch-input", defaultChecked: true }),
                          _react2.default.createElement("span", { className: "switch-label" }),
                          _react2.default.createElement("span", { className: "switch-handle" })
                        )
                      ),
                      _react2.default.createElement(
                        "td",
                        null,
                        "Add following class ",
                        _react2.default.createElement(
                          "code",
                          null,
                          ".switch-xs"
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

  return Switches;
}(_react.Component);

var _default = Switches;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Switches, "Switches", "react-src/views/Components/Switches/Switches.js");

  __REACT_HOT_LOADER__.register(_default, "default", "react-src/views/Components/Switches/Switches.js");
}();

;