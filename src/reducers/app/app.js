import Immutable from 'immutable';
import uuid from 'node-uuid';
import createReducer from 'lib/createReducer';
import * as actions from 'constants/actionTypes';

/** Initial/Default state
 * @type {Map|Immutable.Map|any}
 */

const initialState = new Immutable.Map({
  uuid: uuid.v4(),
  loginView: true,
  productView: true,
  mainView: false,
});

export default createReducer(initialState, {
  [actions.GO_TO_LOGIN]: (state) => state
    .set('loginView', true).set('productView', false).set('mainView', false),

  [actions.GO_TO_PRODUCT]: (state) => state
    .set('loginView', false).set('productView', true).set('mainView', false),

  [actions.GO_TO_MAIN]: (state) => state
    .set('loginView', false).set('productView', false).set('mainView', true),
});
