import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import todo from './todos/reducers';


const reducer = combineReducers({
  todo
});

const store = configureStore({
  reducer,
});

export default store;
