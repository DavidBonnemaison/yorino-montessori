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
      guessType: type
    }
  }

  for (let i = 0; i < 10; ++i) {
    let expectedClassList = document.querySelector('[data-type=' + type + '].Case--expected').classList;
    expectedClassList.add('Case--blink');
    setTimeout(()=> {
      expectedClassList.remove('Case--blink');
    }, 2000);
  }

  return {
    type: 'WRONG_GUESS',
    guessType: type
  }
}

export function guessing(guessing, type) {
  return {
    type: 'GUESSING',
    guessType: type,
    guessedNumber: guessing
  }
}