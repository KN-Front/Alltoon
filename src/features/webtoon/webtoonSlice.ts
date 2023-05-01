import { createSlice } from '@reduxjs/toolkit'
import {getWebtoonInfo} from '../../app/modules/webtoonAPI';

const initialState = {
  weeks : ["월","화","수","목","금","토","일"],
  service : ["naver", "kakao", "kakaoPage"],
  webtoonList : [] 
}

const webtoonSlice = createSlice({
  name: 'webtoon',
  initialState,
  reducers: {
    getWebtoonList(state, action){
        state.webtoonList = action.payload.data;
    }
  }
})

export const webtoonActions = webtoonSlice.actions;
export default webtoonSlice.reducer
