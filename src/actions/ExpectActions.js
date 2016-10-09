import { CORRECT_GUESS, WRONG_GUESS, GUESSING } from './../constants/ActionTypes';

export function guessNumber(wasGuessed, toGuess, type) {
  if (wasGuessed === toGuess) {
    return {
      type: CORRECT_GUESS,
      guessType: type,
      soundUrl: 'https://s3.amazonaws.com/yorifiles/ok.mp3'
    };
  }

  const expectedClassList = document
    .querySelector(`data-type=["${type}"].Case--expected`)
    .classList;
  expectedClassList.add('Case--blink');
  setTimeout(() => {
    expectedClassList.remove('Case--blink');
  }, 10000);

  return {
    type: WRONG_GUESS,
    guessType: type,
    soundUrl: 'https://s3.amazonaws.com/yorifiles/buzz.mp3'
  };
}

export function guessing(newGuessing, type) {
  return {
    type: GUESSING,
    guessType: type,
    guessedNumber: newGuessing
  };
}
