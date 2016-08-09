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

// use classname module to merge styles getted from properties
// usage:
//
// a) include classname module and give an alias to the scss as styles.
//    Use className={styles.cssclass} instead className="cssclass"
//
// import cx from 'classnames';
// import styles from  './HeaderComponent.scss';
//
// b) create a prop called "clasaName" to receive css class to override the default
//
//   static propTypes = {
//     className: PropTypes.string,
//   }
//
//   static defaultProps = {
//     className: '',
//   };
//
// c) replace the className={styles.cssclass} by:
//
//  <div className={ cx(className, 'cssclass') }  />
//

import cx from 'classnames';
import './HeaderComponent.scss';

export class HeaderComponent extends Component {

  static propTypes = {
    actions: PropTypes.object,
    doScroll: PropTypes.bool,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
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
    const { doScroll } = this.props || false;
    if (doScroll) {
      window.addEventListener('scroll', this.changeMenuBackgroundColor);
    }
  }

  componentWillUnmount() {
    const { doScroll } = this.props || false;
    if (doScroll) {
      window.removeEventListener('scroll', this.changeMenuBackgroundColor);
    }
  }

  changeMenuBackgroundColor(event) {
    const scrollTop = event.srcElement.body.scrollTop;
    if (scrollTop > 0) {
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
    const { className } = this.props;
    const { backgroundColor: backColor } = this.state;
    return (
      <div className={cx(className, 'HeaderComponent')}>
        <div>
          <AppBar
            title="Menu"
            onLeftIconButtonTouchTap={this.handleDrawerVisibility}
            style={{ transition: 'background-color 500ms linear', backgroundColor: backColor }}
            style={{ transition: 'background-color 500ms linear', backgroundColor: backColor }}
            iconElementRight={
              <div>
                <IconButton tooltip="Your account">
                  <ActionAccountCircle
                    primary
                    color={grey50}
                    hoverColor={red500}
                  />
                </IconButton>
                <Badge
                  badgeContent={10}
                  primary
                  className="HeaderComponent--Badge"
                >
                  <IconButton tooltip="Shopping cart">
                    <ActionShoppingCart
                      color={grey50}
                      hoverColor={red500}
                    />
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
          <IndexLink to="/">
            <MenuItem>
              Home
            </MenuItem>
          </IndexLink>
          <Link to="/shop">
            <MenuItem>
              Shop
            </MenuItem>
          </Link>
          <Link to="/product">
            <MenuItem>
              Product
            </MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>
              Login
            </MenuItem>
          </Link>
        </Drawer>
      </div>
    );
  }
}
export default HeaderComponent;
