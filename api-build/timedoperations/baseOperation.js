'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _es6PromiseSeries = require('es6-promise-series');

var _es6PromiseSeries2 = _interopRequireDefault(_es6PromiseSeries);

var _mapLimit = require('async/mapLimit');

var _mapLimit2 = _interopRequireDefault(_mapLimit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseOperation = function () {
  function BaseOperation() {
    _classCallCheck(this, BaseOperation);

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

  _createClass(BaseOperation, [{
    key: 'getUrls',
    value: function getUrls() {
      return [];
    }
  }, {
    key: 'respond',
    value: function respond(req, res, next /* respond */) {
      next();
    }
  }, {
    key: 'loadConfig',
    value: function loadConfig(mongoDb) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        mongoDb.collection(_this.confCollection).findOne({
          name: _this.confName
        }).then(function (configuration) {
          resolve(configuration || {});
        }, function (e) {
          reject(e);
        });
      });
    }
  }, {
    key: 'getTypeByProps',
    value: function getTypeByProps(row) {
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
  }, {
    key: 'answerMain',
    value: function answerMain(req, res, next) {
      var _req$session = req.session,
          start = _req$session.start,
          end = _req$session.end,
          idcliente = _req$session.idcliente,
          mandato = _req$session.mandato;

      var aggregateQuery = [
      // Stage 1
      {
        $match: _extends({
          idcliente: idcliente !== 'undefined' && idcliente !== null && idcliente !== '' ? idcliente === null ? { type: 10 } : idcliente : { $exists: false }, // eslint-disable-line
          mandato: mandato !== 'undefined' && mandato !== null && mandato !== '' ? mandato === null ? { type: 10 } : mandato : { $exists: false } }, start && end ? {
          $or: [{
            period: 'alltime'
          }, {
            $and: [{
              'start': { $gte: (0, _moment2.default)(start).toDate() }
            }, {
              'start': { $lt: (0, _moment2.default)(end).toDate() }
            }]
          }]
        } : {})
      },
      // Stage 2
      {
        $sort: {
          period: 1,
          start: 1
        }
      }, {
        $addFields: _defineProperty({}, this.mainProp, { $size: '$' + this.mainProp })
      },
      // Stage 3
      {
        $group: {
          _id: '$period',
          average: {
            $avg: '$' + this.mainProp
          },
          max: {
            $max: '$' + this.mainProp
          },
          stdDev: { $stdDevPop: '$' + this.mainProp },
          dataStart: { $min: '$start' },
          dataEnd: { $max: '$end' },
          data: {
            $push: {
              x: '$start',
              y: '$' + this.mainProp
            }
          }
        }
      }];
      var aggregateOptions = {
        cursor: {
          batchSize: 50
        },
        allowDiskUse: true
      };
      // if (this.debug) console.log('aggregateQuery', JSON.stringify(aggregateQuery));
      req.mongodb.collection('visualivr').aggregate(aggregateQuery, aggregateOptions).toArray().then(function (results) {
        res.json(results.reduce(function (prev, curr) {
          prev[curr._id] = curr;
          return prev;
        }, {}));
      }).catch(function (e) {
        console.error('Error!', e);
        next(e);
      });
    }
  }, {
    key: 'start',
    value: function start(mysql, mongoDb) {
      var _this2 = this;

      console.info('[Visual IVR Sessions] Starting timed operation');
      return new Promise(function (resolve, reject) {
        _this2.loadConfig(mongoDb).then(function (configuration) {
          return Promise.resolve({ mysql: mysql, configuration: configuration });
        }, function (e) {
          return Promise.reject(e);
        }).then( // Get max/min id
        function (_ref) {
          var configuration = _ref.configuration;

          var minId = configuration.maxId || 0;
          var minDate = configuration.maxDate || (0, _moment2.default)('01-01-1970', 'MM-DD-YYYY').toDate();
          return mysql.query('SELECT max(id) as maxId from ' + _this2.logTable).then(function (results) {
            var maxId = results && results[0] ? results[0].maxId : 0;
            return Promise.resolve({ mysql: mysql, configuration: configuration, minId: minId, maxId: maxId, minDate: minDate });
          }, function (e) {
            return Promise.reject(e);
          }).then(function (result) {
            if (!_this2.dateColumn || _this2.dateColumn.length < 1) {
              return Promise.resolve(_extends({}, result, { maxDate: (0, _moment2.default)().toDate() }));
            }
            console.log('This module has a date column!');
            return mysql.query('SELECT max(' + _this2.dateColumn + ') as maxDate from ' + _this2.logTable).then(function (results) {
              var maxDate = results && results[0] ? results[0].maxDate : (0, _moment2.default)('01-01-1970', 'MM-DD-YYYY').toDate();
              return Promise.resolve(_extends({ maxDate: maxDate }, result));
            }, function (e) {
              return Promise.reject(e);
            });
          }, function (e) {
            return Promise.reject(e);
          });
        }, function (e) {
          return Promise.reject(e);
        }).then( // Create and run mysql queries
        function (_ref2) {
          var minId = _ref2.minId,
              maxId = _ref2.maxId,
              minDate = _ref2.minDate,
              maxDate = _ref2.maxDate,
              rest = _objectWithoutProperties(_ref2, ['minId', 'maxId', 'minDate', 'maxDate']);

          var queries = _this2.getQueries(mysql, minId, maxId, minDate, maxDate);
          var getQueryFunctions = queries.map(function (q, pos) {
            return function () {
              // console.log('Query', q);
              console.info('[Visual IVR Sessions] Running mySQL query n. ' + (pos + 1) + '/' + getQueryFunctions.length);
              return mysql.query(q).then(function (results) {
                // console.log('Q', q);
                // console.log('R LEN', results.length);
                return Promise.resolve(results);
              }, function (e) {
                return Promise.reject(e);
              });
            };
          });
          return (0, _es6PromiseSeries2.default)(getQueryFunctions).then(function (arrayOfRowsArray) {
            return Promise.resolve(_extends({ mysql: mysql, minId: minId, maxId: maxId, minDate: minDate, maxDate: maxDate, queries: queries, arrayOfRowsArray: arrayOfRowsArray }, rest));
          }, function (e) {
            return Promise.reject(e);
          });
        }, function (e) {
          return Promise.reject(e);
        }).then( // Run mongodb updates
        function (_ref3) {
          var queries = _ref3.queries,
              arrayOfRowsArray = _ref3.arrayOfRowsArray,
              rest = _objectWithoutProperties(_ref3, ['queries', 'arrayOfRowsArray']);

          var mongoUpsertOps = arrayOfRowsArray.reduce(function (prev, rowsArray, queryPosition) {
            var period = rowsArray[0] ? _this2.getTypeByProps(rowsArray[0]) : null;
            rowsArray.forEach(function (row) {
              // if (this.debug) {
              //   console.log('Row', row);
              // }
              var updateOptions = {
                upsert: true
              };
              var searchDoc = {
                idcliente: { $exists: false },
                mandato: { $exists: false },
                year: { $exists: false },
                quarter: { $exists: false },
                month: { $exists: false },
                week: { $exists: false },
                day: { $exists: false },
                hour: { $exists: false },
                period: period
              };
              var updateDoc = {
                $addToSet: _extends({}, _this2.allVisualIvrIncrementalProps, row.myvalue ? _defineProperty({}, _this2.mainProp, row.myvalue) : {}),
                $set: {
                  period: period
                }
              };
              var keys = ['idcliente', 'mandato', 'year', 'quarter', 'month', 'week', 'day', 'hour'];
              keys.forEach(function (k) {
                if (typeof row[k] !== 'undefined' && row[k] !== null) {
                  if (row[k] === null) {
                    searchDoc[k] = { $type: 10 }; // Search for NULL value
                  } else {
                    searchDoc[k] = row[k];
                  }
                }
              });
              // console.log(searchDoc, updateDoc);
              var start = void 0;
              var end = void 0;
              switch (period) {
                case 'year':
                  {
                    start = (0, _moment2.default)(row.year.toString(), 'YYYY').startOf('year').toDate();
                    end = (0, _moment2.default)(start).endOf('year').toDate();
                    // console.log('row', row);
                    // console.log('searchDoc', searchDoc);
                    // console.log('updateDoc', updateDoc);
                    // console.log('*************************');
                    break;
                  }
                case 'quarter':
                  {
                    start = (0, _moment2.default)(row.year + ' ' + row.quarter, 'YYYY Q').startOf('quarter').toDate();
                    end = (0, _moment2.default)(start).endOf('quarter').toDate();
                    break;
                  }
                case 'month':
                  {
                    start = (0, _moment2.default)(row.year + '-' + row.month, 'YYYY-MM').startOf('month').toDate();
                    end = (0, _moment2.default)(start).endOf('month').toDate();
                    break;
                  }
                case 'week':
                  {
                    start = (0, _moment2.default)(row.year + ' ' + row.week, 'YYYY ww').startOf('week').toDate();
                    end = (0, _moment2.default)(start).endOf('week').toDate();
                    break;
                  }
                case 'day':
                  {
                    start = (0, _moment2.default)(row.year + '-' + row.month + '-' + row.day, 'YYYY-MM-DD').startOf('day').toDate();
                    end = (0, _moment2.default)(start).endOf('day').toDate();
                    break;
                  }
                case 'hour':
                  {
                    start = (0, _moment2.default)(row.year + '-' + row.month + '-' + row.day + ' ' + row.hour, 'YYYY-MM-DD HH').startOf('hour').toDate();
                    end = (0, _moment2.default)(start).endOf('hour').toDate();
                    break;
                  }
                default:
                  {
                    start = (0, _moment2.default)('2000-01-01').toDate();
                    end = (0, _moment2.default)('2100-01-01').toDate();
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
              // if (this.debug) {
              //   console.log('row', row);
              //   console.log('searchDoc', searchDoc);
              //   console.log('updateDoc', updateDoc);
              // }
              // prev.push(
              //   mongoDb.collection(this.targetCollection)
              //     .updateOne(searchDoc, updateDoc, updateOptions)
              //     .then(
              //       (writeOp) => {
              //         // if (writeOp.upsertedCount === 1 && period === 'week') {
              //         //   console.log('Created doc', searchDoc, row, queries[queryPosition]);
              //         // }
              //         if (writeOp.modifiedCount + writeOp.upsertedCount !== 1) {
              //           console.info('[Visual IVR Sessions] Write failed on query', searchDoc, updateDoc, queries[queryPosition], row);
              //         }
              //         return Promise.resolve(writeOp);
              //       },
              //       (e) => Promise.reject(e)
              //     )
              // );
              prev.push([searchDoc, updateDoc, updateOptions, queries[queryPosition], row]);
            });
            return prev;
          }, []);
          console.info('[Visual IVR Sessions] Running ' + mongoUpsertOps.length + ' mongodb upserts');
          return new Promise(function (innerResolve, innerReject) {
            (0, _mapLimit2.default)(mongoUpsertOps, 20, function (_ref5, done) {
              var _ref6 = _slicedToArray(_ref5, 5),
                  searchDoc = _ref6[0],
                  updateDoc = _ref6[1],
                  updateOptions = _ref6[2],
                  mysqlQuery = _ref6[3],
                  row = _ref6[4];

              // console.log('Starting query', searchDoc, updateDoc, updateOptions);
              mongoDb.collection(_this2.targetCollection).updateOne(searchDoc, updateDoc, updateOptions).then(function (writeOp) {
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
              }, function (e) {
                done(e);
              });
            }, function (err) {
              if (err) {
                innerReject(err);
              } else {
                innerResolve(_extends({ mysql: mysql }, rest));
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
        }, function (e) {
          return Promise.reject(e);
        }).then( // Update configuration
        function (_ref7) {
          var configuration = _ref7.configuration,
              maxId = _ref7.maxId,
              minId = _ref7.minId,
              minDate = _ref7.minDate,
              maxDate = _ref7.maxDate,
              rest = _objectWithoutProperties(_ref7, ['configuration', 'maxId', 'minId', 'minDate', 'maxDate']);

          configuration.name = _this2.confName;
          configuration.maxId = maxId;
          configuration.minId = minId;
          configuration.minDate = minDate;
          configuration.maxDate = maxDate;
          configuration.lastRun = new Date();
          return mongoDb.collection(_this2.confCollection).updateOne({
            name: _this2.confName
          }, configuration, {
            upsert: true
          }).then(function () {
            return Promise.resolve(_extends({ configuration: configuration, maxId: maxId, minId: minId }, rest));
          }, function (e) {
            return Promise.reject(e);
          });
        }, function (e) {
          return Promise.reject(e);
        }).then( // Finish
        function () {
          resolve();
        }, function (e) {
          reject(e);
        });
      });
      // console.log('Starting....', mysqlPool);
      // return Promise.resolve();
    }
  }, {
    key: 'getQueries',
    value: function getQueries(mysql, minId, maxId) {
      var baseAndClause = this.getBaseAndClause(mysql, minId, maxId);
      var baseSearch = 'idcontratto as myvalue';
      var baseSelect = 'SELECT ' + baseSearch + ' ';
      var baseFrom = 'FROM ' + this.logTable;
      // const splits = ['', 'idcliente', 'mandato'];
      var subsplits = [{
        group: 'YEAR(data_inserimento)',
        select: 'YEAR(data_inserimento) as year'
      }, {
        group: 'QUARTER(data_inserimento)',
        select: 'QUARTER(data_inserimento) as quarter'
      }, {
        group: 'MONTH(data_inserimento)',
        select: 'MONTH(data_inserimento) as month'
      }, {
        group: 'WEEKOFYEAR(data_inserimento)',
        select: 'WEEKOFYEAR(data_inserimento) as week'
      }, {
        group: 'DAY(data_inserimento)',
        select: 'DAY(data_inserimento) as day'
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
  }]);

  return BaseOperation;
}();

var _default = BaseOperation;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(BaseOperation, 'BaseOperation', 'api-src/timedoperations/baseOperation.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'api-src/timedoperations/baseOperation.js');
}();

;