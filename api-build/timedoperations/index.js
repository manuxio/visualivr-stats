'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VisualIvrSessions = require('./VisualIvrSessions.js');

var _VisualIvrSessions2 = _interopRequireDefault(_VisualIvrSessions);

var _VisualIvrCodeVerified = require('./VisualIvrCodeVerified.js');

var _VisualIvrCodeVerified2 = _interopRequireDefault(_VisualIvrCodeVerified);

var _VisualIvrFailedPayments = require('./VisualIvrFailedPayments.js');

var _VisualIvrFailedPayments2 = _interopRequireDefault(_VisualIvrFailedPayments);

var _VisualIvrSuccededPayments = require('./VisualIvrSuccededPayments.js');

var _VisualIvrSuccededPayments2 = _interopRequireDefault(_VisualIvrSuccededPayments);

var _VisualIvrCompletedPayments = require('./VisualIvrCompletedPayments.js');

var _VisualIvrCompletedPayments2 = _interopRequireDefault(_VisualIvrCompletedPayments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = [new _VisualIvrSessions2.default(), new _VisualIvrCodeVerified2.default(), new _VisualIvrFailedPayments2.default(), new _VisualIvrSuccededPayments2.default(), new _VisualIvrCompletedPayments2.default()];
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'api-src/timedoperations/index.js');
}();

;