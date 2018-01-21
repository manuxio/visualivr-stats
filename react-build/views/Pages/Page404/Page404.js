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

var Page404 = function (_Component) {
  _inherits(Page404, _Component);

  function Page404() {
    _classCallCheck(this, Page404);

    return _possibleConstructorReturn(this, (Page404.__proto__ || Object.getPrototypeOf(Page404)).apply(this, arguments));
  }

  _createClass(Page404, [{
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
                'div',
                { className: 'clearfix' },
                _react2.default.createElement(
                  'h1',
                  { className: 'float-left display-3 mr-4' },
                  '404'
                ),
                _react2.default.createElement(
                  'h4',
                  { className: 'pt-3' },
                  'Oops! You\'re lost.'
                ),
                _react2.default.createElement(
                  'p',
                  { className: 'text-muted float-left' },
                  'The page you are looking for was not found.'
                )
              ),
              _react2.default.createElement(
                _reactstrap.InputGroup,
                { className: 'input-prepend' },
                _react2.default.createElement(
                  _reactstrap.InputGroupAddon,
                  null,
                  _react2.default.createElement('i', { className: 'fa fa-search' })
                ),
                _react2.default.createElement(_reactstrap.Input, { size: '16', type: 'text', placeholder: 'What are you looking for?' }),
                _react2.default.createElement(
                  _reactstrap.InputGroupButton,
                  null,
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { color: 'info' },
                    'Search'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Page404;
}(_react.Component);

var _default = Page404;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Page404, 'Page404', 'react-src/views/Pages/Page404/Page404.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/views/Pages/Page404/Page404.js');
}();

;