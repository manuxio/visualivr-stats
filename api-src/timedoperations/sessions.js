import BaseOperation from './baseOperation';

class sessions extends BaseOperation {
  start(mysqlPool, mongoDb) {
    console.log('Starting....', mysqlPool);
    return Promise.resolve();
  }
}

export default sessions;
