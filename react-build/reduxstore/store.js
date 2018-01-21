'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = exports.history = undefined;

var _redux = require('redux');

var _reduxLogger = require('redux-logger');

var _developmentOnly = require('redux-devtools-extension/developmentOnly');

var _middleware = require('./middleware');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _reactRouterRedux = require('react-router-redux');

var _history = require('history');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = exports.history = (0, _history.createHashHistory)();

// Build the middleware for intercepting and dispatching navigation actions

// import createHistory from 'history/createBrowserHistory';
var myRouterMiddleware = (0, _reactRouterRedux.routerMiddleware)(history);

var getMiddleware = function getMiddleware() {
  if (process.env.NODE_ENV === 'production') {
    return (0, _redux.applyMiddleware)(myRouterMiddleware, _middleware.promiseMiddleware, _middleware.localStorageMiddleware);
  }
  return (0, _redux.applyMiddleware)(myRouterMiddleware, _middleware.promiseMiddleware, _middleware.localStorageMiddleware, (0, _reduxLogger.createLogger)());
};

var store = exports.store = (0, _redux.createStore)(_reducer2.default, (0, _developmentOnly.composeWithDevTools)(getMiddleware()));
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(history, 'history', 'react-src/reduxstore/store.js');

  __REACT_HOT_LOADER__.register(myRouterMiddleware, 'myRouterMiddleware', 'react-src/reduxstore/store.js');

  __REACT_HOT_LOADER__.register(getMiddleware, 'getMiddleware', 'react-src/reduxstore/store.js');

  __REACT_HOT_LOADER__.register(store, 'store', 'react-src/reduxstore/store.js');
}();

;