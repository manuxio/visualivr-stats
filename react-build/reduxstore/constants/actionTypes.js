'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var APP_LOAD = exports.APP_LOAD = 'APP_LOAD';
var REDIRECT = exports.REDIRECT = 'REDIRECT';
var ARTICLE_SUBMITTED = exports.ARTICLE_SUBMITTED = 'ARTICLE_SUBMITTED';
var SETTINGS_SAVED = exports.SETTINGS_SAVED = 'SETTINGS_SAVED';
var DELETE_ARTICLE = exports.DELETE_ARTICLE = 'DELETE_ARTICLE';
var SETTINGS_PAGE_UNLOADED = exports.SETTINGS_PAGE_UNLOADED = 'SETTINGS_PAGE_UNLOADED';
var HOME_PAGE_LOADED = exports.HOME_PAGE_LOADED = 'HOME_PAGE_LOADED';
var HOME_PAGE_UNLOADED = exports.HOME_PAGE_UNLOADED = 'HOME_PAGE_UNLOADED';
var ARTICLE_PAGE_LOADED = exports.ARTICLE_PAGE_LOADED = 'ARTICLE_PAGE_LOADED';
var ARTICLE_PAGE_UNLOADED = exports.ARTICLE_PAGE_UNLOADED = 'ARTICLE_PAGE_UNLOADED';
var ADD_COMMENT = exports.ADD_COMMENT = 'ADD_COMMENT';
var DELETE_COMMENT = exports.DELETE_COMMENT = 'DELETE_COMMENT';
var ARTICLE_FAVORITED = exports.ARTICLE_FAVORITED = 'ARTICLE_FAVORITED';
var ARTICLE_UNFAVORITED = exports.ARTICLE_UNFAVORITED = 'ARTICLE_UNFAVORITED';
var SET_PAGE = exports.SET_PAGE = 'SET_PAGE';
var APPLY_TAG_FILTER = exports.APPLY_TAG_FILTER = 'APPLY_TAG_FILTER';
var CHANGE_TAB = exports.CHANGE_TAB = 'CHANGE_TAB';
var PROFILE_PAGE_LOADED = exports.PROFILE_PAGE_LOADED = 'PROFILE_PAGE_LOADED';
var PROFILE_PAGE_UNLOADED = exports.PROFILE_PAGE_UNLOADED = 'PROFILE_PAGE_UNLOADED';
var LOGIN = exports.LOGIN = 'LOGIN';
var LOGOUT = exports.LOGOUT = 'LOGOUT';
var REGISTER = exports.REGISTER = 'REGISTER';
var LOGIN_PAGE_UNLOADED = exports.LOGIN_PAGE_UNLOADED = 'LOGIN_PAGE_UNLOADED';
var REGISTER_PAGE_UNLOADED = exports.REGISTER_PAGE_UNLOADED = 'REGISTER_PAGE_UNLOADED';
var ASYNC_START = exports.ASYNC_START = 'ASYNC_START';
var ASYNC_END = exports.ASYNC_END = 'ASYNC_END';
var EDITOR_PAGE_LOADED = exports.EDITOR_PAGE_LOADED = 'EDITOR_PAGE_LOADED';
var EDITOR_PAGE_UNLOADED = exports.EDITOR_PAGE_UNLOADED = 'EDITOR_PAGE_UNLOADED';
var ADD_TAG = exports.ADD_TAG = 'ADD_TAG';
var REMOVE_TAG = exports.REMOVE_TAG = 'REMOVE_TAG';
var UPDATE_FIELD_AUTH = exports.UPDATE_FIELD_AUTH = 'UPDATE_FIELD_AUTH';
var UPDATE_FIELD_EDITOR = exports.UPDATE_FIELD_EDITOR = 'UPDATE_FIELD_EDITOR';
var FOLLOW_USER = exports.FOLLOW_USER = 'FOLLOW_USER';
var UNFOLLOW_USER = exports.UNFOLLOW_USER = 'UNFOLLOW_USER';

var DATASET_CHANGE = exports.DATASET_CHANGE = 'DATASET_CHANGE';
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(APP_LOAD, 'APP_LOAD', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(REDIRECT, 'REDIRECT', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(ARTICLE_SUBMITTED, 'ARTICLE_SUBMITTED', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(SETTINGS_SAVED, 'SETTINGS_SAVED', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(DELETE_ARTICLE, 'DELETE_ARTICLE', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(SETTINGS_PAGE_UNLOADED, 'SETTINGS_PAGE_UNLOADED', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(HOME_PAGE_LOADED, 'HOME_PAGE_LOADED', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(HOME_PAGE_UNLOADED, 'HOME_PAGE_UNLOADED', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(ARTICLE_PAGE_LOADED, 'ARTICLE_PAGE_LOADED', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(ARTICLE_PAGE_UNLOADED, 'ARTICLE_PAGE_UNLOADED', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(ADD_COMMENT, 'ADD_COMMENT', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(DELETE_COMMENT, 'DELETE_COMMENT', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(ARTICLE_FAVORITED, 'ARTICLE_FAVORITED', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(ARTICLE_UNFAVORITED, 'ARTICLE_UNFAVORITED', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(SET_PAGE, 'SET_PAGE', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(APPLY_TAG_FILTER, 'APPLY_TAG_FILTER', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(CHANGE_TAB, 'CHANGE_TAB', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(PROFILE_PAGE_LOADED, 'PROFILE_PAGE_LOADED', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(PROFILE_PAGE_UNLOADED, 'PROFILE_PAGE_UNLOADED', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(LOGIN, 'LOGIN', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(LOGOUT, 'LOGOUT', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(REGISTER, 'REGISTER', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(LOGIN_PAGE_UNLOADED, 'LOGIN_PAGE_UNLOADED', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(REGISTER_PAGE_UNLOADED, 'REGISTER_PAGE_UNLOADED', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(ASYNC_START, 'ASYNC_START', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(ASYNC_END, 'ASYNC_END', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(EDITOR_PAGE_LOADED, 'EDITOR_PAGE_LOADED', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(EDITOR_PAGE_UNLOADED, 'EDITOR_PAGE_UNLOADED', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(ADD_TAG, 'ADD_TAG', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(REMOVE_TAG, 'REMOVE_TAG', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(UPDATE_FIELD_AUTH, 'UPDATE_FIELD_AUTH', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(UPDATE_FIELD_EDITOR, 'UPDATE_FIELD_EDITOR', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(FOLLOW_USER, 'FOLLOW_USER', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(UNFOLLOW_USER, 'UNFOLLOW_USER', 'react-src/reduxstore/constants/actionTypes.js');

  __REACT_HOT_LOADER__.register(DATASET_CHANGE, 'DATASET_CHANGE', 'react-src/reduxstore/constants/actionTypes.js');
}();

;