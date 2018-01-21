'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _promiseMysql = require('promise-mysql');

var _promiseMysql2 = _interopRequireDefault(_promiseMysql);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _config = require('../config.json');

var _config2 = _interopRequireDefault(_config);

var _ect = require('ect');

var _ect2 = _interopRequireDefault(_ect);

var _connectRedis = require('connect-redis');

var _connectRedis2 = _interopRequireDefault(_connectRedis);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _onFinished = require('on-finished');

var _onFinished2 = _interopRequireDefault(_onFinished);

var _timedoperations = require('./timedoperations');

var _timedoperations2 = _interopRequireDefault(_timedoperations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var startUpFunction = function startUpFunction() {
  _moment2.default.locale('IT');
  var RedisStore = (0, _connectRedis2.default)(_expressSession2.default);
  var dbPool = _promiseMysql2.default.createPool({
    connectionLimit: _config2.default.dbConnectionLimit,
    acquireTimeout: 1000,
    host: _config2.default.dbHost,
    user: _config2.default.dbUser,
    password: _config2.default.dbPassword,
    database: _config2.default.dbName
  });
  var app = (0, _express2.default)();
  app.use(_express2.default.static('public'));
  app.set('view engine', 'ect');
  var ectRenderer = (0, _ect2.default)({ watch: true, cache: false, root: './views' });
  app.set('views', './views');
  app.engine('ect', ectRenderer.render);
  app.use(function (req, res, next) {
    next();
  });
  app.set('trust proxy', 'loopback, 10.161.9.26');
  app.use(_bodyParser2.default.urlencoded({
    extended: true,
    limit: '1mb'
  }));
  app.use((0, _expressSession2.default)({
    store: new RedisStore({}),
    secret: 'SerfinPaymentGateway',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
    maxAge: 600000
  }));
  app.use(function (req, res, next) {
    dbPool.getConnection().then(function (connection) {
      if (connection) {
        console.log('Got db!', req.ip);
        (0, _onFinished2.default)(res, function () {
          connection.release();
        });
        if (req.ip) {
          req.dbConnection = connection;
          return Promise.resolve({ connection: connection });
        }
        return Promise.reject('Client gone!');
      }
      req.dbConnection = connection;
      return Promise.reject('No connection!');
      // return connection.query('SELECT 1')
      // .then(
      //   (result) => Promise.resolve({ connection }),
      //   (e) => Promise.reject(e)
      // );
    }, function (e) {
      console.error('[db] Unable to get connection from pool!', e);
      return Promise.reject(e);
    }).then(function (_ref) {
      var connection = _ref.connection;

      // console.log('[db] Test query success!');
      return Promise.resolve({ connection: connection });
    }, function (e) {
      console.error('[db] Test query failed!', e);
      return Promise.reject(e);
    }).then(function (_ref2) {
      var stop = _ref2.stop;

      // Qui imposto un callback sull'evento finish di express
      // L'evento finish viene chiamato ogni volta che
      // viene mandata una risposta al cliente.
      // Il callback server per restituire al pool la connessione che era
      // stata assegnata alla richiesta (req) corrente
      if (!stop) {
        next();
      } else {
        console.log('Not going next...');
      }
    }, function (e) {
      next(e);
    });
  });
  app.use(function (err, req, res, next) {
    // eslint-disable-line
    if (err) {
      console.log('Error!', err);
      res.status(500).send('Failure');
    } else {
      res.status(404).send('Sorry!');
    }
  });
  app.set('port', _config2.default.httpPort + 1);
  var server = app.listen(app.get('port'), function () {
    console.info('Web server (single cluster) listening on port ' + app.get('port'));
  });
  server.timeout = 10000;
};

startUpFunction();

// console.log('timedoperations', timedoperations);

_timedoperations2.default.forEach(function (op) {
  var delay = op.delay;
  var interval = op.interval;
  var myFunc = function myFunc(thisOp) {
    thisOp.start().then(function () {
      setTimeout(function () {
        myFunc(thisOp);
      }, interval);
    }, function (err) {
      console.log('Err', err);setTimeout(function () {
        myFunc(thisOp);
      }, interval);
    });
  };
  setTimeout(function () {
    myFunc(op);
  }, delay);
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(startUpFunction, 'startUpFunction', 'api-src/index.js');
}();

;