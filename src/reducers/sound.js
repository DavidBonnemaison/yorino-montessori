import {
  PLAY_GAME,
  START_PLAYING,
  STOP_PLAYING,
  DISPLAY_SPLASH,
  ALL_GUESSED,
  CORRECT_GUESS,
  WRONG_GUESS
} from './../constants/ActionTypes';

const defaultSound = {
  url: 'https://s3.amazonaws.com/yorifiles/song.mp3',
  status: 'PLAYING',
  fadeTo: false
};

export default function sound(state = defaultSound, action) {
  function playSound(newSound) {
    return Object.assign({}, state, { status: 'PLAYING', url: newSound, fadeTo: false });
  }

  switch (action.type) {
    case PLAY_GAME:
      return Object.assign({}, state, { fadeTo: 'fadeOut' });
    case START_PLAYING:
      return playSound(action.url);
    case STOP_PLAYING:
      return Object.assign({}, state, { status: 'STOPPED', url: null, fadeTo: false });
    case DISPLAY_SPLASH:
    case CORRECT_GUESS:
    case WRONG_GUESS:
    case ALL_GUESSED:
      return playSound(action.soundUrl);
    default:
      return state;
  }
}
