'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SidebarMinimizer = function (_Component) {
  _inherits(SidebarMinimizer, _Component);

  function SidebarMinimizer() {
    _classCallCheck(this, SidebarMinimizer);

    return _possibleConstructorReturn(this, (SidebarMinimizer.__proto__ || Object.getPrototypeOf(SidebarMinimizer)).apply(this, arguments));
  }

  _createClass(SidebarMinimizer, [{
    key: 'sidebarMinimize',
    value: function sidebarMinimize() {
      document.body.classList.toggle('sidebar-minimized');
    }
  }, {
    key: 'brandMinimize',
    value: function brandMinimize() {
      document.body.classList.toggle('brand-minimized');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('button', { className: 'sidebar-minimizer', type: 'button', onClick: function onClick(event) {
          _this2.sidebarMinimize();_this2.brandMinimize();
        } });
    }
  }]);

  return SidebarMinimizer;
}(_react.Component);

var _default = SidebarMinimizer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SidebarMinimizer, 'SidebarMinimizer', 'react-src/components/SidebarMinimizer/SidebarMinimizer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/components/SidebarMinimizer/SidebarMinimizer.js');
}();

;