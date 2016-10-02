const initialGuesses = [
  {
    type: 'UNITS',
    value: null,
    guessed: false
  },
  {
    type: 'TENS',
    value: null,
    guessed: false
  },
  {
    type: 'HUNDREDS',
    value: null,
    guessed: false
  }
];

export default function guesses(state = initialGuesses, action) {
  switch (action.type) {
    case 'GUESSING':
      return state.map((guess)=> {
        if (guess.type === action.guessType) {
          return Object.assign({}, guess, {value: action.guessedNumber});
        }
        return guess;
      });
      break;
    case 'CORRECT_GUESS':
      return state.map((guess)=> {
        if (guess.type === action.guessType) {
          return Object.assign({}, guess, {guessed: true});
        }
        return guess;
      });
      break;
    case 'WRONG_GUESS':
      return state.map((guess)=> {
        if (guess.type === action.guessType) {
          return Object.assign({}, guess, {guessed: false});
        }
        return guess;
      });
      break;
    default:
      return state;
      break;
  }
}