import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Configurator from './Configurator';
import * as AppActions from '../actions/AppActions';
class SplashScreen extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    const {actions} = this.props;

    function playGame() {
      actions.playGame();
    }

    return (
      <div className="SplashScreen">
        <h1 className="SplashScreen-title">
          Yorino Montessori
        </h1>
        <div className="SplashScreen-description">
          <p>Cupcake ipsum dolor sit amet gingerbread oat cake. Jelly beans sweet lollipop gummi bears jelly beans
            caramels. Cake ice cream bonbon wafer muffin croissant I love cake.</p>
          <p>Pie cotton candy caramels. Tiramisu jelly-o chocolate bar pastry toffee pie tiramisu. Liquorice sesame
            snaps tootsie roll toffee. Chocolate cake topping apple pie I love I love croissant jujubes.</p>
          <p>Chupa chups tart jelly-o chocolate bar. Cupcake candy canes I love I love pudding wafer gingerbread
            gingerbread powder. Biscuit gingerbread marzipan tootsie roll wafer fruitcake.</p>
        </div>
        <Configurator />
        <button className="SplashScreen-begin" onClick={playGame}>
          Démarrer le jeu !
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    app: state.app
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen);
