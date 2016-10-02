import {combineReducers} from 'redux';
import cases from './cases';
import columns from './columns';
import expect from './expect';
import guesses from './guessedNumbers';
import appStatus from './appStatus';

const rootReducer = combineReducers({
  cases,
  columns,
  expect,
  guesses,
  appStatus
});

export default rootReducer;
