// Possible status :
// - splashscreen
// - playing
// - params
// - gameOver

const initialStatus = {
  status: 'splashscreen'
};

export default function app(state = initialStatus, action) {
  switch (action.type) {
    case 'PLAY_GAME':
      return Object.assign({}, state, {status: 'playing'});
    case 'ALL_GUESSED':
      return Object.assign({}, state, {status: 'gameOver'});
      break;
    default:
      return state;
      break;
  }
}