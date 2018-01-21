'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // eslint-disable-line

router.get('/dataset', function (req, res) {
  console.log('Ciao!');
  var session = req.session;
  if (!session.start) {
    session.start = (0, _moment2.default)().add(-7, 'day').startOf('day').toDate();
  }
  if (!session.end) {
    session.end = (0, _moment2.default)().endOf('day').toDate();
  }
  // console.log('Session in get', session);
  res.json({
    idcliente: session.idcliente,
    mandato: session.mandato,
    start: session.start,
    end: session.end
  });
});

router.post('/dataset', function (req, res) {
  console.log('HERE!', req.body);
  var body = req.body;
  var idcliente = body.idcliente,
      mandato = body.mandato,
      start = body.start,
      end = body.end;

  var session = req.session;
  session.mandato = mandato;
  session.idcliente = parseInt(idcliente, 10);
  if (start) {
    session.start = (0, _moment2.default)(start).startOf('day').toDate();
  }
  if (end) {
    session.end = (0, _moment2.default)(end).endOf('day').toDate();
  }
  console.log('session 2', session);
  setTimeout(function () {
    res.json({
      mandato: session.mandato,
      idcliente: session.idcliente,
      start: session.start,
      end: session.end
    });
  }, 1400);
});

router.post('/dataset/getTraffic', function (req, res) {
  console.log(req.body);
  var _req$body = req.body,
      idcliente = _req$body.idcliente,
      mandato = _req$body.mandato,
      start = _req$body.start,
      end = _req$body.end;

  if (false) {
    res.json({});
  } else {
    var myStart = (0, _moment2.default)(start).format('YYYY-MM-DD HH:mm:ss');
    var myEnd = (0, _moment2.default)(end).format('YYYY-MM-DD HH:mm:ss');
    var queries = ['SELECT\n          count(id) as y,\n          TIMESTAMP(CONCAT(year,\'-01-01 00:00:00\')) as x\n        FROM\n          online_payment_logs\n        WHERE\n          note = \'Accesso con codice da url\'\n        AND\n          data_inserimento >= ' + req.dbConnection.escape(myStart) + '\n        AND\n          data_inserimento < ' + req.dbConnection.escape(myEnd) + '\n        GROUP BY year', 'SELECT\n          count(id) as y,\n          TIMESTAMP(CONCAT(year,\'-\',month,\'-01 00:00:00\')) as x\n        FROM\n          online_payment_logs\n        WHERE\n          note = \'Accesso con codice da url\'\n        AND\n          data_inserimento >= ' + req.dbConnection.escape(myStart) + '\n        AND\n          data_inserimento < ' + req.dbConnection.escape(myEnd) + '\n        GROUP BY year, month', 'SELECT\n          count(id) as y,\n          TIMESTAMP(CONCAT(year,\'-\',month,\'-\',day,\' 00:00:00\')) as x\n        FROM\n          online_payment_logs\n        WHERE\n          note = \'Accesso con codice da url\'\n        AND\n          data_inserimento >= ' + req.dbConnection.escape(myStart) + '\n        AND\n          data_inserimento < ' + req.dbConnection.escape(myEnd) + '\n        GROUP BY year, month, day', 'SELECT\n          count(id) as y,\n          TIMESTAMP(CONCAT(year,\'-\',month,\'-\',day,\' \', hour,\':00:00\')) as x\n        FROM\n          online_payment_logs\n        WHERE\n          note = \'Accesso con codice da url\'\n        AND\n          data_inserimento >= ' + req.dbConnection.escape(myStart) + '\n        AND\n          data_inserimento < ' + req.dbConnection.escape(myEnd) + '\n        GROUP BY year, month, day, hour'];

    var dbOps = queries.map(function (q) {
      console.log(q);
      return req.dbConnection.query(q);
    });

    Promise.all(dbOps).then(function (results) {
      res.json({
        year: results[0],
        month: results[1],
        day: results[2],
        hour: results[3]
      });
    }, function (e) {
      return Promise.reject(e);
    });
  }
});

var _default = router;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(router, 'router', 'api-src/routes/dataset.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'api-src/routes/dataset.js');
}();

;