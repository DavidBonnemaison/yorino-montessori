import {combineReducers} from 'redux';
import cases from './cases';
import columns from './columns';
import expect from './expect';
import guesses from './guessedNumbers';
import app from './app';
import sound from './sound';

const rootReducer = combineReducers({
  cases,
  columns,
  expect,
  guesses,
  app,
  sound
});

export default rootReducer;
