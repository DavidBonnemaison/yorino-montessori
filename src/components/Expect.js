import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ExpectUnits, ExpectTens, ExpectHundreds, ExpectThousands } from './ExpectCase';
import { UNITS, TENS, HUNDREDS, THOUSANDS } from './../constants/ColumnTypes';
import * as ExpectActions from '../actions/ExpectActions';

function select(expectations, wantedType) {
  return expectations ? expectations
    .filter(expect => expect.type === wantedType)
    .map(expect => expect.value)
    : undefined;
}

function mapStateToProps(state) {
  return {
    expect: state.expect,
    columns: state.columns
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ExpectActions, dispatch)
  };
}

class Expect extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { expect, actions, columns } = this.props;

    function handleGuessing(guessing, type) {
      actions.guessing(guessing, type);
    }

    function buildColumn(column) {
      let ExpectType;
      switch (column.type) {
        case UNITS:
          ExpectType = ExpectUnits;
          break;
        case TENS:
          ExpectType = ExpectTens;
          break;
        case HUNDREDS:
          ExpectType = ExpectHundreds;
          break;
        case THOUSANDS:
          ExpectType = ExpectThousands;
          break;
        default:
          break;
      }

      return (
        <ExpectType
          type={column.type}
          key={column.type}
          expectNumber={select(expect, column.type)}
          handleGuessing={handleGuessing}
        />
      );
    }

    return (
      <div className="Expect">
        {columns.map(buildColumn)}
      </div>
    );
  }
}

Expect.propTypes = {
  expect: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expect);
