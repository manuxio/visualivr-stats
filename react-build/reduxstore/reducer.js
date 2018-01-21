'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _article = require('./reducers/article');

var _article2 = _interopRequireDefault(_article);

var _dataset = require('./reducers/dataset');

var _dataset2 = _interopRequireDefault(_dataset);

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  article: _article2.default,
  dataset: _dataset2.default,
  router: _reactRouterRedux.routerReducer
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/reduxstore/reducer.js');
}();

;