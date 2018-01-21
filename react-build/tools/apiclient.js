'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _superagentPromise = require('superagent-promise');

var _superagentPromise2 = _interopRequireDefault(_superagentPromise);

var _superagent2 = require('superagent');

var _superagent3 = _interopRequireDefault(_superagent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var superagent = (0, _superagentPromise2.default)(_superagent3.default, global.Promise);

var _default = superagent;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(superagent, 'superagent', 'react-src/tools/apiclient.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/tools/apiclient.js');
}();

;