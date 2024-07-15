export interface getWebtoonInfoParam {
  page: number;
  perPage: number;
  provider: string;
  updateDay: string;
}

export interface getSearchWebtoonInfoParam {
  keyword: string;
}

export interface week {
  key: string;
  value: string;
}

export interface webtoons {
  id: string;
  title: string;
  provider: string;
  updateDays: Array;
  url: string;
  thumbnail: Array;
  isEnd: booleanl;
  isFree: boolean;
  isUpdated: boolean;
  ageGrade: number;
  freeWaitHour: number;
  authors: Array;
}

export interface webtoonInfo {
  webtoons: webtoons[];
  total: number;
  isLastPage: boolean;
}
