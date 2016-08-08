import React, { Component } from 'react';
import { HeaderComponent, FooterComponent } from 'components';

class NotFound extends Component {

  render() {
    return (
      <div>
        <HeaderComponent />
        <h1>NOT FOUND!</h1>
        <FooterComponent />
      </div>
    );
  }
}

export default NotFound;
