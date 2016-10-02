import React, {Component, PropTypes} from 'react';
import {DropTarget} from 'react-dnd';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as ExpectActions from '../actions/ExpectActions';

const dropCase = {
  drop(props) {
    console.log(props);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    highlighted: monitor.canDrop()
  };
}

class ExpectCase extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {connectDropTarget, isOver, type, expectNumber, guesses} = this.props;
    const guessed = guesses.filter((guess)=>guess.type === type).pop().guessed;
    const classNames = classnames({
      'ExpectCase': true,
      'ExpectCase--hover': isOver,
      'ExpectCase--guessed': guessed
    });
    return connectDropTarget(
      <div className={classNames}>
        {expectNumber}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    guesses: state.guesses
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ExpectActions, dispatch)
  };
}


ExpectCase.propTypes = {};

ExpectCase = connect(mapStateToProps, mapDispatchToProps)(ExpectCase);

let ExpectUnits = ExpectCase;
let ExpectTens = ExpectCase;
let ExpectHundreds = ExpectCase;
let ExpectThousands = ExpectCase;
ExpectUnits = DropTarget('UNITS', dropCase, collect)(ExpectUnits);
ExpectTens = DropTarget('TENS', dropCase, collect)(ExpectTens);
ExpectHundreds = DropTarget('HUNDREDS', dropCase, collect)(ExpectHundreds);
ExpectThousands = DropTarget('THOUSANDS', dropCase, collect)(ExpectThousands);
ExpectCase = DropTarget('CASE', dropCase, collect)(ExpectCase);

export {ExpectCase, ExpectUnits, ExpectTens, ExpectHundreds, ExpectThousands};
