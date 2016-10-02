function generateRandomState() {
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
    }
  ]

}

export default function expect(state = generateRandomState(), action) {
  switch (action.type) {
    case 'GENERATE_NUMBER':
      return generateRandomState();
      break;
    case 'GUESSED':
      return state.filter((expectation) => {
        return expectation.type === action.guessed
      }).map((expectation)=> {
        expectation.guessed = true;
        return expectation;
      });
      break;
    default:
      return generateRandomState();
      break;
  }
}