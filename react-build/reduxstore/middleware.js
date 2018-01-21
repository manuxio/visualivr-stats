'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localStorageMiddleware = exports.promiseMiddleware = undefined;

var _agent = require('./agent');

var _agent2 = _interopRequireDefault(_agent);

var _actionTypes = require('./constants/actionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isPromise(v) {
  return v && typeof v.then === 'function';
}

var promiseMiddleware = function promiseMiddleware(store) {
  return function (next) {
    return function (action) {
      if (isPromise(action.payload)) {
        store.dispatch({ type: _actionTypes.ASYNC_START, subtype: action.type });

        var currentView = store.getState().viewChangeCounter;
        var skipTracking = action.skipTracking;

        action.payload.then(function (res) {
          var currentState = store.getState();
          if (!skipTracking && currentState.viewChangeCounter !== currentView) {
            return;
          }
          console.log('RESULT', res);
          action.payload = res;
          store.dispatch({ type: _actionTypes.ASYNC_END, promise: action.payload });
          store.dispatch(action);
        }, function (error) {
          var currentState = store.getState();
          if (!skipTracking && currentState.viewChangeCounter !== currentView) {
            return;
          }
          console.log('ERROR', error);
          action.error = true;
          action.payload = error.response.body;
          if (!action.skipTracking) {
            store.dispatch({ type: _actionTypes.ASYNC_END, promise: action.payload });
          }
          store.dispatch(action);
        });

        return;
      }

      next(action);
    };
  };
};

var localStorageMiddleware = function localStorageMiddleware() {
  return (/* store */function (next) {
      return function (action) {
        if (action.type === _actionTypes.REGISTER || action.type === _actionTypes.LOGIN) {
          if (!action.error) {
            window.localStorage.setItem('jwt', action.payload.user.token);
            _agent2.default.setToken(action.payload.user.token);
          }
        } else if (action.type === _actionTypes.LOGOUT) {
          window.localStorage.setItem('jwt', '');
          _agent2.default.setToken(null);
        }

        next(action);
      };
    }
  );
};

exports.promiseMiddleware = promiseMiddleware;
exports.localStorageMiddleware = localStorageMiddleware;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(isPromise, 'isPromise', 'react-src/reduxstore/middleware.js');

  __REACT_HOT_LOADER__.register(promiseMiddleware, 'promiseMiddleware', 'react-src/reduxstore/middleware.js');

  __REACT_HOT_LOADER__.register(localStorageMiddleware, 'localStorageMiddleware', 'react-src/reduxstore/middleware.js');
}();

;