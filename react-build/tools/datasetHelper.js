'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var isDatasetChanged = function isDatasetChanged(newProps, state) {
  if (newProps.mandato !== state.mandato || newProps.idcliente !== state.idcliente || typeof newProps.start !== 'undefined' && newProps.start.toString() !== state.start.toString() || typeof newProps.end !== 'undefined' && newProps.end.toString() !== state.end.toString()) {
    return true;
  }
  return false;
};

var isDatasetReady = function isDatasetReady(newProps) {
  if (newProps.changing || !newProps.start || !newProps.end) {
    return false;
  }
  return true;
};

var datasetMapStateToProps = function datasetMapStateToProps(state) {
  if (state.dataset) {
    return _extends({}, state.dataset);
  }
  return {};
};

exports.datasetMapStateToProps = datasetMapStateToProps;
exports.isDatasetChanged = isDatasetChanged;
exports.isDatasetReady = isDatasetReady;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(isDatasetChanged, 'isDatasetChanged', 'react-src/tools/datasetHelper.js');

  __REACT_HOT_LOADER__.register(isDatasetReady, 'isDatasetReady', 'react-src/tools/datasetHelper.js');

  __REACT_HOT_LOADER__.register(datasetMapStateToProps, 'datasetMapStateToProps', 'react-src/tools/datasetHelper.js');
}();

;