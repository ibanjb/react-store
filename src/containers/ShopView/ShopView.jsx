import React, { Component, PropTypes } from 'react';
import { HeroComponent } from 'components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';


export class ShopView extends Component {
  static propTypes = {
    actions: PropTypes.object,
  };

  _renderToolbar() {
    return (
      <div>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text="Toolbar group" />
          </ToolbarGroup>
        </Toolbar>
        <HeroComponent />
      </div>
    );
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          {this._renderToolbar()}
        </div>
      </MuiThemeProvider>
    );
  }
}
