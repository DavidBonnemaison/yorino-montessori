import {GENERATE_NUMBER} from '../constants/ActionTypes';

export function generateNumber() {
  return {
    type: GENERATE_NUMBER
  };
}

export function guessNumber(wasGuessed, toGuess, type) {
  if (wasGuessed === toGuess) {
    return {
      type: 'CORRECT_GUESS',
      guessType: type,
      soundUrl: 'https://www.freesound.org/data/previews/242/242501_4414128-lq.mp3'
    }
  }

  let expectedClassList = document.querySelector('[data-type=' + type + '].Case--expected').classList;
  expectedClassList.add('Case--blink');
  setTimeout(()=> {
    expectedClassList.remove('Case--blink');
  }, 2000);

  return {
    type: 'WRONG_GUESS',
    guessType: type,
    soundUrl: 'https://www.freesound.org/data/previews/342/342756_5260872-lq.mp3'
  }

}

export function guessing(guessing, type) {
  return {
    type: 'GUESSING',
    guessType: type,
    guessedNumber: guessing
  }
}