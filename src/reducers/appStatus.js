const initialStatus = {
  splashScreen: false,
  allGuessed: false
};

export default function appStatus(state = initialStatus, action) {
  switch (action.type) {
    case 'ALL_GUESSED':
      return Object.assign({}, state, {allGuessed: true});
      break;
    default:
      return state;
      break;
  }
}