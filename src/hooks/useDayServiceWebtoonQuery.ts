import { useInfiniteQuery } from 'react-query';
import { getWebtoonInfo } from '@/common/api/webtoonAPI';
import { initialPageInfo } from '@/constants/initialValues';
import { webtoonInfo } from '@/types';

export const useDayServiceWebtoonQuery = (
  updateDay: string,
  provider: string,
  perPage: number = initialPageInfo.perPage,
  page: number = initialPageInfo.page,
) => {
  return useInfiniteQuery<webtoonInfo>({
    queryKey: ['getWebtoonInfo', updateDay, provider], // 요일별, 웹툰을 제공하는 서비스
    queryFn: ({ pageParam = page }) => {
      // 웹툰 정보 api
      return getWebtoonInfo({
        page: pageParam,
        perPage: perPage,
        provider: provider,
        updateDay: updateDay,
      });
    },
    getNextPageParam: (lastPage, pages) => {
      // 마지막으로 호출한 웹툰 갯수 < 페이지당 호출할 웹툰 갯수
      if (lastPage.webtoons.length < perPage) {
        return undefined;
      }
      return pages.length; // 호출된 페이지 수
    },
  });
};
