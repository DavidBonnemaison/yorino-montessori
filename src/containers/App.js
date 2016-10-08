import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Column from '../components/Column';
import Expect from '../components/Expect';
import SplashScreen from '../components/SplashScreen';
import Params from '../components/Params';
import Sound from '../components/Sound';
import * as AppActions from '../actions/AppActions';

class App extends Component {
  render() {

    const {columns, cases, guesses, app, actions, sound} = this.props;

    const isGameOver = guesses
        .filter(guess=> guess.guessed === false)
        .length === 0;

    if (isGameOver && app.status !== 'gameOver') {
      actions.allGuessed();
    }

    const gameOver = (
      <div>
        <Sound />
        <h1>Félicitations !</h1>
        <p>Le jeu est terminé.</p>
      </div>
    );


    const game = (
      <div>
        <div className="Header">
          <button onClick={displayParams}>Show params</button>
        </div>
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

    switch (app.status) {
      case 'playing':
        return (
          <div className="App">
            {sound.url ? <Sound /> : ''}
            {game}
          </div>
        );
      case 'params':
        return <Params />;
      case 'gameOver' :
        return gameOver;
      default:
        return <SplashScreen />;
    }

    function displayParams() {
      actions.displayParams();
    }

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
    app: state.app,
    sound: state.sound
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  };
}

App = DragDropContext(HTML5Backend)(App);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
