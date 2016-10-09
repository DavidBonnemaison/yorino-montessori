import React, {Component, PropTypes} from 'react';
import {CaseUnits, CaseTens, CaseHundreds, CaseThousands} from './Case.js';

export default class Column extends Component {
  constructor(props, context) {
    super(props, context);
  }

  setCaseValue(number, type) {
    switch (type) {
      case 'UNITS' :
        return number;
        break;
      case 'TENS':
        return number * 10;
        break;
      case 'HUNDREDS':
        return number * 100;
        break;
      case 'THOUSANDS':
        return number * 1000;
        break;
      default:
        return number;
    }
  }

  render() {
    const {cases, type} = this.props;
    return (
      <div className="Column">
        {cases ? cases.map(CaseProp => {
            let CaseType;
            switch (type) {
              case 'UNITS':
                CaseType = CaseUnits;
                break;
              case 'TENS':
                CaseType = CaseTens;
                break;
              case 'HUNDREDS':
                CaseType = CaseHundreds;
                break;
              case 'THOUSANDS':
                CaseType = CaseThousands;
                break;
              default :
                break;
            }
            return (
              <CaseType key={CaseProp.id}
                        value={this.setCaseValue(CaseProp.number, type)}
                        type={type}
                        number={CaseProp.number}/>

            )

          }
        ) : '<h2>Chargement...</h2>'}
      </div>
    );
  }
}


Column.propTypes = {
  cases: PropTypes.array.isRequired
};