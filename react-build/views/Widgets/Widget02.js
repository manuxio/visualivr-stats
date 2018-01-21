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
  mainText: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  color: _propTypes2.default.string,
  variant: _propTypes2.default.string,
  footer: _propTypes2.default.bool,
  link: _propTypes2.default.string,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object
};

var defaultProps = {
  header: '$1,999.50',
  mainText: 'Income',
  icon: "fa fa-cogs",
  color: 'primary',
  variant: "0",
  link: "#"
};

var Widget02 = function (_Component) {
  _inherits(Widget02, _Component);

  function Widget02() {
    _classCallCheck(this, Widget02);

    return _possibleConstructorReturn(this, (Widget02.__proto__ || Object.getPrototypeOf(Widget02)).apply(this, arguments));
  }

  _createClass(Widget02, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          header = _props.header,
          mainText = _props.mainText,
          icon = _props.icon,
          color = _props.color,
          footer = _props.footer,
          link = _props.link,
          children = _props.children,
          variant = _props.variant,
          attributes = _objectWithoutProperties(_props, ['className', 'cssModule', 'header', 'mainText', 'icon', 'color', 'footer', 'link', 'children', 'variant']);

      // demo purposes only


      var padding = variant === '0' ? { card: "p-3", icon: "p-3", lead: "mt-2" } : variant === "1" ? {
        card: "p-0", icon: "p-4", lead: "pt-3" } : { card: "p-0", icon: "p-4 px-5", lead: "pt-3" };

      var card = { style: "clearfix", color: color, icon: icon, classes: "" };
      card.classes = (0, _utils.mapToCssModules)((0, _classnames2.default)(className, card.style, padding.card), cssModule);

      var lead = { style: "h5 mb-0", color: color, classes: "" };
      lead.classes = (0, _classnames2.default)(lead.style, 'text-' + card.color, padding.lead);

      var blockIcon = function blockIcon(icon) {
        var classes = (0, _classnames2.default)(icon, 'bg-' + card.color, padding.icon, "font-2xl mr-3 float-left");
        return _react2.default.createElement('i', { className: classes });
      };

      var cardFooter = function cardFooter() {
        if (footer) {
          return _react2.default.createElement(
            _reactstrap.CardFooter,
            { className: 'px-3 py-2' },
            _react2.default.createElement(
              'a',
              { className: 'font-weight-bold font-xs btn-block text-muted', href: link },
              'View More',
              _react2.default.createElement('i', { className: 'fa fa-angle-right float-right font-lg' })
            )
          );
        }
      };

      return _react2.default.createElement(
        _reactstrap.Card,
        null,
        _react2.default.createElement(
          _reactstrap.CardBody,
          _extends({ className: card.classes }, attributes),
          blockIcon(card.icon),
          _react2.default.createElement(
            'div',
            { className: lead.classes },
            header
          ),
          _react2.default.createElement(
            'div',
            { className: 'text-muted text-uppercase font-weight-bold font-xs' },
            mainText
          )
        ),
        cardFooter()
      );
    }
  }]);

  return Widget02;
}(_react.Component);

Widget02.propTypes = propTypes;
Widget02.defaultProps = defaultProps;

var _default = Widget02;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(propTypes, 'propTypes', 'react-src/views/Widgets/Widget02.js');

  __REACT_HOT_LOADER__.register(defaultProps, 'defaultProps', 'react-src/views/Widgets/Widget02.js');

  __REACT_HOT_LOADER__.register(Widget02, 'Widget02', 'react-src/views/Widgets/Widget02.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/views/Widgets/Widget02.js');
}();

;