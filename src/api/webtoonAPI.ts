import { buildUrl } from '@/utils/api';
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

export const getWebtoonInfo = (params: getWebtoonInfoParam) => {
  return fetchAPI<webtoonInfo>(BASE_URL, params);
};

export const getSearchWebtoonInfo = (params: getSearchWebtoonInfoParam) => {
  return fetchAPI<webtoonInfo>(BASE_URL, params);
};
