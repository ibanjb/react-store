import React, { Component, PropTypes } from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import './FooterComponent.scss';

export class FooterComponent extends Component {

  static propTypes = {
    actions: PropTypes.object,
  };


  render() {
    // TODO. Remains to develop this component
    const style = {
      marginLeft: 20,
    };
    return (
      <div>
        <Paper zDepth={2}>
          <TextField hintText="todo" style={style} underlineShow={false} />
          <Divider />
          <TextField hintText="todo" style={style} underlineShow={false} />
          <Divider />
          <TextField hintText="todo" style={style} underlineShow={false} />
          <Divider />
          <TextField hintText="todo" style={style} underlineShow={false} />
          <Divider />
          <TextField hintText="todo" style={style} underlineShow={false} />
          <Divider />
          <TextField hintText="todo" style={style} underlineShow={false} />
          <Divider />
          <TextField hintText="todo" style={style} underlineShow={false} />
          <Divider />
          <TextField hintText="todo" style={style} underlineShow={false} />
          <Divider />
          <TextField hintText="todo" style={style} underlineShow={false} />
          <Divider />
          <DatePicker hintText="Select a date" />
        </Paper>

      </div>
    );
  }
}
export default FooterComponent;
