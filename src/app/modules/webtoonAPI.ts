import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

// todo 웹툰 정보 가져오기
export const getWebtoonInfo = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('https://korea-webtoon-api.herokuapp.com')
  return response.data
})
