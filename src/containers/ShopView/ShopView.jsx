import React, { Component, PropTypes } from 'react';
import { HeaderComponent, VideoComponent, FooterComponent } from 'components';
import './ShopView.scss';

export class ShopView extends Component {
  static propTypes = {
    actions: PropTypes.object,
  };

  render() {
    return (
      <div>
        <HeaderComponent />
        <VideoComponent />
        <FooterComponent />
      </div>
    );
  }
}
