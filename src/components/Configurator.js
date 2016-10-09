import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ConfigActions from '../actions/ConfigActions';

class Configurator extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { actions, columns } = this.props;

    function addColumn() {
      actions.addColumn(columns.length + 1);
    }

    function removeColumn() {
      actions.removeColumn(columns.length - 1);
    }

    return (
      <div className="Configurator">
        <button className="Configurator-button" onClick={removeColumn}>-</button>
        <div className="Configurator-text">{columns.length} colonnes</div>
        <button className="Configurator-button" onClick={addColumn}>+</button>
      </div>
    );
  }
}

Configurator.propTypes = {
  actions: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    columns: state.columns
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ConfigActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Configurator);
