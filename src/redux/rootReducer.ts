import {combineReducers} from '@reduxjs/toolkit';
import albumSlice from './albumRedux/albumSlice';
import photoReducer from './photoRedux/reducers';


const rootReducers = combineReducers({
  photos: photoReducer,
  albums:albumSlice
});

export default rootReducers;