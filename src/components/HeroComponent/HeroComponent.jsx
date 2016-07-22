import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './HeroComponent.scss';

export class HeroComponent extends Component {
  static propTypes = {
    store: PropTypes.object,
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="HeroComponent">
          <RaisedButton
                        className="RaisedButton"
                        backgroundColor="#0A3C56"
                        labelColor="#FFF"
                        label="raised button"
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default HeroComponent;
