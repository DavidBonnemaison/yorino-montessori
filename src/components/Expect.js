import React, {Component, PropTypes} from 'react';
import {ExpectUnits, ExpectTens, ExpectHundreds, ExpectThousands} from './ExpectCase';

function select(expectations, wantedType) {
  return expectations ? expectations.filter((expect)=> {
    return expect.type === wantedType;
  }).map((expect) => {
    return expect.value;
  }) : undefined;
}

export default class Expect extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {expect} = this.props;
    return (
      <div className='Expect'>
        <ExpectHundreds type='HUNDREDS' expectNumber={select(expect,'HUNDREDS')}/>
        <ExpectTens type='TENS' expectNumber={select(expect,'TENS')}/>
        <ExpectUnits type='UNITS' expectNumber={select(expect,'UNITS')}/>
      </div>
    );
  }
}

Expect.propTypes = {};
