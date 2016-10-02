const defaultCases = generateCaseNumbers();

export default function cases(state = defaultCases, action) {
  switch (action.type) {
    default:
      return state;
      break;
  }
}

function generateCaseNumbers() {
  return Array
    .from(Array(10))
    .map((e, i)=> {
      return {
        id: i,
        number: i
      }
    })
    .filter((obj)=> obj.id !== 0);
}