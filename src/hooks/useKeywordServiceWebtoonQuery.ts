import { getSearchWebtoonInfo } from '@/common/api/webtoonAPI';
import {
  countWebtoonsByService,
  filterByService,
} from '@/common/utill/webtoon';
import {
  kakaoPageWebtoonCount,
  kakaoWebtoonCount,
  naverWebtoonCount,
} from '@/recoil/webtoon/atoms';
import { webtoonInfo } from '@/types';
import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';

export const useKeywordServiceWebtoonQuery = (
  searchValue: string,
  searchService: string,
) => {
  const setNaverWebtoonCount = useSetRecoilState(naverWebtoonCount);
  const setKakaoWebtoonCount = useSetRecoilState(kakaoWebtoonCount);
  const setKakaoPageWebtoonCount = useSetRecoilState(kakaoPageWebtoonCount);

  return useQuery<webtoonInfo>(
    ['getSearchWebtoonInfo', searchValue, searchService],
    () => {
      return getSearchWebtoonInfo({
        keyword: searchValue,
      });
    },
    {
      select: (data) => {
        setNaverWebtoonCount(countWebtoonsByService(data, 'naver'));
        setKakaoWebtoonCount(countWebtoonsByService(data, 'kakao'));
        setKakaoPageWebtoonCount(countWebtoonsByService(data, 'kakaoPage'));
        return filterByService(searchService, data);
      },
    },
  );
};
