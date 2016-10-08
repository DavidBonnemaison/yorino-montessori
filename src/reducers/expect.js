function generateRandomState(nbColumns = 3) {
  const arr = [
    {
      type: 'UNITS',
      value: Math.floor((Math.random() * 9) + 1),
      guessed: false
    },
    {
      type: 'TENS',
      value: Math.floor((Math.random() * 9) + 1),
      guessed: false
    },
    {
      type: 'HUNDREDS',
      value: Math.floor((Math.random() * 9) + 1),
      guessed: false
    },
    {
      type: 'THOUSANDS',
      value: Math.floor((Math.random() * 9) + 1),
      guessed: false
    }
  ].filter((col, i) => i < nbColumns);
  arr.push({
    type: 'FULL_NUMBER',
    value: generateFullNumber(arr)
  });
  return arr;
}

function generateFullNumber(arr) {
  return arr.reverse().map(elm => String(elm.value)).reduce((prevElm, elm) => prevElm + elm);
}

export default function expect(state = generateRandomState(), action) {

  function handleGuess(bool) {
    return state.map(expect => {
      if (expect.type === action.guessType) {
        return Object.assign({}, expect, {guessed: bool});
      }
      return expect;
    });
  }

  switch (action.type) {
    case 'GENERATE_NUMBER':
      return generateRandomState();
      break;
    case 'ADD_COLUMN' :
    case 'REMOVE_COLUMN' :
      return generateRandomState(action.nbColumns);
      break;
    case 'CORRECT_GUESS':
      return handleGuess(true);
      break;
    case 'WRONG_GUESS':
      return handleGuess(false);
      break;
    default:
      return state;
      break;
  }
}