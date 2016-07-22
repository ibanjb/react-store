import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'lib/promiseMiddleware';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware
)(createStore);

export default (initialState) => createStoreWithMiddleware(rootReducer, initialState);
