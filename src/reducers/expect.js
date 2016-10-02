function generateRandomState(nbColumns = 3) {
  return [
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
  ].filter((col, i)=>i < nbColumns);
}

export default function expect(state = generateRandomState(), action) {
  switch (action.type) {
    case 'GENERATE_NUMBER':
      return generateRandomState();
      break;
    case 'ADD_COLUMN' :
    case 'REMOVE_COLUMN' :
      return generateRandomState(action.nbColumns);
      break;
    case 'CORRECT_GUESS':
      return state.map((expect)=> {
        if (expect.type === action.guessType) {
          return Object.assign({}, expect, {guessed: true});
        }
        return expect;
      });
      break;
    case 'WRONG_GUESS':
      return state.map((expect)=> {
        if (expect.type === action.guessType) {
          return Object.assign({}, expect, {guessed: false});
        }
        return expect;
      });
      break;
    default:
      return state;
      break;
  }
}