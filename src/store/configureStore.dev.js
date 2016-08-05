import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'lib/promiseMiddleware';
import { persistState } from 'redux-devtools';
import rootReducer from 'reducers';
import DevTools from 'containers/DevTools';

const finalCreateStore = compose(
    DevTools.instrument(),
    persistState(
        window.location.href.match(
            /[?&]debug_session=([^&#]+)\b/
        )
    )
)(createStore);

const createStoreWithMiddleware = applyMiddleware(
    promiseMiddleware
)(finalCreateStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
    store.replaceReducer(require('../reducers').default)
  );
  }

  return store;
}
