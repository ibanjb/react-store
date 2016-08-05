import React, { Component, PropTypes } from 'react';
import { HeaderComponent } from 'components';

export class ShopView extends Component {
  static propTypes = {
    actions: PropTypes.object,
  };

  render() {
    return (
      <div>
        <HeaderComponent />
      </div>
    );
  }
}
