import React, {Component, PropTypes} from 'react';
import {DragSource} from 'react-dnd';

const caseSource = {
  beginDrag(props) {
    return {
      value: props.value,
      type: props.type
    };
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      console.log("Pas ici");
      return;
    }

    // When dropped on a compatible target, do something
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    console.log('SUCCESS');
    console.log(dropResult);
    console.log(item);
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}


class Case extends Component {
  constructor(props, context) {
    super(props, context);
  }


  render() {
    const {isDragging, connectDragSource, value} = this.props;
    return connectDragSource(
      <div className="Case" style={{'opacity': isDragging ? 0 : 1}}>
        <div className="Case-number">
          {value}
        </div>
      </div>
    );
  }
}

Case.propTypes = {
  value: PropTypes.number.isRequired,
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired
};

let CaseUnits = Case;
let CaseTens = Case;
let CaseHundreds = Case;
let CaseThousands = Case;
CaseUnits = DragSource('UNITS', caseSource, collect)(CaseUnits);
CaseTens = DragSource('TENS', caseSource, collect)(CaseTens);
CaseHundreds = DragSource('HUNDREDS', caseSource, collect)(CaseHundreds);
CaseThousands = DragSource('THOUSANDS', caseSource, collect)(CaseThousands);
Case = DragSource('CASE', caseSource, collect)(Case);

export {Case, CaseUnits, CaseTens, CaseHundreds, CaseThousands};