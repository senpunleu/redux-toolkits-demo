import {combineReducers} from '@reduxjs/toolkit';
import {newsReducer} from './newsRedux/reducer';

const rootReducers = combineReducers({
  news: newsReducer,
});

export default rootReducers;
