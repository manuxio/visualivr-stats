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

    _this.name = 'Visual IVR Sessions indexer';
    _this.logTable = 'online_payment_logs';
    _this.confCollection = 'configurations';
    _this.targetCollection = 'visualivr';
    _this.searchString = 'Accesso con codice da url';
    _this.confName = 'visualIvrSessions';
    _this.mainProp = 'sessions';
    return _this;
  }

  _createClass(VisualIvrSessions, [{
    key: 'getBaseAndClause',
    value: function getBaseAndClause(mysql, minId, maxId) {
      return 'idcontratto is not null AND note = ' + mysql.escape(this.searchString) + ' AND id > ' + mysql.escape(minId) + ' AND id <= ' + mysql.escape(maxId);
    }
  }, {
    key: 'getUrls',
    value: function getUrls() {
      return [{
        base: 'vivr/openedfiles',
        method: 'get'
      }, {
        base: 'vivr/openedfilesalltime',
        method: 'get'
      }];
    }
  }, {
    key: 'respond',
    value: function respond(req, res, next, urlDef) {
      var _this2 = this;

      switch (urlDef.base) {
        case 'vivr/openedfiles':
          {
            this.answerMain(req, res, next);
            break;
          }
        case 'vivr/openedfilesalltime':
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

  __REACT_HOT_LOADER__.register(VisualIvrSessions, 'VisualIvrSessions', 'api-src/timedoperations/VisualIvrSessions.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'api-src/timedoperations/VisualIvrSessions.js');
}();

;