import { useInfiniteQuery } from 'react-query';
import { getWebtoonInfo } from '@/common/api/webtoonAPI';
import { initialPageInfo } from '@/constants/initialValues';
import { webtoonInfo } from '@/types';

export const useDayServiceWebtoonQuery = (
  updateDay: string,
  service: string,
  perPage: number = initialPageInfo.perPage,
  page: number = initialPageInfo.page,
) => {
  return useInfiniteQuery<webtoonInfo>({
    queryKey: ['getWebtoonInfo', updateDay, service],
    queryFn: ({ pageParam = page }) => {
      return getWebtoonInfo({
        page: pageParam,
        perPage: perPage,
        service: service,
        updateDay: updateDay,
      });
    },
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.webtoons.length < perPage) {
        return undefined;
      }
      return pages.length;
    },
  });
};
