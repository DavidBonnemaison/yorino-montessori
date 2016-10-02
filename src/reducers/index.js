import {combineReducers} from 'redux';
import cases from './cases';
import columns from './columns';
import expect from './expect';
import guesses from './guessedNumbers';

const rootReducer = combineReducers({
  cases,
  columns,
  expect,
  guesses
});

export default rootReducer;
