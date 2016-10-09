import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Configurator from './Configurator';
import * as AppActions from '../actions/AppActions';


class Params extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { actions } = this.props;

    function playGame() {
      actions.playGame();
    }

    return (
      <div className="Params">
        <h1 className="Params-title">Paramètres</h1>
        <Configurator />
        <button className="Params-resume" onClick={playGame}>
          Retour au jeu
        </button>
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

Params.propTypes = {
  actions: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Params);
