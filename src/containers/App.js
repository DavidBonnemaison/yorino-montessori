import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Column from '../components/Column';
import Expect from '../components/Expect';
import SplashScreen from '../components/SplashScreen';
import Params from '../components/Params';
import Sound from '../components/Sound';
import * as AppActions from '../actions/AppActions';
import paramIcon from '../../static/images/params_icon.png';
import homeIcon from '../../static/images/home_icon.png';

class App extends Component {
  render() {
    const { columns, cases, guesses, app, actions, sound } = this.props;

    const isGameOver = guesses
        .filter(guess => guess.guessed === false)
        .length === 0;

    if (isGameOver && app.status !== 'gameOver') {
      actions.allGuessed();
    }

    function resetGame() {
      actions.resetGame();
    }

    const gameOver = (
      <div className="GameOver">
        <h1 className="GameOver-title">Félicitations !</h1>
        <p>Le jeu est terminé.</p>
        <button className="GameOver-restart" onClick={resetGame}>
          Recommencer
        </button>
      </div>
    );

    const game = (
      <div style={{ height: '100%' }}>
        <div className="Columns">
          {columns.map(column => (
            <Column
              type={column.type} cases={cases} key={column.type} nbCol={columns.length}
            />)
          ) }
        </div>
        <Expect />
      </div>
    );

    let content;

    switch (app.status) {
      case 'playing':
        content = game;
        break;
      case 'params':
        content = <Params />;
        break;
      case 'gameOver' :
        content = gameOver;
        break;
      default:
        content = <SplashScreen />;
        break;
    }

    function displayParams() {
      actions.displayParams();
    }

    function displaySplash() {
      actions.displaySplash();
    }

    return (
      <div className="App">
        {sound.url ? <Sound /> : <div />}
        <div className="Header">
          <div className="Header-paramHolder">
            <img
              src={paramIcon} onClick={displayParams}
              className="Header-params Header-params--spin"
            />
            <img
              src={homeIcon} onClick={displaySplash}
              className="Header-params"
            />
          </div>
        </div>
        {content}
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired,
  cases: PropTypes.array.isRequired,
  guesses: PropTypes.array.isRequired,
  app: PropTypes.object.isRequired,
  sound: PropTypes.object.isRequired
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
