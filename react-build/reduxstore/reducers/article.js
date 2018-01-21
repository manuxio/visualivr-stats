'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = require('../constants/actionTypes');

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  var commentId = action ? action.commentId : null;
  switch (action.type) {
    case _actionTypes.ARTICLE_PAGE_LOADED:
      return _extends({}, state, {
        article: action.payload[0].article,
        comments: action.payload[1].comments
      });
    case _actionTypes.ARTICLE_PAGE_UNLOADED:
      return {};
    case _actionTypes.ADD_COMMENT:
      return _extends({}, state, {
        commentErrors: action.error ? action.payload.errors : null,
        comments: action.error ? null : (state.comments || []).concat([action.payload.comment])
      });
    case _actionTypes.DELETE_COMMENT:
      return _extends({}, state, {
        comments: state.comments.filter(function (comment) {
          return comment.id !== commentId;
        })
      });
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

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/reduxstore/reducers/article.js');
}();

;