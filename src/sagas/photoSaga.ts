import { photos_temp } from './../temp/photos_temp';
import {  put, takeLatest } from 'redux-saga/effects'
import { fetchPhotoFail, fetchPhotoSuccess, handleFetchPhoto } from '../redux/photoRedux/actions';

function* fetchPhoto(action:any) {
    try {
       yield put({type: fetchPhotoSuccess.toString(),payload:photos_temp});
    } catch (e) {
       yield put({type: fetchPhotoFail.toString()});
    }
 }

export function* watchFetchPhoto() {
    yield takeLatest(handleFetchPhoto, fetchPhoto);
  } 