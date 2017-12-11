import moment from 'moment';
import series from 'es6-promise-series';

export default class BaseOperation {
  constructor() {
    this.delay = 10000;
    this.interval = 100000;
    this.name = 'BaseOperation';
    this.allVisualIvrIncrementalProps = {
      sessions: { $each: [] },
      verifiedCodes: { $each: [] },
      verifiedIdentities: { $each: [] },
      resumeSeen: { $each: [] },
      paymentModes: { $each: [] },
      paymentFailed: { $each: [] },
      paymentSucceded: { $each: [] },
      paymentCompleted: { $each: [] }
    };
  }

  getUrls() {
    return [];
  }

  respond(req, res, next/* respond */) {
    next();
  }

  loadConfig(mongoDb) {
    return new Promise((resolve, reject) => {
      mongoDb.collection(this.confCollection)
        .findOne({
          name: this.confName
        })
        .then(
          (configuration) => {
            resolve(configuration || {});
          },
          (e) => {
            reject(e);
          }
        );
    });
  }

  getTypeByProps(row) {
    if (typeof row.year === 'undefined') {
      return 'alltime';
    }
    if (typeof row.quarter === 'undefined') {
      return 'year';
    }
    if (typeof row.month === 'undefined') {
      return 'quarter';
    }
    if (typeof row.week === 'undefined') {
      return 'month';
    }
    if (typeof row.day === 'undefined') {
      return 'week';
    }
    if (typeof row.hour === 'undefined') {
      return 'day';
    }
    return 'hour';
  }

  answerMain(req, res, next) {
    const {
      start,
      end,
      idcliente,
      mandato
    } = req.session;
    const aggregateQuery = [
      // Stage 1
      {
        $match: {
          idcliente: (idcliente !== 'undefined' && idcliente !== null && idcliente !== '') ? (idcliente === null ? { type: 10 } : idcliente) : { $exists: false }, // eslint-disable-line
          mandato: (mandato !== 'undefined' && mandato !== null && mandato !== '') ? (mandato === null ? { type: 10 } : mandato) : { $exists: false }, // eslint-disable-line
          ...(
            start && end
              ?
              {
                $or: [
                  {
                    period: 'alltime'
                  },
                  {
                    $and: [
                      {
                        'start': { $gte: moment(start).toDate()}
                      },
                      {
                        'start': { $lt: moment(end).toDate()}
                      }
                    ]
                  }
                ]
              }
              : {}
          )
        }
      },
      // Stage 2
      {
        $sort: {
          period: 1,
          start: 1
        }
      },
      {
        $addFields: {
          [this.mainProp]: { $size: `$${this.mainProp}` }
        }
      },
      // Stage 3
      {
        $group: {
          _id: '$period',
          average: {
            $avg: `$${this.mainProp}`
          },
          max: {
            $max: `$${this.mainProp}`
          },
          stdDev: { $stdDevPop: `$${this.mainProp}` },
          dataStart: { $min: '$start' },
          dataEnd: { $max: '$end' },
          data: {
            $push: {
              x: '$start',
              y: `$${this.mainProp}`
            }
          }
        }
      }
    ];
    const aggregateOptions = {
      cursor: {
        batchSize: 50
      },
      allowDiskUse: true
    };
    req.mongodb.collection('visualivr')
      .aggregate(aggregateQuery,
        aggregateOptions
      )
      .toArray()
      .then(
        (results) => {
          res.json(results.reduce((prev, curr) => {
            prev[curr._id] = curr;
            return prev;
          }, {}));
        }
      )
      .catch((e) => {
        console.error('Error!', e);
        next(e);
      });
  }

  start(mysql, mongoDb) {
    console.info('[Visual IVR Sessions] Starting timed operation');
    return new Promise((resolve, reject) => {
      this.loadConfig(mongoDb)
        .then(
          (configuration) => {
            return Promise.resolve({ mysql, configuration });
          },
          (e) => Promise.reject(e)
        )
        .then( // Get max/min id
          ({ configuration }) => {
            const minId = configuration.maxId || 0;
            return mysql.query(`SELECT max(id) as maxId from ${this.logTable}`)
              .then(
                (results) => {
                  const maxId = results && results[0] ? results[0].maxId : 0;
                  return Promise.resolve({ mysql, configuration, minId, maxId });
                },
                (e) => Promise.reject(e)
              );
            // return Promise.resolve({ mysql, configuration, lastId });
          },
          (e) => Promise.reject(e)
        )
        .then( // Create and run mysql queries
          ({ minId, maxId, ...rest }) => {
            const queries = this.getQueries(mysql, minId, maxId);
            const getQueryFunctions = queries.map((q, pos) => {
              return () => {
                // console.log('Query', q);
                console.info(`[Visual IVR Sessions] Running mySQL query n. ${pos + 1}/${getQueryFunctions.length}`);
                return mysql.query(q)
                  .then(
                    (results) => {
                      // console.log('Q', q);
                      // console.log('R LEN', results.length);
                      return Promise.resolve(results);
                    },
                    (e) => Promise.reject(e)
                  );
              };
            });
            return series(getQueryFunctions)
              .then(
                (arrayOfRowsArray) => {
                  return Promise.resolve({ mysql, minId, maxId, queries, arrayOfRowsArray, ...rest });
                },
                (e) => Promise.reject(e)
              );
          },
          (e) => Promise.reject(e)
        )
        .then( // Run mongodb updates
          ({ queries, arrayOfRowsArray, ...rest }) => {
            const mongoUpsertOps = arrayOfRowsArray.reduce((prev, rowsArray, queryPosition) => {
              const period = rowsArray[0] ? this.getTypeByProps(rowsArray[0]) : null;
              rowsArray.forEach((row) => {
                const updateOptions = {
                  upsert: true
                };
                const searchDoc = {
                  idcliente: { $exists: false },
                  mandato: { $exists: false },
                  year: { $exists: false },
                  quarter: { $exists: false },
                  month: { $exists: false },
                  week: { $exists: false },
                  day: { $exists: false },
                  hour: { $exists: false },
                  period
                };
                const updateDoc = {
                  $addToSet: {
                    ...this.allVisualIvrIncrementalProps,
                    ...(row.myvalue ? { [this.mainProp]: row.myvalue } : {})
                  },
                  $set: {
                    period
                  }
                };
                const keys = ['idcliente', 'mandato', 'year', 'quarter', 'month', 'week', 'day', 'hour'];
                keys.forEach((k) => {
                  if (typeof row[k] !== 'undefined' && row[k] !== null) {
                    if (row[k] === null) {
                      searchDoc[k] = { $type: 10 }; // Search for NULL value
                    } else {
                      searchDoc[k] = row[k];
                    }
                  }
                });
                // console.log(searchDoc, updateDoc);
                let start;
                let end;
                switch (period) {
                  case 'year': {
                    start = moment(row.year.toString(), 'YYYY').startOf('year').toDate();
                    end = moment(start).endOf('year').toDate();
                    // console.log('row', row);
                    // console.log('searchDoc', searchDoc);
                    // console.log('updateDoc', updateDoc);
                    // console.log('*************************');
                    break;
                  }
                  case 'quarter': {
                    start = moment(`${row.year} ${row.quarter}`, 'YYYY Q').startOf('quarter').toDate();
                    end = moment(start).endOf('quarter').toDate();
                    break;
                  }
                  case 'month': {
                    start = moment(`${row.year}-${row.month}`, 'YYYY-MM').startOf('month').toDate();
                    end = moment(start).endOf('month').toDate();
                    break;
                  }
                  case 'week': {
                    start = moment(`${row.year} ${row.week}`, 'YYYY ww').startOf('week').toDate();
                    end = moment(start).endOf('week').toDate();
                    break;
                  }
                  case 'day': {
                    start = moment(`${row.year}-${row.month}-${row.day}`, 'YYYY-MM-DD').startOf('day').toDate();
                    end = moment(start).endOf('day').toDate();
                    break;
                  }
                  case 'hour': {
                    start = moment(`${row.year}-${row.month}-${row.day} ${row.hour}`, 'YYYY-MM-DD HH').startOf('hour').toDate();
                    end = moment(start).endOf('hour').toDate();
                    break;
                  }
                  default: {
                    start = moment('2000-01-01').toDate();
                    end = moment('2100-01-01').toDate();
                    // console.log('row', row);
                    // console.log('searchDoc', searchDoc);
                    // console.log('updateDoc', updateDoc);
                    // console.log('*************************');
                  }
                }
                updateDoc.$set.start = start;
                updateDoc.$set.end = end;
                prev.push(
                  mongoDb.collection(this.targetCollection)
                    .updateOne(searchDoc, updateDoc, updateOptions)
                    .then(
                      (writeOp) => {
                        if (writeOp.modifiedCount + writeOp.upsertedCount !== 1) {
                          console.info('[Visual IVR Sessions] Write failed on query', searchDoc, updateDoc, queries[queryPosition], row);
                        }
                        return Promise.resolve(writeOp);
                      },
                      (e) => Promise.reject(e)
                    )
                );
              });
              return prev;
            }, []);
            console.info(`[Visual IVR Sessions] Running ${mongoUpsertOps.length} mongodb upserts`);
            return Promise.all(mongoUpsertOps)
              .then(
                () => {
                  return Promise.resolve({ mysql, ...rest});
                },
                (e) => Promise.reject(e)
              );
          },
          (e) => Promise.reject(e)
        )
        .then( // Update configuration
          ({ configuration, maxId, minId, ...rest }) => {
            configuration.name = this.confName;
            configuration.maxId = maxId;
            configuration.minId = minId;
            configuration.lastRun = new Date();
            return mongoDb.collection(this.confCollection)
              .updateOne(
                {
                  name: this.confName
                },
                configuration,
                {
                  upsert: true
                }
              )
              .then(
                () => Promise.resolve({ configuration, maxId, minId, ...rest }),
                (e) => Promise.reject(e)
              );
          },
          (e) => Promise.reject(e)
        )
        .then( // Finish
          () => {
            resolve();
          },
          (e) => {
            reject(e);
          }
        );
    });
    // console.log('Starting....', mysqlPool);
    // return Promise.resolve();
  }
}
