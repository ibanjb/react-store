import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import { red500, grey50 } from 'material-ui/styles/colors';
import { IndexLink, Link } from 'react-router';

import './HeaderComponent.scss';

export class HeaderComponent extends Component {

  static propTypes = {
    actions: PropTypes.object,
  };

  constructor() {
    super();
    this.state = {
      backgroundColor: 'transparent !important',
      openMenuDrawer: false,
    };
    this.changeMenuBackgroundColor = this.changeMenuBackgroundColor.bind(this);
    this.handleDrawerVisibility = this.handleDrawerVisibility.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.changeMenuBackgroundColor);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.changeMenuBackgroundColor);
  }

  changeMenuBackgroundColor(event) {
    const scrollTop = event.srcElement.body.scrollTop;
    const itemTranslate = Math.min(0, scrollTop / 3 - 60);
    if (itemTranslate === 0) {
      this.setState({ backgroundColor: '#bdbdbd' });
    } else {
      this.setState({ backgroundColor: 'transparent' });
    }
  }

  handleDrawerVisibility() {
    const { openMenuDrawer: visible } = this.state || false;
    this.setState({ openMenuDrawer: !visible });
  }
  render() {
    const { backgroundColor } = this.state;
    return (
      <div className="HeaderComponent">
        <div>
          <AppBar
            title="Menu"
            onLeftIconButtonTouchTap={this.handleDrawerVisibility}
            style={{ 'background-color': backgroundColor }}
            iconElementRight={
              <div>
                <IconButton tooltip="Your account">
                  <ActionAccountCircle primary color={grey50} hoverColor={red500} />
                </IconButton>
                <Badge
                  badgeContent={10}
                  primary
                  className="HeaderComponent--Badge"
                >
                  <IconButton tooltip="Shopping cart">
                    <ActionShoppingCart color={grey50} hoverColor={red500} />
                  </IconButton>
                </Badge>
              </div>}
          />
        </div>
        <Drawer
              docked={false}
              width={200}
              open={this.state.openMenuDrawer}
              onRequestChange={this.handleDrawerVisibility}
        >
          <img src="http://famouslogos.net/images/fashion-logos/abercrombie-and-fitch-logo.jpg" alt="todo" />
          <MenuItem>
            <IndexLink to="/">Home</IndexLink>
          </MenuItem>
          <MenuItem>
            <Link to="/product">Product</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login">Login</Link>
          </MenuItem>
          <MenuItem>Shop</MenuItem>
          <MenuItem>Lookbook</MenuItem>
          <MenuItem>Blog</MenuItem>
          <MenuItem>About</MenuItem>
        </Drawer>
      </div>
    );
  }
}
export default HeaderComponent;
