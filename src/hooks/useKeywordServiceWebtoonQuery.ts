import { getSearchWebtoonInfo } from '@/api/webtoonAPI';
import { countWebtoonsByService, filterByService } from '@/utils/webtoon';
import { webtoonInfo } from '@/types/webtoon';
import { useQuery } from 'react-query';
import { useAppState } from './useAppState';

export const useKeywordServiceWebtoonQuery = (
  searchValue: string,
  searchService: string,
) => {
  const {
    setNaverWebtoonCount,
    setKakaoWebtoonCount,
    setKakaoPageWebtoonCount,
  } = useAppState();

  return useQuery<webtoonInfo>(
    ['getSearchWebtoonInfo', searchValue, searchService],
    async () => {
      const data = await getSearchWebtoonInfo({ keyword: searchValue });

      setNaverWebtoonCount(countWebtoonsByService(data, 'NAVER'));
      setKakaoWebtoonCount(countWebtoonsByService(data, 'KAKAO'));
      setKakaoPageWebtoonCount(countWebtoonsByService(data, 'KAKAO_PAGE'));

      return filterByService(searchService, data);
    },
  );
};
