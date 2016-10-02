function generateGuesses(nbColumns = 3) {
  return [
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
    },
    {
      type: 'THOUSANDS',
      value: null,
      guessed: false
    }
  ].filter((col, i)=>i < nbColumns);
}


export default function guesses(state = generateGuesses(), action) {
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
    case 'ADD_COLUMN' :
    case 'REMOVE_COLUMN' :
      return generateGuesses(action.nbColumns);
      break;

    default:
      return state;
      break;
  }
}