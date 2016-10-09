import { UNITS, TENS, HUNDREDS, THOUSANDS } from './../constants/ColumnTypes';
import {
  RESET_GAME,
  ADD_COLUMN,
  REMOVE_COLUMN,
  CORRECT_GUESS,
  WRONG_GUESS,
  GUESSING
} from './../constants/ActionTypes';

function generateGuesses(nbColumns = 3) {
  return [
    {
      type: UNITS,
      value: null,
      guessed: false
    },
    {
      type: TENS,
      value: null,
      guessed: false
    },
    {
      type: HUNDREDS,
      value: null,
      guessed: false
    },
    {
      type: THOUSANDS,
      value: null,
      guessed: false
    }
  ].filter((col, i) => i < nbColumns);
}


export default function guesses(state = generateGuesses(), action) {
  switch (action.type) {
    case GUESSING:
      return state.map(guess => {
        if (guess.type === action.guessType) {
          return Object.assign({}, guess, { value: action.guessedNumber });
        }
        return guess;
      });
    case CORRECT_GUESS:
      return state.map(guess => {
        if (guess.type === action.guessType) {
          return Object.assign({}, guess, { guessed: true });
        }
        return guess;
      });
    case WRONG_GUESS:
      return state.map(guess => {
        if (guess.type === action.guessType) {
          return Object.assign({}, guess, { guessed: false });
        }
        return guess;
      });
    case ADD_COLUMN :
    case REMOVE_COLUMN :
      return generateGuesses(action.nbColumns);
    case RESET_GAME:
      return generateGuesses();
    default:
      return state;
  }
}
