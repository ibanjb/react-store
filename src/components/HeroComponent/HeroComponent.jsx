import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Dialog from 'material-ui/Dialog';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Snackbar from 'material-ui/Snackbar';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import './HeroComponent.scss';

export class HeroComponent extends Component {
  static propTypes = {
    store: PropTypes.object,
  };

  constructor() {
    super();
    this.state = {
      openDialog: false,
      openDrawer: false,
      openSnackbar: false,
      controlledDate: '31/12/2016',
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDialog = this.handleDialog.bind(this);
    this.handleSnackbar = this.handleSnackbar.bind(this);
  }

  handleDateChange = (event, date) => {
    this.setState({ controlledDate: !date });
  };

  handleToggle = () => {
    const { openDrawer: showed } = this.state;
    this.setState({ openDrawer: !showed });
  };

  handleDialog = () => {
    const { openDialog: showed } = this.state;
    this.setState({ openDialog: !showed });
  };

  handleSnackbar = () => {
    const { openSnackbar: snack } = this.state;
    this.setState({ openSnackbar: !snack });
  }

  render() {
    const { openDrawer } = this.state;
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.handleDialog}
      />,
      <FlatButton
        label="Submit"
        primary
        keyboardFocused
        onTouchTap={this.handleDialog}
      />,
    ];
    return (
      <div className="HeroComponent">
        <RaisedButton
          className="RaisedButton"
          backgroundColor="#0A3C56"
          labelColor="#FFF"
          label="Show menu"
          onClick={this.handleToggle}
        />
        <br />

        <DatePicker autoOk floatingLabelText="datepicker:" onChange={this.handleDateChange} />
        <Chip className="chip" >
          <Avatar size={32} >
            DATE
          </Avatar>
          {this.state.controlledDate}
        </Chip>
        <br />
        <Drawer open={openDrawer}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        <br />
        <TimePicker hintText="timepicker:" />
        <br />
        <RaisedButton
          className="RaisedButton"
          backgroundColor="#0A3C56"
          labelColor="#FFF"
          label="Show dialog"
          onClick={this.handleDialog}
        />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          open={this.state.openDialog}
          onRequestClose={this.handleDialog}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
        <br />
        <RaisedButton
          className="RaisedButton"
          backgroundColor="#0A3C56"
          labelColor="#FFF"
          label="Show snackbar"
          onClick={this.handleSnackbar}
        />
        <Snackbar
          open={this.state.openSnackbar}
          message="Event added to your calendar"
          autoHideDuration={4000}
          onRequestClose={this.handleSnackbar}
        />
        <br />
      </div>
    );
  }
}
export default HeroComponent;
