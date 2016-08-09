import React, { Component, PropTypes } from 'react';
import { HeaderComponent, VideoComponent, OffersComponent, FooterComponent } from 'components';

class Home extends Component {
  static propTypes = {
    actions: PropTypes.object,
  };

  render() {
    const { actions } = this.props;
    return (
      <div>
        <HeaderComponent actions={actions} doScroll />
        <VideoComponent />
        <h1> Home page</h1>
        <OffersComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default Home;
