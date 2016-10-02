export function caseDropped(type) {
  return {
    type: 'CASE_DROPPED',
    caseType: type
  };
}