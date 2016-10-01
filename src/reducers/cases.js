const defaultCases = [
  {
    id: 1,
    number: 1
  },
  {
    id: 2,
    number: 2
  },
  {
    id: 3,
    number: 3
  }
];

export default function cases(state = defaultCases, action) {
  switch (action.type) {
    case 'whut':
      return state.push({id: 4, number: 4});
    default:
      return state;
  }
}
