import React, { Component, PropTypes } from 'react';
import { HeaderComponent, FooterComponent } from 'components';

class Login extends Component {
  static propTypes = {
    actions: PropTypes.object,
  };

  render() {
    const { actions } = this.props;
    return (
      <div>
        <HeaderComponent actions={actions} doScroll={false} />
        <br />
        <br />
        <br />
        <h1>Login page</h1>
        <FooterComponent />
      </div>
    );
  }
}

export default Login;
