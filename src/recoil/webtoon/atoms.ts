import { webtoonInfo } from '@/types';
import { atom, atomFamily } from 'recoil';

const initialWebtoonInfo: webtoonInfo = {
  totalWebtoonCount: 0,
  naverWebtoonCount: 0,
  kakaoWebtoonCount: 0,
  kakaoPageWebtoonCount: 0,
  updatedWebtoonCount: 0,
  createdWebtoonCount: 0,
  lastUpdate: null,
  webtoons: [],
};

export const weekWebtoon = atom({
  key: 'weekWebtoon',
  default: initialWebtoonInfo,
});

export const param = atom({
  key: 'param',
  default: {
    page: 1,
    perPage: 50,
    service: 'naver',
    updateDay: 'mon',
  },
});

export const loading = atom({
  key: 'loading',
  default: false,
});

export const searchService = atom({
  key: 'searchService',
  default: 'ALL',
});
