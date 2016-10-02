import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ExpectUnits, ExpectTens, ExpectHundreds, ExpectThousands} from './ExpectCase';
import * as ExpectActions from '../actions/ExpectActions';

function select(expectations, wantedType) {
  return expectations ? expectations.filter((expect)=> {
    return expect.type === wantedType;
  }).map((expect) => {
    return expect.value;
  }) : undefined;
}

function mapStateToProps(state) {
  return {
    expect: state.expect,
    guesses: state.guesses
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

    console.log('EXPECT BEING RENDERED');

    const {expect, actions, guesses} = this.props;

    function handleGuessing(guessing, type) {
      actions.guessing(guessing, type)
    }

    return (
      <div className='Expect'>
        <ExpectHundreds
          type='HUNDREDS'
          expectNumber={select(expect,'HUNDREDS')}
          handleGuessing={handleGuessing}
        />
        <ExpectTens
          type='TENS'
          expectNumber={select(expect,'TENS')}
          handleGuessing={handleGuessing}/>
        <ExpectUnits
          type='UNITS'
          expectNumber={select(expect,'UNITS')}
          handleGuessing={handleGuessing}/>
      </div>
    );
  }
}

Expect.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expect)
