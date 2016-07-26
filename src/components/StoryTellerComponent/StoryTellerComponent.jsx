import React, { Component, PropTypes } from 'react';
import './StoryTellerComponent.scss';

export class StoryTellerComponent extends Component {
  static propTypes = {
    store: PropTypes.object,
  };

  render() {
    return (
      <div className="StoryTellerComponent">
        todo
      </div>
    );
  }
}

export default StoryTellerComponent;
