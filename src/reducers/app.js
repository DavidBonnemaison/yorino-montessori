import {
  PLAY_GAME, RESET_GAME, DISPLAY_PARAMS, DISPLAY_SPLASH, ALL_GUESSED
} from './../constants/ActionTypes';

// Possible status :
// - splashscreen
// - playing
// - params
// - gameOver

const initialStatus = {
  status: 'splashscreen'
};

export default function app(state = initialStatus, action) {
  function updateState(status) {
    return Object.assign({}, state, { status });
  }

  switch (action.type) {
    case DISPLAY_SPLASH:
      return updateState('splashscreen');
    case PLAY_GAME:
      return updateState('playing');
    case DISPLAY_PARAMS:
      return updateState('params');
    case ALL_GUESSED:
      return updateState('gameOver');
    case RESET_GAME:
      return updateState('splashscreen');
    default:
      return state;
  }
}
