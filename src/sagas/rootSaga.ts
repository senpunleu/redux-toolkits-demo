import {all} from 'redux-saga/effects';
import {watchFetchNews} from './newsSaga';

function* rootSaga() {
  yield all([watchFetchNews()]);
}

export default rootSaga;
