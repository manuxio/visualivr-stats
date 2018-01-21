'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.state = {
      activeTab: '1'
    };
    return _this;
  }

  _createClass(Tabs, [{
    key: 'toggle',
    value: function toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
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
            { xs: '12', md: '6', className: 'mb-4' },
            _react2.default.createElement(
              _reactstrap.Nav,
              { tabs: true },
              _react2.default.createElement(
                _reactstrap.NavItem,
                null,
                _react2.default.createElement(
                  _reactstrap.NavLink,
                  {
                    className: (0, _classnames2.default)({ active: this.state.activeTab === '1' }),
                    onClick: function onClick() {
                      _this2.toggle('1');
                    }
                  },
                  'Home'
                )
              ),
              _react2.default.createElement(
                _reactstrap.NavItem,
                null,
                _react2.default.createElement(
                  _reactstrap.NavLink,
                  {
                    className: (0, _classnames2.default)({ active: this.state.activeTab === '2' }),
                    onClick: function onClick() {
                      _this2.toggle('2');
                    }
                  },
                  'Profile'
                )
              ),
              _react2.default.createElement(
                _reactstrap.NavItem,
                null,
                _react2.default.createElement(
                  _reactstrap.NavLink,
                  {
                    className: (0, _classnames2.default)({ active: this.state.activeTab === '3' }),
                    onClick: function onClick() {
                      _this2.toggle('3');
                    }
                  },
                  'Messages'
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.TabContent,
              { activeTab: this.state.activeTab },
              _react2.default.createElement(
                _reactstrap.TabPane,
                { tabId: '1' },
                '1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              ),
              _react2.default.createElement(
                _reactstrap.TabPane,
                { tabId: '2' },
                '2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              ),
              _react2.default.createElement(
                _reactstrap.TabPane,
                { tabId: '3' },
                '2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', md: '6', className: 'mb-4' },
            _react2.default.createElement(
              _reactstrap.Nav,
              { tabs: true },
              _react2.default.createElement(
                _reactstrap.NavItem,
                null,
                _react2.default.createElement(
                  _reactstrap.NavLink,
                  {
                    className: (0, _classnames2.default)({ active: this.state.activeTab === '1' }),
                    onClick: function onClick() {
                      _this2.toggle('1');
                    }
                  },
                  _react2.default.createElement('i', { className: 'icon-calculator' })
                )
              ),
              _react2.default.createElement(
                _reactstrap.NavItem,
                null,
                _react2.default.createElement(
                  _reactstrap.NavLink,
                  {
                    className: (0, _classnames2.default)({ active: this.state.activeTab === '2' }),
                    onClick: function onClick() {
                      _this2.toggle('2');
                    }
                  },
                  _react2.default.createElement('i', { className: 'icon-basket-loaded' })
                )
              ),
              _react2.default.createElement(
                _reactstrap.NavItem,
                null,
                _react2.default.createElement(
                  _reactstrap.NavLink,
                  {
                    className: (0, _classnames2.default)({ active: this.state.activeTab === '3' }),
                    onClick: function onClick() {
                      _this2.toggle('3');
                    }
                  },
                  _react2.default.createElement('i', { className: 'icon-pie-chart' })
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.TabContent,
              { activeTab: this.state.activeTab },
              _react2.default.createElement(
                _reactstrap.TabPane,
                { tabId: '1' },
                '1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              ),
              _react2.default.createElement(
                _reactstrap.TabPane,
                { tabId: '2' },
                '2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              ),
              _react2.default.createElement(
                _reactstrap.TabPane,
                { tabId: '3' },
                '2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', md: '6', className: 'mb-4' },
            _react2.default.createElement(
              _reactstrap.Nav,
              { tabs: true },
              _react2.default.createElement(
                _reactstrap.NavItem,
                null,
                _react2.default.createElement(
                  _reactstrap.NavLink,
                  {
                    className: (0, _classnames2.default)({ active: this.state.activeTab === '1' }),
                    onClick: function onClick() {
                      _this2.toggle('1');
                    }
                  },
                  _react2.default.createElement('i', { className: 'icon-calculator' }),
                  ' ',
                  _react2.default.createElement(
                    'span',
                    { className: this.state.activeTab === '1' ? "" : "d-none" },
                    ' Calculator'
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.NavItem,
                null,
                _react2.default.createElement(
                  _reactstrap.NavLink,
                  {
                    className: (0, _classnames2.default)({ active: this.state.activeTab === '2' }),
                    onClick: function onClick() {
                      _this2.toggle('2');
                    }
                  },
                  _react2.default.createElement('i', { className: 'icon-basket-loaded' }),
                  ' ',
                  _react2.default.createElement(
                    'span',
                    {
                      className: this.state.activeTab === '2' ? "" : "d-none" },
                    ' Shopping cart'
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.NavItem,
                null,
                _react2.default.createElement(
                  _reactstrap.NavLink,
                  {
                    className: (0, _classnames2.default)({ active: this.state.activeTab === '3' }),
                    onClick: function onClick() {
                      _this2.toggle('3');
                    }
                  },
                  _react2.default.createElement('i', { className: 'icon-pie-chart' }),
                  ' ',
                  _react2.default.createElement(
                    'span',
                    { className: this.state.activeTab === '3' ? "" : "d-none" },
                    ' Charts'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.TabContent,
              { activeTab: this.state.activeTab },
              _react2.default.createElement(
                _reactstrap.TabPane,
                { tabId: '1' },
                '1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              ),
              _react2.default.createElement(
                _reactstrap.TabPane,
                { tabId: '2' },
                '2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              ),
              _react2.default.createElement(
                _reactstrap.TabPane,
                { tabId: '3' },
                '2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', md: '6', className: 'mb-4' },
            _react2.default.createElement(
              _reactstrap.Nav,
              { tabs: true },
              _react2.default.createElement(
                _reactstrap.NavItem,
                null,
                _react2.default.createElement(
                  _reactstrap.NavLink,
                  {
                    className: (0, _classnames2.default)({ active: this.state.activeTab === '1' }),
                    onClick: function onClick() {
                      _this2.toggle('1');
                    }
                  },
                  _react2.default.createElement('i', { className: 'icon-calculator' }),
                  ' ',
                  _react2.default.createElement(
                    'span',
                    { className: this.state.activeTab === '1' ? "" : "d-none" },
                    ' Calculator '
                  ),
                  '\xA0',
                  _react2.default.createElement(
                    _reactstrap.Badge,
                    {
                      color: 'success' },
                    'New'
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.NavItem,
                null,
                _react2.default.createElement(
                  _reactstrap.NavLink,
                  {
                    className: (0, _classnames2.default)({ active: this.state.activeTab === '2' }),
                    onClick: function onClick() {
                      _this2.toggle('2');
                    }
                  },
                  _react2.default.createElement('i', { className: 'icon-basket-loaded' }),
                  ' ',
                  _react2.default.createElement(
                    'span',
                    {
                      className: this.state.activeTab === '2' ? "" : "d-none" },
                    ' Shopping cart '
                  ),
                  '\xA0',
                  _react2.default.createElement(
                    _reactstrap.Badge,
                    { pill: true, color: 'danger' },
                    '29'
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.NavItem,
                null,
                _react2.default.createElement(
                  _reactstrap.NavLink,
                  {
                    className: (0, _classnames2.default)({ active: this.state.activeTab === '3' }),
                    onClick: function onClick() {
                      _this2.toggle('3');
                    }
                  },
                  _react2.default.createElement('i', { className: 'icon-pie-chart' }),
                  ' ',
                  _react2.default.createElement(
                    'span',
                    { className: this.state.activeTab === '3' ? "" : "d-none" },
                    ' Charts'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.TabContent,
              { activeTab: this.state.activeTab },
              _react2.default.createElement(
                _reactstrap.TabPane,
                { tabId: '1' },
                '1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              ),
              _react2.default.createElement(
                _reactstrap.TabPane,
                { tabId: '2' },
                '2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              ),
              _react2.default.createElement(
                _reactstrap.TabPane,
                { tabId: '3' },
                '2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              )
            )
          )
        )
      );
    }
  }]);

  return Tabs;
}(_react.Component);

var _default = Tabs;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Tabs, 'Tabs', 'react-src/views/Components/Tabs/Tabs.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/views/Components/Tabs/Tabs.js');
}();

;