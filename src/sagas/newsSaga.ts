import {NewsResponse, NewsParams} from './../redux/reduxType.d';
import {call, put, takeLatest} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {
  fetchNewsError,
  fetchNewsSuccess,
  handleFetchNews,
} from '../redux/newsRedux/actions';
import {ApiEndPoint, ApiManager} from '../services/API';

function* fetchNews(action: PayloadAction<NewsParams>) {
  try {
    const result: NewsResponse = yield call(
      ApiManager.get,
      ApiEndPoint.NEWS_LIST,
    );

    yield put(fetchNewsSuccess(result));
  } catch (e: any) {
    yield put(fetchNewsError(e));
  }
}

export function* watchFetchNews() {
  yield takeLatest(handleFetchNews.type, fetchNews);
}
