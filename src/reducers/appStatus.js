const initialStatus = {
  splashScreen: false,
  allGuessed: false
};

export default function appStatus(state = initialStatus, action) {
  switch (action.type) {
    default:
      return state;
      break;
  }
}