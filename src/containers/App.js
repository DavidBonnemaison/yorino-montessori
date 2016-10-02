import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Column from '../components/Column';
import Expect from '../components/Expect';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class App extends Component {
  render() {
    // we can use ES6's object destructuring to effectively 'unpack' our props
    const {columns, cases, expect} = this.props;
    return (
      <div className="App">
        <div className="Columns">
          {columns.map((column) => {
            return (
              <Column type={column.type} cases={cases} key={column.type}/>
            )
          }) }
        </div>
        <Expect />
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    columns: state.columns,
    cases: state.cases,
    expect: state.expect,
    guesses: state.guesses
  };
}


App = DragDropContext(HTML5Backend)(App);

export default connect(
  mapStateToProps
)(App);
