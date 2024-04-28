import { webtoonInfo } from '@/types';
import Loading from '@/components/WebtoonLoading';
import { useRecoilValue } from 'recoil';
import {
  service as serviceState,
  updateDay as updateDayState,
} from '@/recoil/webtoon/atoms';
import { useQuery, useInfiniteQuery } from 'react-query';
import { getWebtoonInfo } from '@/common/api/webtoonAPI';
import { useEffect, useState } from 'react';
import { initialPageInfo } from '@/constants/initialValues';
import ScrollToBottomDetector from '@/components/ScrollDetector';
import WebtoonBox from './WebtoonBox';

/**
 * 웹툰 목록 컴포넌트
 * @returns
 */
const WebtoonList = () => {
  const updateDay = useRecoilValue(updateDayState);
  const service = useRecoilValue(serviceState);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const { data, isLoading, status, fetchNextPage } =
    useInfiniteQuery<webtoonInfo>({
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

  const handleScrollToBottom = () => {
    if (!isLoadingMore) {
      setIsLoadingMore(true);
      fetchNextPage().then(() => {
        setIsLoadingMore(false);
      });
    }
  };

  return (
    <div className="webtoonRow">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full">
          <div
            id="body"
            className="grid grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-4 p-4"
          >
            {data?.pages.map((page, pageIndex) =>
              page.webtoons.map((webtoon, webtoonIndex) => (
                <WebtoonBox webtoon={webtoon} webtoonIndex={webtoonIndex} />
              )),
            )}
          </div>
        </div>
      )}
      {isLoadingMore && <Loading />}
      <ScrollToBottomDetector onScrollToBottom={handleScrollToBottom} />
    </div>
  );
};

export default WebtoonList;
