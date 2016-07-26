import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import Immutable from 'immutable';
import configureStore from './store/configureStore';
import { Root } from 'containers';

((window) => {
  const initialState = window.__INITIAL_STATE__ && Immutable.fromJS(window.__INITIAL_STATE__);
  const store = configureStore(initialState);
  let app = document.getElementById('react-view');
  if (!app) {
    app = document.createElement('div');
    app.id = 'react-view';
    window.document.body.appendChild(app);
  }
  render(<Root store={store} />, app);
})(window);
