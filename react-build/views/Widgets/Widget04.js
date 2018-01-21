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

var _reactstrap = require('reactstrap');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('reactstrap/lib/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  header: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  color: _propTypes2.default.string,
  value: _propTypes2.default.string,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  invert: _propTypes2.default.bool
};

var defaultProps = {
  header: '87.500',
  icon: "icon-people",
  color: 'info',
  value: "25",
  children: "Visitors",
  invert: false
};

var Widget04 = function (_Component) {
  _inherits(Widget04, _Component);

  function Widget04() {
    _classCallCheck(this, Widget04);

    return _possibleConstructorReturn(this, (Widget04.__proto__ || Object.getPrototypeOf(Widget04)).apply(this, arguments));
  }

  _createClass(Widget04, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          header = _props.header,
          icon = _props.icon,
          color = _props.color,
          value = _props.value,
          children = _props.children,
          invert = _props.invert,
          attributes = _objectWithoutProperties(_props, ['className', 'cssModule', 'header', 'icon', 'color', 'value', 'children', 'invert']);

      // demo purposes only


      var progress = { style: "", color: color, value: value };
      var card = { style: "", bgColor: "", icon: icon };

      if (invert) {
        progress.style = "progress-white";
        progress.color = "";
        card.style = "text-white";
        card.bgColor = 'bg-' + color;
      }

      var classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, card.style, card.bgColor), cssModule);
      progress.style = (0, _classnames2.default)("progress-xs mt-3 mb-0", progress.style);

      return _react2.default.createElement(
        _reactstrap.Card,
        _extends({ className: classes }, attributes),
        _react2.default.createElement(
          _reactstrap.CardBody,
          null,
          _react2.default.createElement(
            'div',
            { className: 'h1 text-muted text-right mb-2' },
            _react2.default.createElement('i', { className: card.icon })
          ),
          _react2.default.createElement(
            'div',
            { className: 'h4 mb-0' },
            header
          ),
          _react2.default.createElement(
            'small',
            { className: 'text-muted text-uppercase font-weight-bold' },
            children
          ),
          _react2.default.createElement(_reactstrap.Progress, { className: progress.style, color: progress.color, value: progress.value })
        )
      );
    }
  }]);

  return Widget04;
}(_react.Component);

Widget04.propTypes = propTypes;
Widget04.defaultProps = defaultProps;

var _default = Widget04;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'react-src/views/Widgets/Widget04.js');

  __REACT_HOT_LOADER__.register(defaultProps, 'defaultProps', 'react-src/views/Widgets/Widget04.js');

  __REACT_HOT_LOADER__.register(Widget04, 'Widget04', 'react-src/views/Widgets/Widget04.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/views/Widgets/Widget04.js');
}();

;