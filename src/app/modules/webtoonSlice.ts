import { createSlice } from '@reduxjs/toolkit'
import {getWebtoonInfo} from './webtoonAPI';

const initialState = {
  weeks : ["월","화","수","목","금","토","일"],
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
