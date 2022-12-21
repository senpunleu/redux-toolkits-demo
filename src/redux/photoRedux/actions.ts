import { createAction } from "@reduxjs/toolkit"

const handleFetchPhoto = createAction('photo/request')
const fetchPhotoSuccess = createAction('photo/success')
const fetchPhotoFail = createAction('photo/fail')

export {handleFetchPhoto,fetchPhotoSuccess,fetchPhotoFail}