import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import DevTools from '../DevTools';
import ShopActions from '../ShopActions';

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object,
  };

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <ShopActions />
          <DevTools />
        </div>
      </Provider>
    );
  }
}
