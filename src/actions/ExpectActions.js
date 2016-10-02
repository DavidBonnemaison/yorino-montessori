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