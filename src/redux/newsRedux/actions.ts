import {createAction} from '@reduxjs/toolkit';
import {NewsResponse} from '../reduxType';

const handleFetchNews = createAction('news/request');
const fetchNewsSuccess = createAction<NewsResponse>('news/success');
const fetchNewsError = createAction<NewsResponse>('news/error');

export {handleFetchNews, fetchNewsSuccess, fetchNewsError};
