import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Column from '../components/Column';
import Expect from '../components/Expect';
import Config from '../components/Configurator';

class App extends Component {
  render() {
    const {columns, cases, guesses} = this.props;

    const isGameOver = guesses
        .filter((guess) => guess.guessed === false)
        .length === 0;

    const gameOver = (
      <div>
        <h1>Félicitations !</h1>
        <p>Le jeu est terminé.</p>
      </div>
    );

    const game = (
      <div>
        <div className="Columns">
          {columns.map((column) => {
            return (
              <Column type={column.type} cases={cases} key={column.type}/>
            )
          }) }
        </div>
        <Expect />
        <Config />
      </div>
    );

    return (
      <div className="App">
        {isGameOver ? gameOver : game}
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
    guesses: state.guesses,
    appStatus: state.appStatus
  };
}


App = DragDropContext(HTML5Backend)(App);

export default connect(
  mapStateToProps
)(App);
