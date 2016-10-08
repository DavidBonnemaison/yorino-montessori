const defaultSound = {
  url: null,
  status: 'NOT_PLAYING'
};


export default function sound(state = defaultSound, action) {
  function playSound(sound) {
    return Object.assign({}, state, {status: 'PLAYING', url: sound});
  }

  switch (action.type) {
    case 'START_PLAYING':
      return playSound(action.url);
    case 'STOP_PLAYING':
      return Object.assign({}, state, {status: 'NOT_PLAYING', url: null});
    case 'CORRECT_GUESS':
    case 'WRONG_GUESS':
    case 'ALL_GUESSED':
      return playSound(action.soundUrl);
    default:
      return state;
  }
}
