import BaseOperation from './baseOperation';

class VisualIvrSessions extends BaseOperation {
  constructor(props) {
    super(props);
    this.name = 'Visual IVR Verified Codes indexer';
    this.logTable = 'online_payment_logs';
    this.confCollection = 'configurations';
    this.targetCollection = 'visualivr';
    this.searchString = 'Codice verificato per record %';
    this.confName = 'visualIvrVerifiedCodes';
    this.mainProp = 'verifiedCodes';
    this.delay = 20000;
    this.interval = 100000;
  }

  getBaseAndClause(mysql, minId, maxId) {
    return `idcontratto is not null AND note LIKE ${mysql.escape(this.searchString)} AND id > ${mysql.escape(minId)} AND id <= ${mysql.escape(maxId)}`;
  }

  getUrls() {
    return [
      {
        base: 'vivr/verifiedcodes',
        method: 'get'
      },
      {
        base: 'vivr/verifiedcodesalltime',
        method: 'get'
      }
    ];
  }

  respond(req, res, next, urlDef) {
    switch (urlDef.base) {
      case 'vivr/verifiedcodes': {
        this.answerMain(req, res, next);
        break;
      }
      case 'vivr/verifiedcodesalltime': {
        const {
          idcliente,
          mandato
        } = req.session;
        const searchDoc = {
          period: 'alltime',
          idcliente: { $exists: false },
          mandato: { $exists: false }
        };
        if (idcliente) {
          searchDoc.idcliente = idcliente;
        }
        if (mandato) {
          searchDoc.mandato = mandato;
        }
        console.log('SearchDoc', searchDoc);
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
