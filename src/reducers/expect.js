import { UNITS, TENS, HUNDREDS, THOUSANDS, FULL_NUMBER } from './../constants/ColumnTypes';
import {
  RESET_GAME, ADD_COLUMN, REMOVE_COLUMN, CORRECT_GUESS, WRONG_GUESS
} from './../constants/ActionTypes';

function generateFullNumber(arr) {
  return arr.reverse().map(elm => String(elm.value)).reduce((prevElm, elm) => prevElm + elm);
}

function generateRandomState(nbColumns = 3) {
  const arr = [
    {
      type: UNITS,
      value: Math.floor((Math.random() * 9) + 1),
      guessed: false
    },
    {
      type: TENS,
      value: Math.floor((Math.random() * 9) + 1),
      guessed: false
    },
    {
      type: HUNDREDS,
      value: Math.floor((Math.random() * 9) + 1),
      guessed: false
    },
    {
      type: THOUSANDS,
      value: Math.floor((Math.random() * 9) + 1),
      guessed: false
    }
  ].filter((col, i) => i < nbColumns);
  arr.push({
    type: FULL_NUMBER,
    value: generateFullNumber(arr)
  });
  return arr;
}

export default function expect(state = generateRandomState(), action) {
  function handleGuess(bool) {
    return state.map(newExpect => {
      if (newExpect.type === action.guessType) {
        return Object.assign({}, newExpect, { guessed: bool });
      }
      return newExpect;
    });
  }

  switch (action.type) {
    case ADD_COLUMN :
    case REMOVE_COLUMN :
      return generateRandomState(action.nbColumns);
    case CORRECT_GUESS:
      return handleGuess(true);
    case WRONG_GUESS:
      return handleGuess(false);
    case RESET_GAME:
      return generateRandomState();
    default:
      return state;
  }
}
