import { UNITS, TENS, HUNDREDS, THOUSANDS } from './../constants/ColumnTypes';
import { RESET_GAME, ADD_COLUMN, REMOVE_COLUMN } from './../constants/ActionTypes';

function addType(state) {
  const lastColumn = state[0].type;
  switch (lastColumn) {
    case UNITS:
      return [{ type: TENS }, ...state];
    case TENS:
      return [{ type: HUNDREDS }, ...state];
    case HUNDREDS:
      return [{ type: THOUSANDS }, ...state];
    default:
      return state;
  }
}


const defaultColumns = [
  {
    type: HUNDREDS
  },
  {
    type: TENS
  },
  {
    type: UNITS
  }
];

export default function columns(state = defaultColumns, action) {
  switch (action.type) {
    case ADD_COLUMN:
      return addType(state);
    case REMOVE_COLUMN:
      if (state[0].type === UNITS) {
        return state;
      }
      return state.filter((column, index) => index !== 0);
    case RESET_GAME:
      return defaultColumns;
    default:
      return state;
  }
}
