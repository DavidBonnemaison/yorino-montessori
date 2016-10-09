import React, { Component, PropTypes } from 'react';
import { CaseUnits, CaseTens, CaseHundreds, CaseThousands } from './Case.js';
import { UNITS, TENS, HUNDREDS, THOUSANDS } from './../constants/ColumnTypes';
import classnames from 'classnames';

export default class Column extends Component {
  constructor(props, context) {
    super(props, context);
  }

  setCaseValue(number, type) {
    switch (type) {
      case UNITS :
        return number;
      case TENS:
        return number * 10;
      case HUNDREDS:
        return number * 100;
      case THOUSANDS:
        return number * 1000;
      default:
        return number;
    }
  }

  render() {
    const { cases, type, nbCol } = this.props;

    function buildCases(CaseProp) {
      let CaseType;
      switch (type) {
        case UNITS:
          CaseType = CaseUnits;
          break;
        case TENS:
          CaseType = CaseTens;
          break;
        case HUNDREDS:
          CaseType = CaseHundreds;
          break;
        case THOUSANDS:
          CaseType = CaseThousands;
          break;
        default :
          break;
      }
      return (
        <CaseType
          key={CaseProp.id}
          value={this.setCaseValue(CaseProp.number, type)}
          type={type}
          number={CaseProp.number}
        />
      );
    }

    const classNames = classnames({
      Column: true,
      [`Column--${nbCol}`]: true,
      [`Column--${type}`]: true
    });

    return (
      <div className={classNames}>
        {cases.map(buildCases)}
      </div>
    );
  }
}
Column.propTypes = {
  cases: PropTypes.array.isRequired
};
