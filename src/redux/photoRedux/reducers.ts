import {  createReducer } from '@reduxjs/toolkit'
import { handleFetchPhoto, fetchPhotoSuccess, fetchPhotoFail } from './actions'

const initialState = {
    loading:true,
    data:<any>[],
    message:'',
}

const photoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(handleFetchPhoto, (state, action) => {
      state.loading= true;
    })
    .addCase(fetchPhotoSuccess, (state, action) => {
        state.loading = false;
        state.data=action.payload;
        state.message = 'success'
    })
    .addCase(fetchPhotoFail, (state, action) => {
        state.loading = false;
        state.data=[];
        state.message = 'error'
    })
    .addDefaultCase((state,action)=>{
        state;
    })
})

export default photoReducer;