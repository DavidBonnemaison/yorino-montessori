import { ADD_COLUMN, REMOVE_COLUMN } from './../constants/ActionTypes';

export function addColumn(nbColumns) {
  return {
    type: ADD_COLUMN,
    nbColumns
  };
}

export function removeColumn(nbColumns) {
  return {
    type: REMOVE_COLUMN,
    nbColumns
  };
}
