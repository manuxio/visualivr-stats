import article from './reducers/article';
import dataset from './reducers/dataset';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  article,
  dataset,
  router: routerReducer
});
