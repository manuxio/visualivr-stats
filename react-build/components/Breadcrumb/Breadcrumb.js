'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactstrap = require('reactstrap');

var _routes = require('../../routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var findRouteName = function findRouteName(url) {
  return _routes2.default[url];
};

var getPaths = function getPaths(pathname) {
  var paths = ['/'];

  if (pathname === '/') return paths;

  pathname.split('/').reduce(function (prev, curr, index) {
    var currPath = prev + '/' + curr;
    paths.push(currPath);
    return currPath;
  });
  return paths;
};

var BreadcrumbsItem = function BreadcrumbsItem(_ref) {
  var rest = _objectWithoutProperties(_ref, []),
      match = _ref.match;

  var routeName = findRouteName(match.url);
  if (routeName) {
    return match.isExact ? _react2.default.createElement(
      _reactstrap.BreadcrumbItem,
      { active: true },
      routeName
    ) : _react2.default.createElement(
      _reactstrap.BreadcrumbItem,
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: match.url || '' },
        routeName
      )
    );
  }
  return null;
};

var Breadcrumbs = function Breadcrumbs(_ref2) {
  var rest = _objectWithoutProperties(_ref2, []),
      pathname = _ref2.location.pathname,
      match = _ref2.match;

  var paths = getPaths(pathname);
  var items = paths.map(function (path, i) {
    return _react2.default.createElement(_reactRouterDom.Route, { key: i++, path: path, component: BreadcrumbsItem });
  });
  return _react2.default.createElement(
    _reactstrap.Breadcrumb,
    null,
    items
  );
};

var _default = function _default(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactRouterDom.Route, _extends({ path: '/:path', component: Breadcrumbs }, props))
  );
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(findRouteName, 'findRouteName', 'react-src/components/Breadcrumb/Breadcrumb.js');

  __REACT_HOT_LOADER__.register(getPaths, 'getPaths', 'react-src/components/Breadcrumb/Breadcrumb.js');

  __REACT_HOT_LOADER__.register(BreadcrumbsItem, 'BreadcrumbsItem', 'react-src/components/Breadcrumb/Breadcrumb.js');

  __REACT_HOT_LOADER__.register(Breadcrumbs, 'Breadcrumbs', 'react-src/components/Breadcrumb/Breadcrumb.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/components/Breadcrumb/Breadcrumb.js');
}();

;