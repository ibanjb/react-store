import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'actions';
import { ShopView } from '../ShopView';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class ShopActions extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { actions } = this.props;
    return (
      <div>
        <ShopView actions={actions} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(actionCreators.appActionCreators, dispatch),
  };
}

function mapStateToProps(state = {}) {
  const { app: actions } = state.toJS && state.toJS();
  return { actions };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopActions);
