import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWebtoonInfo, getSearchWebtoonInfo } from '../../common/api/webtoonAPI';
/**
 * 웹툰 목록
 */
export const fetchWebtoonList = createAsyncThunk(
  'webtoon/fetchWebtoonList', 
  async (param:Object) => {
    const response = await getWebtoonInfo(param);
    return response.webtoons;
});

/**
 * 웹툰 검색 목록
 */

export const fetchSearchList = createAsyncThunk(
  'webtoon/fetchSearchList',
  async (param:Object)=>{
    const response = await getSearchWebtoonInfo(param);
    return response.webtoons;
});
