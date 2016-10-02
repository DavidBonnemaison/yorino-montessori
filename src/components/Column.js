import React, {Component, PropTypes} from 'react';
import {Case, CaseUnits, CaseTens, CaseHundreds, CaseThousands} from './Case.js';

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
        console.log(type);
        return number;
    }
  }

  render() {
    const {cases, type} = this.props;
    return (
      <div className="Column">
        {cases ? cases.map((CaseProp) => {

          switch (type) {
            case 'UNITS':
              return (
                <CaseUnits key={CaseProp.id}
                           value={this.setCaseValue(CaseProp.number, type)} type={type}
                />
              );
              break;
            case 'TENS':
              return (
                <CaseTens key={CaseProp.id}
                          value={this.setCaseValue(CaseProp.number, type)} type={type}/>
              );
              break;
            case 'HUNDREDS':
              return (
                <CaseHundreds key={CaseProp.id}
                              value={this.setCaseValue(CaseProp.number, type)} type={type}/>
              );
              break;
            case 'THOUSANDS':
              return (
                <CaseThousands key={CaseProp.id}
                               value={this.setCaseValue(CaseProp.number, type)} type={type}/>
              );
              break;
            default :
              return (
                <Case key={CaseProp.id}
                      value={this.setCaseValue(CaseProp.number, type)} type={type}/>
              );
              break;
          }
        }) : (<h1>Loading...</h1>)
        }
      </div>
    );
  }
}

Column.propTypes = {
  cases: PropTypes.array.isRequired
};