const defaultCases = generateCaseNumbers();

export default function cases(state = defaultCases, action) {
  switch (action.type) {
    case 'CASE_DROPPED':
      selectExpectByType(action.caseType);
      return state;
      break;
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

function selectExpectByType(state, caseType) {
  return state.expect.filter((caseState)=> {
   return caseState.type = caseType;
  })
}

