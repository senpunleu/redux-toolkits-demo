import { albums_temp } from './../temp/albums_temp';
import {  put, takeLatest } from 'redux-saga/effects'
import { fetchAlbumFail, fetchAlbumSuccess, handleFetchAlbum } from '../redux/albumRedux/albumSlice';

function* fetchAlbum(action:any) {
    try {
       yield put({type: fetchAlbumSuccess.toString(),payload:albums_temp});
    } catch (e) {
       yield put({type: fetchAlbumFail.toString()});
    }
 }

export function* watchFetchAlbum() {
    yield takeLatest(handleFetchAlbum.toString(), fetchAlbum);
  }