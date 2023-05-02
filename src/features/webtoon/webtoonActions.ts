import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWebtoonInfo } from '../../common/api/webtoonAPI';
/**
 * 웹툰 목록
 */
export const fetchWebtoonList = createAsyncThunk(
  'webtoon/fetchWebtoonList', 
  async (param:Object) => {
    const response = await getWebtoonInfo(param);
    return response.webtoons;
});
