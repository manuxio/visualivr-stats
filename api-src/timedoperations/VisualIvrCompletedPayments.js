import BaseOperation from './baseOperation';

class VisualIvrCompletedPayments extends BaseOperation {
  constructor(props) {
    super(props);
    this.name = 'Visual IVR Completed Payments indexer';
    this.logTable = 'onlinePaymentTransactions';
    this.confCollection = 'configurations';
    this.targetCollection = 'visualivr';
    // this.searchString = 'Codice verificato per record %';
    this.confName = 'visualIvrCompletedPaymentTransactionsIndexer';
    this.dateColumn = 'updatetime';
    this.mainProp = 'paymentCompleted';
    this.delay = 30000;
    this.interval = 100000;
    // this.debug = true;
  }

  getBaseAndClause(mysql, minId, maxId, minDate, maxDate) {
    return `idcontratto is not null AND completed = 1 AND ${this.dateColumn} > ${mysql.escape(minDate)} AND ${this.dateColumn} <= ${mysql.escape(maxDate)}`;
  }

  getQueries(mysql, minId, maxId, minDate, maxDate) {
    if (this.debug) {
      console.log('minId', minId, 'maxId', maxId, 'minDate', minDate, 'maxDate', maxDate);
    }
    const baseAndClause = this.getBaseAndClause(mysql, minId, maxId, minDate, maxDate);
    const baseSearch = 'idcontratto as myvalue';
    const baseSelect = `SELECT ${baseSearch} `;
    const baseFrom = `FROM ${this.logTable}`;
    // const splits = ['', 'idcliente', 'mandato'];
    const subsplits = [
      {
        group: 'YEAR(updatetime)',
        select: 'YEAR(updatetime) as year'
      },
      {
        group: 'QUARTER(updatetime)',
        select: 'QUARTER(updatetime) as quarter'
      },
      {
        group: 'MONTH(updatetime)',
        select: 'MONTH(updatetime) as month'
      },
      {
        group: 'WEEKOFYEAR(updatetime)',
        select: 'WEEKOFYEAR(updatetime) as week'
      },
      {
        group: 'DAY(updatetime)',
        select: 'DAY(updatetime) as day'
      },
      {
        group: 'HOUR(updatetime)',
        select: 'HOUR(updatetime) as hour'
      }
    ];
    const queries = [];
    // Base queries
    queries.push(`${baseSelect} ${baseFrom} WHERE ${baseAndClause} GROUP BY idcontratto`);
    let subSelect = '';
    let subGroup = 'GROUP BY idcontratto';
    subsplits.forEach((split) => {
      subSelect += `, ${split.select}`;
      subGroup += `, ${split.group}`;
      queries.push(`${baseSelect} ${subSelect} ${baseFrom} WHERE ${baseAndClause} ${subGroup} `);
    });

    // Split on idcliente
    queries.push(`${baseSelect}, idcliente ${baseFrom} WHERE ${baseAndClause} GROUP BY idcontratto, idcliente `);
    subSelect = '';
    subGroup = 'GROUP BY idcontratto, idcliente';
    subsplits.forEach((split) => {
      subSelect += `, ${split.select}`;
      subGroup += `, ${split.group}`;
      queries.push(`${baseSelect}, idcliente ${subSelect} ${baseFrom} WHERE ${baseAndClause} ${subGroup} `);
    });

    // Split on mandato
    queries.push(`${baseSelect}, idcliente, mandato ${baseFrom} WHERE ${baseAndClause} GROUP BY idcontratto, idcliente, mandato `);
    subSelect = '';
    subGroup = 'GROUP BY idcontratto, idcliente, mandato';
    subsplits.forEach((split) => {
      subSelect += `, ${split.select}`;
      subGroup += `, ${split.group}`;
      queries.push(`${baseSelect}, idcliente, mandato ${subSelect} ${baseFrom} WHERE ${baseAndClause} ${subGroup} `);
    });
    return queries;
  }

  getUrls() {
    return [
      {
        base: 'vivr/completedpayments',
        method: 'get'
      },
      {
        base: 'vivr/completedpaymentsalltime',
        method: 'get'
      }
    ];
  }

  respond(req, res, next, urlDef) {
    switch (urlDef.base) {
      case 'vivr/completedpayments': {
        this.answerMain(req, res, next);
        break;
      }
      case 'vivr/completedpaymentsalltime': {
        const {
          idcliente,
          mandato
        } = req.session;
        const searchDoc = {
          period: 'alltime'
        };
        if (idcliente) {
          searchDoc.idcliente = idcliente;
        }
        if (mandato) {
          searchDoc.mandato = mandato;
        }
        req.mongodb.collection('visualivr')
          .findOne(searchDoc)
          .then(
            (doc) => {
              if (!doc) {
                res.json('');
              } else {
                res.json(doc[this.mainProp].length);
              }
            },
            (e) => {
              next(e);
            }
          );
        break;
      }
      default: {
        next();
      }
    }
  }
}

export default VisualIvrCompletedPayments;
