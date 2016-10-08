export function playGame() {
  return {
    type: 'PLAY_GAME'
  };
}

export function displayParams() {
  return {
    type: 'DISPLAY_PARAMS'
  };
}

export function allGuessed() {
  return {
    type: 'ALL_GUESSED',
    soundUrl: 'https://www.freesound.org/data/previews/277/277441_4157918-lq.mp3'
  };
}