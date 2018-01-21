'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactstrap = require('reactstrap');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _nav = require('./_nav');

var _nav2 = _interopRequireDefault(_nav);

var _SidebarFooter = require('./../SidebarFooter');

var _SidebarFooter2 = _interopRequireDefault(_SidebarFooter);

var _SidebarForm = require('./../SidebarForm');

var _SidebarForm2 = _interopRequireDefault(_SidebarForm);

var _SidebarHeader = require('./../SidebarHeader');

var _SidebarHeader2 = _interopRequireDefault(_SidebarHeader);

var _SidebarMinimizer = require('./../SidebarMinimizer');

var _SidebarMinimizer2 = _interopRequireDefault(_SidebarMinimizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = function (_Component) {
  _inherits(Sidebar, _Component);

  function Sidebar() {
    _classCallCheck(this, Sidebar);

    return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).apply(this, arguments));
  }

  _createClass(Sidebar, [{
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
      e.target.parentElement.classList.toggle('open');
    }
  }, {
    key: 'activeRoute',
    value: function activeRoute(routeName, props) {
      // return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
      return props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
    }

    // todo Sidebar nav secondLevel
    // secondLevelActive(routeName) {
    //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    // }


  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var activeRoute = this.activeRoute;
      var handleClick = this.handleClick;

      // badge addon to NavItem
      var badge = function badge(_badge) {
        if (_badge) {
          var classes = (0, _classnames2.default)(_badge.class);
          return _react2.default.createElement(
            _reactstrap.Badge,
            { className: classes, color: _badge.variant },
            _badge.text
          );
        }
      };

      // simple wrapper for nav-title item
      var wrapper = function wrapper(item) {
        return item.wrapper && item.wrapper.element ? _react2.default.createElement(item.wrapper.element, item.wrapper.attributes, item.name) : item.name;
      };

      // nav list section title
      var title = function title(_title, key) {
        var classes = (0, _classnames2.default)('nav-title', _title.class);
        return _react2.default.createElement(
          'li',
          { key: key, className: classes },
          wrapper(_title),
          ' '
        );
      };

      // nav list divider
      var divider = function divider(_divider, key) {
        var classes = (0, _classnames2.default)('divider', _divider.class);
        return _react2.default.createElement('li', { key: key, className: classes });
      };

      // nav item with nav link
      var navItem = function navItem(item, key) {
        var classes = {
          item: (0, _classnames2.default)(item.class),
          link: (0, _classnames2.default)('nav-link', item.variant ? 'nav-link-' + item.variant : ''),
          icon: (0, _classnames2.default)(item.icon)
        };
        return navLink(item, key, classes);
      };

      // nav link
      var navLink = function navLink(item, key, classes) {
        var url = item.url ? item.url : '';
        return _react2.default.createElement(
          _reactstrap.NavItem,
          { key: key, className: classes.item },
          isExternal(url) ? _react2.default.createElement(
            _reactstrap.NavLink,
            { href: url, className: classes.link, active: true },
            _react2.default.createElement('i', { className: classes.icon }),
            item.name,
            badge(item.badge)
          ) : _react2.default.createElement(
            _reactRouterDom.NavLink,
            { to: url, className: classes.link, activeClassName: 'active' },
            _react2.default.createElement('i', { className: classes.icon }),
            item.name,
            badge(item.badge)
          )
        );
      };

      // nav dropdown
      var navDropdown = function navDropdown(item, key) {
        return _react2.default.createElement(
          'li',
          { key: key, className: activeRoute(item.url, props) },
          _react2.default.createElement(
            'a',
            { className: 'nav-link nav-dropdown-toggle', href: '#', onClick: handleClick.bind(_this2) },
            _react2.default.createElement('i', { className: item.icon }),
            item.name
          ),
          _react2.default.createElement(
            'ul',
            { className: 'nav-dropdown-items' },
            navList(item.children)
          )
        );
      };

      // nav type
      var navType = function navType(item, idx) {
        return item.title ? title(item, idx) : item.divider ? divider(item, idx) : item.children ? navDropdown(item, idx) : navItem(item, idx);
      };

      // nav list
      var navList = function navList(items) {
        return items.map(function (item, index) {
          return navType(item, index);
        });
      };

      var isExternal = function isExternal(url) {
        var link = url ? url.substring(0, 4) : '';
        return link === 'http';
      };

      // sidebar-nav root
      return _react2.default.createElement(
        'div',
        { className: 'sidebar' },
        _react2.default.createElement(_SidebarHeader2.default, null),
        _react2.default.createElement(_SidebarForm2.default, null),
        _react2.default.createElement(
          'nav',
          { className: 'sidebar-nav' },
          _react2.default.createElement(
            _reactstrap.Nav,
            null,
            navList(_nav2.default.items)
          )
        ),
        _react2.default.createElement(_SidebarFooter2.default, null),
        _react2.default.createElement(_SidebarMinimizer2.default, null)
      );
    }
  }]);

  return Sidebar;
}(_react.Component);

var _default = Sidebar;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Sidebar, 'Sidebar', 'react-src/components/Sidebar/Sidebar.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/components/Sidebar/Sidebar.js');
}();

;