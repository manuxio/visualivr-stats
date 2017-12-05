import {
  ASYNC_START,
  DATASET_CHANGE
} from '../constants/actionTypes';

export default (state = {}, action) => {
  console.log('Action', action);
  switch (action.type) {
    case ASYNC_START:
      if (action.subtype === DATASET_CHANGE) {
        return { ...state, changing: true };
      }
      return state;
    default:
      return state;
  }
};
