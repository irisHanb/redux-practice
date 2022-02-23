// import { combineReducers } from 'redux';
import counterReducer, { counterSlice } from './counter';

const rootReducer = { [counterSlice.name]: counterReducer };

export default rootReducer;
