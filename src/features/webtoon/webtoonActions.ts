import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWebtoonInfo, getSearchWebtoonInfo } from '../../common/api/webtoonAPI';
import { RootState } from '../store';
import {getWebtoonInfoParam, getSearchWebtoonInfoParam} from '@/types/webtoon';

/**
 * 웹툰 목록
 */
export const fetchWebtoonList = createAsyncThunk(
  'webtoon/fetchWebtoonList', 
  async (_,{ getState}) => {
    const param = (getState() as RootState).webtoon.searchParam;
    const response = await getWebtoonInfo(param);
    return response;
});

/**
 * 웹툰 검색 목록
 */

export const fetchSearchList = createAsyncThunk(
  'webtoon/fetchSearchList',
  async (param:getSearchWebtoonInfoParam)=>{
    const response = await getSearchWebtoonInfo(param);
    return response;
});
