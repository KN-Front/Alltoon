import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWebtoonInfo, getSearchWebtoonInfo } from '../../common/api/webtoonAPI';
import { useSelector } from 'react-redux';
import {searchParam} from '../webtoon/webtoonSlice'
import { RootState } from '../store';
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
  async (param:Object)=>{
    const response = await getSearchWebtoonInfo(param);
    return response;
});
