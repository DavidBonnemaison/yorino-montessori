import {GENERATE_NUMBER} from '../constants/ActionTypes';

export function generateNumber() {
  return {
    type: GENERATE_NUMBER
  };
}

export function guessNumber(type) {
  return function (dispatch, getState) {
    dispatch(
      {
        type: 'GUESSED',
        guessed: type
      }
    )
  }
}