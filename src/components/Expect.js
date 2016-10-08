import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ExpectUnits, ExpectTens, ExpectHundreds, ExpectThousands} from './ExpectCase';
import * as ExpectActions from '../actions/ExpectActions';

function select(expectations, wantedType) {
  return expectations ? expectations.filter(expect => {
    return expect.type === wantedType;
  }).map(expect => {
    return expect.value;
  }) : undefined;
}

function mapStateToProps(state) {
  return {
    expect: state.expect,
    guesses: state.guesses,
    columns: state.columns
  }
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

    const {expect, actions, columns} = this.props;

    function handleGuessing(guessing, type) {
      actions.guessing(guessing, type)
    }

    function buildColumn(column) {
      let ExpectType;
      switch (column.type) {
        case 'UNITS':
          ExpectType = ExpectUnits;
          break;
        case 'TENS':
          ExpectType = ExpectTens;
          break;
        case 'HUNDREDS':
          ExpectType = ExpectHundreds;
          break;
        case 'THOUSANDS':
          ExpectType = ExpectThousands;
          break;
        default:
          break;
      }

      return (
        <ExpectType
          type={column.type}
          key={column.type}
          expectNumber={select(expect,column.type)}
          handleGuessing={handleGuessing}
        />
      )
    }

    return (
      <div className='Expect'>
        {columns.map(buildColumn)}
      </div>
    );
  }
}

Expect.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expect)
