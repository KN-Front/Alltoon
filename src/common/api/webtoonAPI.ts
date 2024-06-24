import { buildUrl } from '@/common/utill/api';
import axios from 'axios';
import {
  getWebtoonInfoParam,
  getSearchWebtoonInfoParam,
  webtoonInfo,
} from '@/types/webtoon';

const BASE_URL =
  'https://korea-webtoon-api-cc7dda2f0d77.herokuapp.com/webtoons';

async function fetchAPI<T>(apiUrl: string, params: object): Promise<T> {
  try {
    const url = buildUrl(apiUrl, params);
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
}

/**
 * 웹툰 정보 API
 * @param param {Object}
 * @param param.page {number} 페이지 번호
 * @param param.perPage {number} 한 페이지 결과 수
 * @param param.service {number} 웹툰 공급자
 * @param param.updateDay {string} 웹툰 업데이트 구분
 * @returns
 */
export const getWebtoonInfo = (params: getWebtoonInfoParam) => {
  return fetchAPI<webtoonInfo>(BASE_URL, params);
};

/**
 * 웹툰 정보 검색 API
 * @param param {Object}
 * @param param.keyword {string} 	검색 키워드
 * @returns
 */
export const getSearchWebtoonInfo = (params: getSearchWebtoonInfoParam) => {
  return fetchAPI<webtoonInfo>(BASE_URL, params);
};
