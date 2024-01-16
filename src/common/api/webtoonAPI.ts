import { buildUrl } from '../utill/api';
import axios from 'axios';
import {getWebtoonInfoParam, getSearchWebtoonInfoParam} from '@/types/webtoon';
/**
 * 웹툰 정보 API
 * @param param {Object}
 * @param param.page {number} 페이지 번호
 * @param param.perPage {number} 한 페이지 결과 수
 * @param param.service {number} 웹툰 공급자
 * @param param.updateDay {string} 웹툰 업데이트 구분
 * @returns 
 */ 

export const getWebtoonInfo = async (param: getWebtoonInfoParam) =>{
  const url = "https://korea-webtoon-api.herokuapp.com";
  const response = await axios.get(buildUrl(url,param));
  return response.data; 
}

/**
 * 웹툰 정보 검색 API
 * @param param {Object}
 * @param param.keyword {string} 	검색 키워드
 * @returns 
 */ 

export const getSearchWebtoonInfo = async (param: getSearchWebtoonInfoParam) =>{
  const url = "https://korea-webtoon-api.herokuapp.com/search";
  const response = await axios.get(buildUrl(url,param));
  return response.data; 
}