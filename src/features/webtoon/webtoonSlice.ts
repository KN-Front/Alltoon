import { createSlice } from '@reduxjs/toolkit';
import { fetchWebtoonList, fetchSearchList} from './webtoonActions';
import { RootState } from '@/features/store';
import { getWebtoonInfoParam, week, webtoonInfo, webtoons } from '@/types';
/**
 * 웹툰 정보 state
 */

interface initialState{
  weeks : Array<week>,
  service : Array<String>,
  webtoonInfo : webtoonInfo,
  searchList : webtoonInfo,
  error: any|undefined,
  searchParam: getWebtoonInfoParam,
}

const initialWebtoons: webtoons = {
  _id: "",
  webtoonId: 0,
  title: "",
  author: "",
  url: "",
  img: "",
  service: "",
  updateDays: [],
  fanCount: null,
  searchKeyword: "",
  additional: {
    new: false,
    rest: false,
    up: false,
    adult: false,
    singularityList: []
  }
}

const initialWebtoonInfo: webtoonInfo = {
  totalWebtoonCount: 0,
  naverWebtoonCount: 0,
  kakaoWebtoonCount: 0,
  kakaoPageWebtoonCount: 0,
  updatedWebtoonCount: 0,
  createdWebtoonCount: 0,
  lastUpdate: null,
  webtoons: [initialWebtoons]
};



const initialState = {
  service: ["naver", "kakao", "kakaoPage"],
  weeks: [ {key: "mon" ,value : "월"}, 
            {key: "tue" ,value : "화"},
            {key: "wed" ,value : "수"},
            {key: "thu" ,value : "목"},
            {key: "fri" ,value : "금"},
            {key: "sat" ,value : "토"},
            {key: "sun" ,value : "일"}],
  weekWebtoon: initialWebtoonInfo  ,
  searchWebtoon: initialWebtoonInfo ,
  error : '',
  searchParam :{
    page : 1 ,
    perPage : 20,
    service : 'naver',
    updateDay : 'mon'
  },
  loading : false
}

/**
 * 웹툰 slice
 */
const webtoonSlice = createSlice({
  name: 'webtoon',
  initialState,
  reducers: {
    /**
     * searchParam 설정
     * @param state 
     * @param action 
     */
    setsearchParam: (state,action) =>{
      state.searchParam = action.payload;
    },
    /**
     * searchParam 서비스 설정
     * @param state 
     * @param action 
     */
    setSearchParamService: (state, action) =>{
      state.searchParam.service = action.payload;
    },
    /**
     * searchParam 요일 설정
     * @param state 
     * @param action 
     */
    setSearchParamUpdateDay: (state,action) =>{
      state.searchParam.updateDay = action.payload;
    },
    /**
     * searchParam 다음 페이지 설정
     * @param state 
     */
    setPage: (state,action) =>{
      state.searchParam.page = action.payload;
    },
    /**
     * searchParam 다음 페이지 설정
     * @param state 
     */
    setNextPage: (state) =>{
      state.searchParam.page += 1;
    },

    setLoading: (state,action)=>{
      state.loading = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      /**
       * 요일별 웹툰 검색 
       */
      .addCase(fetchWebtoonList.pending, (state)=>{
        state.loading = true;
      })
      .addCase(fetchWebtoonList.fulfilled, (state, action) => {
        if(state.searchParam.page > 1){
          state.weekWebtoon = {...state.weekWebtoon, ...action.payload};
        }else{
          state.weekWebtoon = action.payload;
        }
        state.loading = false;
      })
      .addCase(fetchWebtoonList.rejected, (state)=>{
        state.loading = false;
      })
      

      /**
       * 웹툰 검색 
       */
      .addCase(fetchSearchList.pending, (state)=>{
        state.loading = true;
      })
      .addCase(fetchSearchList.fulfilled, (state, action) => {
        state.searchWebtoon = action.payload;
        state.loading = false;
      })
      .addCase(fetchSearchList.rejected, (state) => {
        state.loading = false;
      })
    
  }
})



/**
 * 웹툰 목록
 * @param state 
 * @returns 
 */
export const weekWebtoon = (state:RootState) => state.webtoon.weekWebtoon;

/**
 * 검색 목록
 * @param state 
 * @returns 
 */
export const searchWebtoon = (state:RootState) => state.webtoon.searchWebtoon;

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

export const loading = (state:RootState) => state.webtoon.loading;

export const webtoonActions = webtoonSlice.actions;

export default webtoonSlice.reducer
