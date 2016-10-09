import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ExpectActions from './../actions/ExpectActions';
import { UNITS, TENS, HUNDREDS, THOUSANDS } from './../constants/ColumnTypes';
const classnames = require('classnames');

const caseSource = {
  beginDrag(props) {
    return {
      value: props.value,
      type: props.type,
      number: props.number
    };
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    const item = monitor.getItem();
    const toGuess = component.stateProps.expect
      .filter(guesses => guesses.type === item.type)
      .pop().value;
    component.store.dispatch(ExpectActions.guessing(item.number, item.type));
    component.store.dispatch(ExpectActions.guessNumber(
      item.number, toGuess, item.type
    ));
  }
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ExpectActions, dispatch)
  };
}

function collect(newCollect, monitor) {
  return {
    connectDragSource: newCollect.dragSource(),
    isDragging: monitor.isDragging()
  };
}


class Case extends Component {
  constructor(props, context) {
    super(props, context);
  }


  render() {
    const { isDragging, connectDragSource, value, type, expect, number } = this.props;

    const isExpectedValue = expect.filter(item => item.type === type)[0].value === number;
    const classNames = classnames({
      Case: true,
      'Case--expected': isExpectedValue
    });

    return connectDragSource(
      <div className={classNames} data-type={type} style={{ opacity: isDragging ? 0 : 1 }}>
        <div className="Case-number">
          {value}
        </div>
      </div>
    );
  }
}

Case.propTypes = {
  value: PropTypes.number,
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  expect: PropTypes.array.isRequired,
  number: PropTypes.number
};


function mapStateToProps(state) {
  return {
    expect: state.expect
  };
}

Case = connect(mapStateToProps, mapDispatchToProps)(Case);
let CaseUnits = Case;
let CaseTens = Case;
let CaseHundreds = Case;
let CaseThousands = Case;
CaseUnits = DragSource(UNITS, caseSource, collect)(CaseUnits);
CaseTens = DragSource(TENS, caseSource, collect)(CaseTens);
CaseHundreds = DragSource(HUNDREDS, caseSource, collect)(CaseHundreds);
CaseThousands = DragSource(THOUSANDS, caseSource, collect)(CaseThousands);
Case = DragSource('CASE', caseSource, collect)(Case);

export { Case, CaseUnits, CaseTens, CaseHundreds, CaseThousands };
