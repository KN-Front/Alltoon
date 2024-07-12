import { getSearchWebtoonInfo } from '@/api/webtoonAPI';
import { countWebtoonsByService, filterByService } from '@/utils/webtoon';
import {
  kakaoPageWebtoonCount,
  kakaoWebtoonCount,
  naverWebtoonCount,
} from '@/store/atoms';
import { webtoonInfo } from '@/types/webtoon';
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
        setNaverWebtoonCount(countWebtoonsByService(data, 'NAVER'));
        setKakaoWebtoonCount(countWebtoonsByService(data, 'KAKAO'));
        setKakaoPageWebtoonCount(countWebtoonsByService(data, 'KAKAO_PAGE'));
        return filterByService(searchService, data);
      },
    },
  );
};
