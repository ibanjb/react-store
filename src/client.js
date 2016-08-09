import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createStore from './redux/createStore';
import getRoutes from './routes.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const store = createStore();
// use 'browserHistory' to server side rendering, hashHistory for development environment
const history = syncHistoryWithStore(hashHistory, store);

let component = <Router history={history}>{getRoutes()}</Router>;
if (process.env.NODE_ENV === 'development') {
  const DevTools = require('./containers/DevTools').default;

  component = (
    <MuiThemeProvider>
      <div>
        {component}
        <DevTools />
      </div>
    </MuiThemeProvider>
  );
}
ReactDOM.render(
  <Provider key="provider" store={store}>
    {component}
  </Provider>,
  document.getElementById('react-view')
);
