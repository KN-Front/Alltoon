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
  _id: string;
  id: string;
  webtoonId: number;
  title: string;
  author: string;
  url: string;
  img: string;
  service: string;
  updateDays: Array;
  fanCount: number | null;
  searchKeyword: string;
  provider: string;
  thumbnail: Array;
  additional: {
    new: boolean;
    rest: boolean;
    up: boolean;
    adult: boolean;
    singularityList: Array;
  };
}

export interface webtoonInfo {
  totalWebtoonCount: number;
  naverWebtoonCount: number;
  kakaoWebtoonCount: number;
  kakaoPageWebtoonCount: number;
  updatedWebtoonCount: number;
  createdWebtoonCount: number;
  lastUpdate: string | null;
  webtoons: webtoons[];
}

export interface webtoonState {
  service: Array<String>;
  weeks: week[];
  weekWebtoon: webtoonInfo;
  allWebtoons: webtoons[];
  naverWebtoons: webtoons[];
  kakaoWebtoons: webtoons[];
  kakaoPageWebtoons: webtoons[];
  error: any | undefined;
  searchParam: getWebtoonInfoParam;
  loading: boolean;
  searchService: string;
}
