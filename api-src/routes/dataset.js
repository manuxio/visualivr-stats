import express from 'express';
import moment from 'moment';
const router = express.Router(); // eslint-disable-line

router.get('/dataset', (req, res) => {
  console.log('Ciao!');
  const session = req.session;
  if (!session.start) {
    session.start = moment().add(-7, 'day').startOf('day').toDate();
  }
  if (!session.end) {
    session.end = moment().endOf('day').toDate();
  }
  // console.log('Session in get', session);
  res.json({
    idcliente: session.idcliente,
    mandato: session.mandato,
    start: session.start,
    end: session.end
  });
});

router.post('/dataset', (req, res) => {
  console.log('HERE!', req.body);
  const {
    body
  } = req;
  const {
    idcliente,
    mandato,
    start,
    end
  } = body;
  const session = req.session;
  session.mandato = mandato;
  session.idcliente = parseInt(idcliente, 10) * 3;
  if (start) {
    session.start = moment(start).startOf('day').toDate();
  }
  if (end) {
    session.end = moment(end).endOf('day').toDate();
  }
  console.log('session 2', session);
  setTimeout(() => {
    res.json({
      mandato: session.mandato,
      idcliente: session.idcliente,
      start: session.start,
      end: session.end
    });
  }, 1400);
});

router.post('/dataset/getTraffic', (req, res) => {
  console.log(req.body);
  const {
    idcliente,
    mandato,
    start,
    end
  } = req.body;
  if (false) {
    res.json({});
  } else {
    const myStart = moment(start).format('YYYY-MM-DD HH:mm:ss');
    const myEnd = moment(end).format('YYYY-MM-DD HH:mm:ss');
    const queries = [
      `SELECT
          count(id) as y,
          TIMESTAMP(CONCAT(year,'-01-01 00:00:00')) as x
        FROM
          online_payment_logs
        WHERE
          note = 'Accesso con codice da url'
        AND
          data_inserimento >= ${req.dbConnection.escape(myStart)}
        AND
          data_inserimento < ${req.dbConnection.escape(myEnd)}
        GROUP BY year`,
      `SELECT
          count(id) as y,
          TIMESTAMP(CONCAT(year,'-',month,'-01 00:00:00')) as x
        FROM
          online_payment_logs
        WHERE
          note = 'Accesso con codice da url'
        AND
          data_inserimento >= ${req.dbConnection.escape(myStart)}
        AND
          data_inserimento < ${req.dbConnection.escape(myEnd)}
        GROUP BY year, month`,
      `SELECT
          count(id) as y,
          TIMESTAMP(CONCAT(year,'-',month,'-',day,' 00:00:00')) as x
        FROM
          online_payment_logs
        WHERE
          note = 'Accesso con codice da url'
        AND
          data_inserimento >= ${req.dbConnection.escape(myStart)}
        AND
          data_inserimento < ${req.dbConnection.escape(myEnd)}
        GROUP BY year, month, day`,
      `SELECT
          count(id) as y,
          TIMESTAMP(CONCAT(year,'-',month,'-',day,' ', hour,':00:00')) as x
        FROM
          online_payment_logs
        WHERE
          note = 'Accesso con codice da url'
        AND
          data_inserimento >= ${req.dbConnection.escape(myStart)}
        AND
          data_inserimento < ${req.dbConnection.escape(myEnd)}
        GROUP BY year, month, day, hour`
    ];

    const dbOps = queries.map((q) => {
      console.log(q);
      return req.dbConnection.query(q);
    });

    Promise.all(dbOps)
      .then(
        (results) => {
          res.json({
            year: results[0],
            month: results[1],
            day: results[2],
            hour: results[3]
          });
        },
        (e) => Promise.reject(e)
      );
  }
});

export default router;
