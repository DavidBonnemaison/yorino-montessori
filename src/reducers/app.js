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
    return Object.assign({}, state, {status: status});
  }

  switch (action.type) {
    case 'DISPLAY_SPLASH':
      return updateState('splashscreen');
    case 'PLAY_GAME':
      return updateState('playing');
    case 'DISPLAY_PARAMS':
      return updateState('params');
    case 'ALL_GUESSED':
      return updateState('gameOver');
      break;
    case 'RESET_GAME':
      return updateState('splashscreen');
      break;
    default:
      return state;
      break;
  }
}