import moment from 'moment';
import series from 'es6-promise-series';
import mapLimit from 'async/mapLimit';

export default class BaseOperation {
  constructor() {
    this.delay = 10000;
    this.interval = 100000;
    this.name = 'BaseOperation';
    this.opType = 'addToSet';
    this.allVisualIvrAddToSetProps = {
      sessions: { $each: [] },
      verifiedCodes: { $each: [] },
      verifiedIdentities: { $each: [] },
      resumeSeen: { $each: [] },
      paymentModes: { $each: [] },
      paymentFailed: { $each: [] },
      paymentSucceded: { $each: [] },
      paymentCompleted: { $each: [] }
    };
    this.allVisualIvrIncProps = {
      sessions: 0
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
    if (typeof row.year === 'undefined' || row.year === null) {
      return 'alltime';
    }
    if (typeof row.quarter === 'undefined' || row.quarter === null) {
      return 'year';
    }
    if (typeof row.month === 'undefined' || row.month === null) {
      return 'quarter';
    }
    if (typeof row.week === 'undefined' || row.week === null) {
      return 'month';
    }
    if (typeof row.day === 'undefined' || row.day === null) {
      return 'week';
    }
    if (typeof row.hour === 'undefined' | row.hour === null) {
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
    // if (this.debug) console.log('aggregateQuery', JSON.stringify(aggregateQuery));
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
            const minDate = configuration.maxDate || moment('01-01-1970', 'MM-DD-YYYY').toDate();
            return mysql.query(`SELECT max(id) as maxId from ${this.logTable}`)
              .then(
                (results) => {
                  const maxId = results && results[0] ? results[0].maxId : 0;
                  return Promise.resolve({ mysql, configuration, minId, maxId, minDate });
                },
                (e) => Promise.reject(e)
              )
              .then(
                (result) => {
                  if (!this.dateBased || (!this.dateColumn || this.dateColumn.length < 1)) {
                    return Promise.resolve({ ...result, maxDate: moment().toDate() });
                  }
                  console.log('This module has a date column!');
                  return mysql.query(`SELECT max(${this.dateColumn}) as maxDate from ${this.logTable}`)
                    .then(
                      (results) => {
                        const maxDate = results && results[0] ? results[0].maxDate : moment('01-01-1970', 'MM-DD-YYYY').toDate();
                        return Promise.resolve({ maxDate, ...result });
                      },
                      (e) => Promise.reject(e)
                    );
                },
                (e) => Promise.reject(e)
              );
          },
          (e) => Promise.reject(e)
        )
        .then( // Create and run mysql queries
          ({ minId, maxId, minDate, maxDate, ...rest }) => {
            const queries = this.getQueries(mysql, minId, maxId, minDate, maxDate);
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
                  return Promise.resolve({ mysql, minId, maxId, minDate, maxDate, queries, arrayOfRowsArray, ...rest });
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
                // if (this.debug) {
                //   console.log('Row', row);
                // }
                const updateOptions = {
                  upsert: true
                };
                const searchDoc = {
                  idcliente: { $exists: false },
                  mandato: { $exists: false },
                  cluster: { $exists: false },
                  year: { $exists: false },
                  quarter: { $exists: false },
                  month: { $exists: false },
                  week: { $exists: false },
                  day: { $exists: false },
                  hour: { $exists: false },
                  period
                };
                // const updateDoc = {
                //   $addToSet: {
                //     ...this.allVisualIvrAddToSetProps,
                //     ...(row.myvalue ? { [this.mainProp]: row.myvalue } : {})
                //   },
                //   $set: {
                //     period
                //   }
                // };
                const updateDoc = {
                  $addToSet: {
                    ...this.allVisualIvrAddToSetProps
                  },
                  $inc: {
                    ...this.allVisualIvrIncProps
                  },
                  $set: {
                    period
                  }
                };
                if (this.opType === 'addToSet') {
                  if (row.myvalue) {
                    updateDoc.$addToSet[this.mainProp] = row.myvalue;
                  } else {
                    delete updateDoc.$addToSet[this.mainProp];
                  }
                }
                if (this.opType === 'inc') {
                  if (row.myvalue) {
                    updateDoc.$inc[this.mainProp] = row.myvalue || 0;
                  }
                }
                console.log('UpdateDoc', updateDoc);
                const keys = ['idcliente', 'mandato', 'cluster', 'year', 'quarter', 'month', 'week', 'day', 'hour'];
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
                if (period === 'week') {
                  delete searchDoc.month;
                }
                prev.push([searchDoc, updateDoc, updateOptions, queries[queryPosition], row]);
              });
              return prev;
            }, []);
            console.info(`[Visual IVR Sessions] Running ${mongoUpsertOps.length} mongodb upserts`);
            return new Promise((innerResolve, innerReject) => {
              mapLimit(mongoUpsertOps, 20, ([searchDoc, updateDoc, updateOptions, mysqlQuery, row], done) => {
                // console.log('Starting query', searchDoc, updateDoc, updateOptions);
                mongoDb.collection(this.targetCollection)
                  .updateOne(searchDoc, updateDoc, updateOptions)
                  .then(
                    (writeOp) => {
                      // if (writeOp.upsertedCount === 1 && period === 'week') {
                      //   console.log('Created doc', searchDoc, row, queries[queryPosition]);
                      // }
                      if (writeOp.modifiedCount + writeOp.upsertedCount !== 1) {
                        console.info('[Visual IVR Sessions] Write failed on query', searchDoc, updateDoc, mysqlQuery, row);
                        done('Query failed!');
                      } else {
                        // console.log('Qc', qc++, '/', mongoUpsertOps.length);
                        done(null, writeOp);
                      }
                    },
                    (e) => {
                      done(e);
                    }
                  );
              }, (err) => {
                if (err) {
                  innerReject(err);
                } else {
                  innerResolve({ mysql, ...rest});
                }
              });
            });
            // mapLimit
            // return Promise.all(mongoUpsertOps)
            //   .then(
            //     () => {
            //       return Promise.resolve({ mysql, ...rest});
            //     },
            //     (e) => Promise.reject(e)
            //   );
          },
          (e) => Promise.reject(e)
        )
        .then( // Update configuration
          ({ configuration, maxId, minId, minDate, maxDate, ...rest }) => {
            configuration.name = this.confName;
            configuration.maxId = maxId;
            configuration.minId = minId;
            configuration.minDate = minDate;
            configuration.maxDate = maxDate;
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

  getBaseSearch() {
    return this.baseSearch || 'idcontratto as myvalue';
  }

  getBaseSelect() {
    return `SELECT ${this.getBaseSearch()} `;
  }

  getBaseFrom() {
    return `FROM ${this.logTable}`;
  }

  getSubSplits() {
    const datekey = this.dateColumn || 'data_inserimento';
    return this.subplits || [
      {
        group: `YEAR(${datekey})`,
        select: `YEAR(${datekey}) as year`
      },
      {
        group: `QUARTER(${datekey})`,
        select: `QUARTER(${datekey}) as quarter`
      },
      {
        group: `MONTH(${datekey})`,
        select: `MONTH(${datekey}) as month`
      },
      {
        group: `WEEKOFYEAR(${datekey})`,
        select: `WEEKOFYEAR(${datekey}) as week`
      },
      {
        group: `DAY(${datekey})`,
        select: `DAY(${datekey}) as day`
      },
      {
        group: `HOUR(${datekey})`,
        select: `HOUR(${datekey}) as hour`
      }
    ];
  }

  getMainSplits() {
    return this.mainSplits || [
      ['idcontratto'],
      ['idcontratto', 'idcliente'],
      ['idcontratto', 'idcliente', 'mandato']
    ];
  }

  getQueries(mysql, minId, maxId, minDate, maxDate) {
    const baseAndClause = this.getBaseAndClause(mysql, minId, maxId, minDate, maxDate);
    const baseSelect = this.getBaseSelect();
    const baseFrom = this.getBaseFrom();
    const mainSplits = this.getMainSplits();
    const subSplits = this.getSubSplits();

    const queries = [];
    mainSplits.forEach((mainSplit) => {
      const groupby = `GROUP BY ${mainSplit.join(',')}`;
      const mainq = `${baseSelect} ${baseFrom} WHERE ${baseAndClause} ${groupby}`;
      queries.push(mainq);
      let subSelect = '';
      let subGroup = groupby;
      subSplits.forEach((split) => {
        subSelect += `, ${split.select}`;
        subGroup += `, ${split.group}`;
        queries.push(`${baseSelect}, idcliente ${subSelect} ${baseFrom} WHERE ${baseAndClause} ${subGroup} `);
      });
    });
    return queries;
  }
}
