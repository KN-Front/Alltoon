import { useInfiniteQuery } from 'react-query';
import { getWebtoonInfo } from '@/common/api/webtoonAPI';
import { initialPageInfo } from '@/constants/initialValues';
import { webtoonInfo } from '@/types';

export const useDayServiceWebtoonQuery = (
  updateDay: string,
  service: string,
) => {
  return useInfiniteQuery<webtoonInfo>({
    queryKey: ['getWebtoonInfo', updateDay, service],
    queryFn: ({ pageParam = initialPageInfo.page }) => {
      return getWebtoonInfo({
        page: pageParam,
        perPage: initialPageInfo.perPage,
        service: service,
        updateDay: updateDay,
      });
    },
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.webtoons.length < initialPageInfo.perPage) {
        return undefined;
      }
      return pages.length;
    },
  });
};