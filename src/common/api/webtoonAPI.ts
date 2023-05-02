import { createAsyncThunk } from '@reduxjs/toolkit'
import { buildUrl } from '../utill/api';
import axios from 'axios';

/**
 * 웹툰 정보 API
 * @param param 
 * @returns 
 */ 

export const getWebtoonInfo = async (param: Object) =>{
  let url = "https://korea-webtoon-api.herokuapp.com";
  const response = await axios.get(buildUrl(url,param));
  return response.data; 
}

/**
 * 웹툰 정보 검색 API
 * @param param 
 * @returns 
 */ 

export const getSearchWebtoonInfo = async (param: Object) =>{
  let url = "https://korea-webtoon-api.herokuapp.com/search	";
  const response = await axios.get(buildUrl(url,param));
  return response.data; 
}