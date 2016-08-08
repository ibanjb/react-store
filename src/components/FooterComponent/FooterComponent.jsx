import React, { Component, PropTypes } from 'react';
import './FooterComponent.scss';

export class FooterComponent extends Component {

  static propTypes = {
    actions: PropTypes.object,
  };


  render() {
    return (
      <div className="FooterComponent">
        <p>This is the footer</p>
      </div>
    );
  }
}
export default FooterComponent;
