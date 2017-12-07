import express from 'express';
import mysql from 'promise-mysql';
import expressSession from 'express-session';
import config from '../config.json';
import ect from 'ect';
import redisConnect from 'connect-redis';
import bodyParser from 'body-parser';
import moment from 'moment';
import onFinished from 'on-finished';
import datasetRouter from './routes/dataset';
import timedoperations from './timedoperations';
import MongoClient from 'mongodb';

const startUpFunction = () => {
  moment.locale('IT');
  const RedisStore = redisConnect(expressSession);
  const dbPool = mysql.createPool({
    connectionLimit: config.dbConnectionLimit,
    acquireTimeout: 1000,
    host: config.dbHost,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbName
  });
  const app = express();
  app.use(express.static('public'));
  app.set('view engine', 'ect');
  const ectRenderer = ect({ watch: true, cache: false, root: './views' });
  app.set('views', './views');
  app.engine('ect', ectRenderer.render);
  app.use((req, res, next) => {
    next();
  });
  app.set('trust proxy', 'loopback, 10.161.9.26');
  app.use(bodyParser.urlencoded({
    extended: true,
    limit: '1mb'
  }));
  app.use(bodyParser.json());
  app.use(expressSession({
    store: new RedisStore({
    }),
    secret: 'SerfinPaymentGateway',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
    maxAge: 600000
  }));
  app.use((req, res, next) => {
    dbPool.getConnection()
      .then(
        (connection) => {
          if (connection) {
            console.log('Got db!', req.ip);
            onFinished(res, () => {
              connection.release();
            });
            if (req.ip) {
              req.dbConnection = connection;
              return Promise.resolve({ connection });
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
        },
        (e) => {
          console.error('[db] Unable to get connection from pool!', e);
          return Promise.reject(e);
        }
      )
      .then(
        ({ connection }) => {
          // console.log('[db] Test query success!');
          return Promise.resolve({ connection });
        },
        (e) => {
          console.error('[db] Test query failed!', e);
          return Promise.reject(e);
        }
      )
      .then(
        ({ stop }) => {
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
        },
        (e) => { next(e); }
      );
  });
  app.use('/api/', datasetRouter);
  app.use((err, req, res, next) => { // eslint-disable-line
    if (err) {
      console.log('Error!', err);
      res.status(500).send('Failure');
    } else {
      res.status(404).send('Sorry!');
    }
  });
  app.set('port', config.httpPort + 1);
  const server = app.listen(app.get('port'), () => {
    console.info(`Web server (single cluster) listening on port ${app.get('port')}`);
  });
  server.timeout = 10000;
};

startUpFunction();

console.log('timedoperations', timedoperations);
MongoClient.connect(config.mongoUrl)
  .then(
    (mongoDb) => {
      const mysqlPool = mysql.createPool({
        connectionLimit: config.dbConnectionLimit,
        acquireTimeout: 1000,
        host: config.dbHost,
        user: config.dbUser,
        password: config.dbPassword,
        database: config.dbName
      });
      return Promise.resolve({
        mongoDb,
        mysqlPool
      });
    },
    (e) => Promise.reject(e)
  )
  .then(
    ({ mongoDb, mysqlPool }) => {
      timedoperations.forEach((op) => {
        const delay = op.delay;
        const interval = op.interval;
        const myFunc = (thisOp) => {
          thisOp.start(mysqlPool, mongoDb).then(
            () => {
              if (interval > 0) {
                setTimeout(() => { myFunc(thisOp); }, interval);
              }
            },
            (err) => {
              console.log('Error in timed operation', err);
              if (interval > 0) {
                setTimeout(() => { myFunc(thisOp); }, interval);
              }
            }
          );
        };
        setTimeout(() => {
          myFunc(op);
        }, delay);
      });
    },
    (e) => Promise.reject(e)
  );
