import { createSlice } from '@reduxjs/toolkit'
import { fetchWebtoonList, fetchSearchList} from './webtoonActions'
import { RootState } from '../store'

/**
 * 웹툰 정보 state
 */

interface initialState{
  weeks : Array<{
    key : string ,
    value : string 
  }>,
  service : Array<String>,
  webtoonList : Array<Object>,
  searchList : Array<Object>,
  error: any,
  searchParam: {
    page: number,
    perPage : number,
    service : string,
    updateDay : string
  }
}

const initialState: initialState = {
  weeks : [ {key: "mon" ,value : "월"}, 
            {key: "tue" ,value : "화"},
            {key: "wed" ,value : "수"},
            {key: "thu" ,value : "목"},
            {key: "fri" ,value : "금"},
            {key: "sat" ,value : "토"},
            {key: "sun" ,value : "일"}],
  service : ["naver", "kakao", "kakaoPage"],
  webtoonList : [] ,
  searchList : [],
  error : '',
  searchParam : {
    page : 1 ,
    perPage : 20,
    service : 'naver',
    updateDay : 'mon'
  }
}

/**
 * 웹툰 slice
 */
const webtoonSlice = createSlice({
  name: 'webtoon',
  initialState,
  reducers: {
    setSearchParamService: (state, action) =>{
      state.searchParam.service = action.payload;
    },
    setSearchParamUpdateDay: (state,action) =>{
      state.searchParam.updateDay = action.payload;
    },
    setPushWebtoonList:(state,action) =>{
      state.webtoonList.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWebtoonList.pending, (state)=>{
        
      })
      .addCase(fetchWebtoonList.fulfilled, (state, action) => {
        state.webtoonList = action.payload;
      })
      .addCase(fetchWebtoonList.rejected, (state,action) => {
        state.error = action.error.message;
      })
      .addCase(fetchSearchList.pending, (state)=>{
      
      })
      .addCase(fetchSearchList.fulfilled, (state, action) => {
        state.searchList = action.payload;
      })
      .addCase(fetchSearchList.rejected, (state,action) => {
        state.error = action.error.message;
      })
    
  }
})



/**
 * 웹툰 목록
 * @param state 
 * @returns 
 */
export const webtoonList = (state:RootState) => state.webtoon.webtoonList;

/**
 * 검색 목록
 * @param state 
 * @returns 
 */
export const searchList = (state:RootState) => state.webtoon.searchList;

/**
 * 요일 목록
 * @param state 
 * @returns 
 */
export const weeksList = (state:RootState) => state.webtoon.weeks;

/**
 * 서비스 목록
 * @param state 
 * @returns 
 */
export const serviceList = (state:RootState) => state.webtoon.service;

/**
 * 검색 파라미터 목록 
 * @param state 
 * @returns 
 */
export const searchParam = (state:RootState) => state.webtoon.searchParam;

export const webtoonActions = webtoonSlice.actions;

export default webtoonSlice.reducer
