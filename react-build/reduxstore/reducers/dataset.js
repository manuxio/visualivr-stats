'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = require('../constants/actionTypes');

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  // console.log('Action', action);
  switch (action.type) {
    case _actionTypes.ASYNC_START:
      if (action.subtype === _actionTypes.DATASET_CHANGE) {
        return _extends({}, state, { changing: true });
      }
      return state;
    case _actionTypes.DATASET_CHANGE:
      {
        var payload = action.payload;

        return _extends({}, state, {
          changing: false
        }, payload);
      }
    default:
      return state;
  }
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/reduxstore/reducers/dataset.js');
}();

;