import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ConfigActions from '../actions/ConfigActions';

class Configurator extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {

    const {actions, columns} = this.props;

    function addColumn() {
      actions.addColumn(columns.length + 1);
    }

    function removeColumn() {
      actions.removeColumn(columns.length - 1);
    }

    return (
      <div className="Configurator">
        <div>Colonnes:</div>
        <button onClick={addColumn}>+</button>
        <button onClick={removeColumn}>-</button>
      </div>
    );
  }
}

Configurator.propTypes = {};

function mapStateToProps(state) {
  return {
    columns: state.columns
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ConfigActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Configurator);
