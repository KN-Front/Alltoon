import { webtoonInfo } from '@/types/webtoon';

export const countWebtoonsByService = (
  data: webtoonInfo,
  service: string,
): number => {
  let count = 0;

  for (const webtoon of data.webtoons) {
    if (webtoon.service === service) {
      count++;
    }
  }
  return count;
};

export const filterByService = (searchService: string, data: webtoonInfo) => {
  switch (searchService) {
    case 'NAVER':
      return {
        ...data,
        webtoons: data.webtoons.filter(
          (webtoon) => webtoon.service === 'naver',
        ),
      };
    case 'KAKAO':
      return {
        ...data,
        webtoons: data.webtoons.filter(
          (webtoon) => webtoon.service === 'kakao',
        ),
      };
    case 'KAKAOPAGE':
      return {
        ...data,
        webtoons: data.webtoons.filter(
          (webtoon) => webtoon.service === 'kakaoPage',
        ),
      };
    default:
      return data;
  }
};
