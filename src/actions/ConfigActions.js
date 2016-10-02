export function addColumn(nbColumns) {
  return {
    type: 'ADD_COLUMN',
    nbColumns: nbColumns
  };
}

export function removeColumn(nbColumns) {
  return {
    type: 'REMOVE_COLUMN',
    nbColumns: nbColumns
  };
}