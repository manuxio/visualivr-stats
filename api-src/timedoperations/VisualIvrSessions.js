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

  getBaseAndClause(mysql, minId, maxId) {
    return `idcontratto is not null AND note = ${mysql.escape(this.searchString)} AND id > ${mysql.escape(minId)} AND id <= ${mysql.escape(maxId)}`;
  }

  getUrls() {
    return [
      {
        base: 'vivr/openedfiles',
        method: 'get'
      },
      {
        base: 'vivr/openedfilesalltime',
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
      case 'vivr/openedfilesalltime': {
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

export default VisualIvrSessions;
