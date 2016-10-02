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
    case 'ADD_COLUMN':
      return addType(state);
      break;
    case 'REMOVE_COLUMN':
      if (state[0].type === 'UNITS') {
        return state;
      }
      return state.filter((column, index, array)=> {
        return index !== 0;
      });
      break;
    default:
      return state;
      break;
  }
}

function addType(state) {
  const lastColumn = state[0].type;
  switch (lastColumn) {
    case 'UNITS':
      return [{type: 'TENS'}, ...state];
      break;
    case 'TENS':
      return [{type: 'HUNDREDS'}, ...state];
      break;
    case 'HUNDREDS':
      return [{type: 'THOUSANDS'}, ...state];
      break;
    default:
      return state;
      break;
  }
}