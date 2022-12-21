import { all } from 'redux-saga/effects'
import { watchFetchAlbum } from './albumSaga';
import { watchFetchPhoto } from './photoSaga';

function* rootSaga() {
    yield all([watchFetchPhoto(),watchFetchAlbum()]);
  }
  
export default rootSaga;