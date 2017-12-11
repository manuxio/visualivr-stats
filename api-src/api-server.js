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
  MongoClient.connect(config.mongoUrl)
    .then(
      (mongodb) => {
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
        app.use((req, res, next) => {
          req.mongodb = mongodb;
          next();
        });
        app.use('/api/', datasetRouter);
        timedoperations.forEach((to) => {
          const urls = to.getUrls();
          urls.forEach((urlDef) => {
            const {
              method,
              base
            } = urlDef;
            // console.log('Creating url', `/api/${base}`, 'in method', method);
            app[method](`/api/${base}`, (req, res, next) => {
              to.respond(req, res, next, urlDef);
            });
          });
        });
        app.use((err, req, res, next) => { // eslint-disable-line
          if (err) {
            console.log('Error!', err);
            res.status(500).send('Failure');
          } else {
            res.status(404).send('Sorry, page not found!');
          }
        });
        app.set('port', config.httpPort + 1);
        const server = app.listen(app.get('port'), () => {
          console.info(`Web server (single cluster) listening on port ${app.get('port')}`);
        });
        server.timeout = 10000;
      },
      (e) => {
        console.error(e);
        throw new Error('Unable to connect to mongodb!');
      }
    );
};

startUpFunction();

MongoClient.connect(config.mongoUrl)
  .then(
    (mongoDb) => {
      const mysqlPool = mysql.createPool({
        connectionLimit: 1,
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
      let now = (new Date()).getTime();
      timedoperations.forEach((to) => {
        to.nextStart = to.delay + now;
      });
      let running = false;
      setInterval(() => {
        now = (new Date()).getTime();
        if (running) {
          if (now - running.startTime > 5000) {
            console.info(`[Scheduler] Warning, operation ${running.name} is slow... ${((now - running.startTime) / 1000).toFixed(0)} seconds since start!`);
          }
          return;
        }
        const sortedTimedPlugins = timedoperations.sort((a, b) => {
          return a.nextStart - b.nextStart;
        });
        const expiredOperation = sortedTimedPlugins.reduce((prev, curr) => {
          if (prev) {
            return prev;
          }
          if (curr.nextStart && curr.nextStart < now) {
            return curr;
          }
          return null;
        }, null);
        if (expiredOperation) {
          running = expiredOperation;
          console.info(`[Scheduler] running operation ${expiredOperation.name}`);
          mysqlPool.getConnection()
            .then(
              (mysqlConnection) => {
                delete expiredOperation.nextStart;
                expiredOperation.startTime = (new Date()).getTime();
                expiredOperation.start(mysqlConnection, mongoDb)
                  .then(
                    () => {
                      console.info(`[Scheduler] operation completed ${expiredOperation.name}`);
                      if (expiredOperation.interval) {
                        expiredOperation.nextStart = (new Date()).getTime() + expiredOperation.interval;
                      }
                      mysqlConnection.release();
                      running = null;
                    },
                    (e) => {
                      console.info(`[Scheduler] operation completed with error, ${expiredOperation.name}`, e);
                      if (expiredOperation.interval) {
                        expiredOperation.nextStart = (new Date()).getTime() + expiredOperation.interval;
                      }
                      mysqlConnection.release();
                      running = null;
                    }
                  );
              },
              () => {
                console.info(`[Scheduler] unable to acquire db for operation ${expiredOperation.name} !!!!`);
                running = null;
              }
            );
        }
      }, 5000);
    },
    (e) => Promise.reject(e)
  );
