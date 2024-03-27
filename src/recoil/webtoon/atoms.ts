import { webtoonInfo } from '@/types';
import { atom } from 'recoil';

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

export const service = atom({
  key: 'service',
  default: 'naver',
});

export const updateDay = atom({
  key: 'updateDay',
  default: 'mon',
});

export const loading = atom({
  key: 'loading',
  default: false,
});

export const searchValue = atom({
  key: 'searchValue',
  default: '',
});

export const searchService = atom({
  key: 'searchService',
  default: 'ALL',
});

export const naverWebtoon = atom({
  key: 'naverWebtoon',
  default: [],
});

export const kakaoWebtoon = atom({
  key: 'kakaoWebtoon',
  default: [],
});

export const kakaoPageWebtoon = atom({
  key: 'kakaoPageWebtoon',
  default: [],
});
