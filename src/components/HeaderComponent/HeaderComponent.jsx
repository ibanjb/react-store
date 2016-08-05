import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import DatePicker from 'material-ui/DatePicker';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import './HeaderComponent.scss';

export class HeaderComponent extends Component {

  static propTypes = {
    actions: PropTypes.object,
  };

  constructor() {
    super();
    this.state = {
      openMenuDrawer: false,
    };
    this.handleDrawerVisiblity = this.handleDrawerVisiblity.bind(this);
  }

  handleDrawerVisiblity() {
    const { openMenuDrawer: visible } = this.state || false;
    this.setState({ openMenuDrawer: !visible });
  }
  render() {
    return (
      <div>
        <div>
          <AppBar
            title="Title"
            onLeftIconButtonTouchTap={this.handleDrawerVisiblity}
          />
        </div>
        <Drawer open={this.state.openMenuDrawer}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        <div>
          <DatePicker hintText="Select a date" />
        </div>
      </div>
    );
  }
}
export default HeaderComponent;