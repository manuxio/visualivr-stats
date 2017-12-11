import BaseOperation from './baseOperation';

class VisualIvrSessions extends BaseOperation {
  constructor(props) {
    super(props);
    this.name = 'Visual IVR Sessions indexer';
    this.logTable = 'online_payment_logs';
    this.confCollection = 'configurations';
    this.targetCollection = 'visualivr';
    this.searchString = 'Accesso con codice da url';
    this.confName = 'visualIvrSessions';
    this.mainProp = 'sessions';
  }

  getQueries(mysql, minId, maxId) {
    const baseAndClause = `idcontratto is not null AND note = ${mysql.escape(this.searchString)} AND id > ${mysql.escape(minId)} AND id <= ${mysql.escape(maxId)}`;
    const baseSearch = 'idcontratto as myvalue';
    const baseSelect = `SELECT ${baseSearch} `;
    const baseFrom = `FROM ${this.logTable}`;
    // const splits = ['', 'idcliente', 'mandato'];
    const subsplits = [
      {
        group: 'YEAR(data_inserimento)',
        select: 'YEAR(data_inserimento) as year'
      },
      {
        group: 'QUARTER(data_inserimento)',
        select: 'QUARTER(data_inserimento) as quarter'
      },
      {
        group: 'MONTH(data_inserimento)',
        select: 'MONTH(data_inserimento) as month'
      },
      {
        group: 'WEEKOFYEAR(data_inserimento)',
        select: 'WEEKOFYEAR(data_inserimento) as week'
      },
      {
        group: 'DAY(data_inserimento)',
        select: 'DAY(data_inserimento) as day'
      }
    ];
    const queries = [];
    // Base queries (1-6)
    queries.push(`${baseSelect} ${baseFrom} WHERE ${baseAndClause} GROUP BY idcontratto`);
    let subSelect = '';
    let subGroup = 'GROUP BY idcontratto';
    subsplits.forEach((split) => {
      subSelect += `, ${split.select}`;
      subGroup += `, ${split.group}`;
      queries.push(`${baseSelect} ${subSelect} ${baseFrom} WHERE ${baseAndClause} ${subGroup}`);
    });

    // Split on idcliente (7-12)
    queries.push(`${baseSelect}, idcliente ${baseFrom} WHERE ${baseAndClause} GROUP BY idcontratto, idcliente`);
    subSelect = '';
    subGroup = 'GROUP BY idcontratto, idcliente';
    subsplits.forEach((split) => {
      subSelect += `, ${split.select}`;
      subGroup += `, ${split.group}`;
      queries.push(`${baseSelect}, idcliente ${subSelect} ${baseFrom} WHERE ${baseAndClause} ${subGroup}`);
    });

    // Split on mandato (13-18)
    queries.push(`${baseSelect}, idcliente, mandato ${baseFrom} WHERE ${baseAndClause} GROUP BY idcontratto, idcliente, mandato`);
    subSelect = '';
    subGroup = 'GROUP BY idcontratto, idcliente, mandato';
    subsplits.forEach((split) => {
      subSelect += `, ${split.select}`;
      subGroup += `, ${split.group}`;
      queries.push(`${baseSelect}, idcliente, mandato ${subSelect} ${baseFrom} WHERE ${baseAndClause} ${subGroup}`);
    });
    return queries;
  }

  getUrls() {
    return [
      {
        base: 'vivr/openedfiles',
        method: 'get'
      }
    ];
  }

  respond(req, res, next, urlDef) {
    switch (urlDef.base) {
      case 'vivr/openedfiles': {
        this.answerMain(req, res, next);
        break;
      }
      default: {
        next();
      }
    }
  }
}

export default VisualIvrSessions;
