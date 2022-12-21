import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    loading:true,
    data:<any>[],
    message:''
}

const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    handleFetchAlbum(state) {
      state.loading = true;
    },
    fetchAlbumSuccess(state, action: PayloadAction<any>) {
        state.loading = false;
        state.data=action.payload;
        state.message = 'success'
    },
    fetchAlbumFail(state) {
        state.loading = false;
        state.data=[];
        state.message = 'error'
    },
  },
})

export const { handleFetchAlbum, fetchAlbumSuccess, fetchAlbumFail } = albumSlice.actions
export default albumSlice.reducer