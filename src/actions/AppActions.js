import {PLAY_GAME, RESET_GAME, DISPLAY_PARAMS, DISPLAY_SPLASH, ALL_GUESSED} from './../constants/ActionTypes';

export function playGame() {
  return {
    type: PLAY_GAME
  };
}

export function resetGame() {
  return {
    type: RESET_GAME
  };
}

export function displayParams() {
  return {
    type: DISPLAY_PARAMS
  };
}


export function displaySplash() {
  return {
    type: DISPLAY_SPLASH,
    soundUrl: 'https://s3.amazonaws.com/yorifiles/song.mp3'
  };
}

export function allGuessed() {
  return {
    type: ALL_GUESSED,
    soundUrl: 'https://s3.amazonaws.com/yorifiles/applause.mp3'
  };
}