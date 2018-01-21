'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseOperation = require('./baseOperation');

var _baseOperation2 = _interopRequireDefault(_baseOperation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisualIvrSessions = function (_BaseOperation) {
  _inherits(VisualIvrSessions, _BaseOperation);

  function VisualIvrSessions(props) {
    _classCallCheck(this, VisualIvrSessions);

    var _this = _possibleConstructorReturn(this, (VisualIvrSessions.__proto__ || Object.getPrototypeOf(VisualIvrSessions)).call(this, props));

    _this.name = 'Visual IVR Failed Payments indexer';
    _this.logTable = 'onlinePaymentTransactions';
    _this.confCollection = 'configurations';
    _this.targetCollection = 'visualivr';
    // this.searchString = 'Codice verificato per record %';
    _this.confName = 'visualIvrFailedPaymentTransactionsIndexer';
    _this.dateColumn = 'updatetime';
    _this.mainProp = 'paymentFailed';
    _this.delay = 30000;
    _this.interval = 100000;
    return _this;
  }

  _createClass(VisualIvrSessions, [{
    key: 'getBaseAndClause',
    value: function getBaseAndClause(mysql, minId, maxId, minDate, maxDate) {
      return 'idcontratto is not null AND completed = 1 AND status != \'APPROVED\' AND status != \'PENDING\' AND ' + this.dateColumn + ' > ' + mysql.escape(minDate) + ' AND ' + this.dateColumn + ' <= ' + mysql.escape(maxDate);
    }
  }, {
    key: 'getQueries',
    value: function getQueries(mysql, minId, maxId, minDate, maxDate) {
      if (this.debug) {
        console.log('minId', minId, 'maxId', maxId, 'minDate', minDate, 'maxDate', maxDate);
      }
      var baseAndClause = this.getBaseAndClause(mysql, minId, maxId, minDate, maxDate);
      var baseSearch = 'idcontratto as myvalue';
      var baseSelect = 'SELECT ' + baseSearch + ' ';
      var baseFrom = 'FROM ' + this.logTable;
      // const splits = ['', 'idcliente', 'mandato'];
      var subsplits = [{
        group: 'YEAR(updatetime)',
        select: 'YEAR(updatetime) as year'
      }, {
        group: 'QUARTER(updatetime)',
        select: 'QUARTER(updatetime) as quarter'
      }, {
        group: 'MONTH(updatetime)',
        select: 'MONTH(updatetime) as month'
      }, {
        group: 'WEEKOFYEAR(updatetime)',
        select: 'WEEKOFYEAR(updatetime) as week'
      }, {
        group: 'DAY(updatetime)',
        select: 'DAY(updatetime) as day'
      }, {
        group: 'HOUR(updatetime)',
        select: 'HOUR(updatetime) as hour'
      }];
      var queries = [];
      // Base queries
      queries.push(baseSelect + ' ' + baseFrom + ' WHERE ' + baseAndClause + ' GROUP BY idcontratto');
      var subSelect = '';
      var subGroup = 'GROUP BY idcontratto';
      subsplits.forEach(function (split) {
        subSelect += ', ' + split.select;
        subGroup += ', ' + split.group;
        queries.push(baseSelect + ' ' + subSelect + ' ' + baseFrom + ' WHERE ' + baseAndClause + ' ' + subGroup + ' ');
      });

      // Split on idcliente
      queries.push(baseSelect + ', idcliente ' + baseFrom + ' WHERE ' + baseAndClause + ' GROUP BY idcontratto, idcliente ');
      subSelect = '';
      subGroup = 'GROUP BY idcontratto, idcliente';
      subsplits.forEach(function (split) {
        subSelect += ', ' + split.select;
        subGroup += ', ' + split.group;
        queries.push(baseSelect + ', idcliente ' + subSelect + ' ' + baseFrom + ' WHERE ' + baseAndClause + ' ' + subGroup + ' ');
      });

      // Split on mandato
      queries.push(baseSelect + ', idcliente, mandato ' + baseFrom + ' WHERE ' + baseAndClause + ' GROUP BY idcontratto, idcliente, mandato ');
      subSelect = '';
      subGroup = 'GROUP BY idcontratto, idcliente, mandato';
      subsplits.forEach(function (split) {
        subSelect += ', ' + split.select;
        subGroup += ', ' + split.group;
        queries.push(baseSelect + ', idcliente, mandato ' + subSelect + ' ' + baseFrom + ' WHERE ' + baseAndClause + ' ' + subGroup + ' ');
      });
      return queries;
    }
  }, {
    key: 'getUrls',
    value: function getUrls() {
      return [{
        base: 'vivr/failedpayments',
        method: 'get'
      }, {
        base: 'vivr/failedpaymentsalltime',
        method: 'get'
      }];
    }
  }, {
    key: 'respond',
    value: function respond(req, res, next, urlDef) {
      var _this2 = this;

      switch (urlDef.base) {
        case 'vivr/failedpayments':
          {
            this.answerMain(req, res, next);
            break;
          }
        case 'vivr/failedpaymentsalltime':
          {
            var _req$session = req.session,
                idcliente = _req$session.idcliente,
                mandato = _req$session.mandato;

            var searchDoc = {
              period: 'alltime'
            };
            if (idcliente) {
              searchDoc.idcliente = idcliente;
            }
            if (mandato) {
              searchDoc.mandato = mandato;
            }
            req.mongodb.collection('visualivr').findOne(searchDoc).then(function (doc) {
              if (!doc) {
                res.json('');
              } else {
                res.json(doc[_this2.mainProp].length);
              }
            }, function (e) {
              next(e);
            });
            break;
          }
        default:
          {
            next();
          }
      }
    }
  }]);

  return VisualIvrSessions;
}(_baseOperation2.default);

var _default = VisualIvrSessions;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(VisualIvrSessions, 'VisualIvrSessions', 'api-src/timedoperations/VisualIvrFailedPayments.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'api-src/timedoperations/VisualIvrFailedPayments.js');
}();

;