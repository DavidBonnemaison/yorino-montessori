import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Configurator from './Configurator';
import * as AppActions from '../actions/AppActions';


class Params extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    const {actions} = this.props;

    function playGame() {
      actions.playGame();
    }

    return (
      <div className="Params">
        PARAMS
        <Configurator />
        <button onClick={playGame}>RESUME PLAYING</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    app: state.app
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Params);
