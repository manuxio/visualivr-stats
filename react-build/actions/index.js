'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var nextTodoId = 0;
var addTodo = exports.addTodo = function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text
  };
};

var setVisibilityFilter = exports.setVisibilityFilter = function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter: filter
  };
};

var toggleTodo = exports.toggleTodo = function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id: id
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(nextTodoId, 'nextTodoId', 'react-src/actions/index.js');

  __REACT_HOT_LOADER__.register(addTodo, 'addTodo', 'react-src/actions/index.js');

  __REACT_HOT_LOADER__.register(setVisibilityFilter, 'setVisibilityFilter', 'react-src/actions/index.js');

  __REACT_HOT_LOADER__.register(toggleTodo, 'toggleTodo', 'react-src/actions/index.js');
}();

;