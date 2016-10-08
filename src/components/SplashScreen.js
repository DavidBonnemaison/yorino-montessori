import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Configurator from './Configurator';
import * as AppActions from '../actions/AppActions';


class SplashScreen extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    const {actions} = this.props;

    console.log(actions.playGame);

    function playGame() {
      actions.playGame();
    }

    return (
      <div className="SplashScreen">
        SPLASH
        <Configurator />
        <button onClick={playGame}>START PLAYING</button>
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
)(SplashScreen);
