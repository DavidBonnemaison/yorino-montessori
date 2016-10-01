const defaultColumns = [
  {
    type: 'HUNDREDS'
  },
  {
    type: 'TENS'
  },
  {
    type: 'UNITS'
  }
];

export default function columns(state = defaultColumns, action) {
  switch (action.type) {
    case 'ADD_TYPE':
      return addType(state);
      break;
    case 'REMOVE_TYPE':
      if (state.last().type = 'UNITS') {
        return state;
      }
      return state.shift();
      break;
    default:
      return state;
      break;
  }
}

function addType(state) {
  const lastColumn = state.last().type;
  switch (lastColumn) {
    case 'UNITS':
      return state.unshift({type: 'TENS'});
      break;
    case 'TENS':
      return state.unshift({type: 'HUNDREDS'});
      break;
    case 'HUNDREDS':
      return state.unshift({type: 'THOUSANDS'});
      break;
    default:
      return state;
      break;
  }
}