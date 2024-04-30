import Loading from '@/components/WebtoonLoading';
import { useRecoilValue } from 'recoil';
import {
  service as serviceState,
  updateDay as updateDayState,
} from '@/recoil/webtoon/atoms';
import { useState } from 'react';
import ScrollDetector from '@/components/ScrollDetector';
import WebtoonBox from '@/components/WebtoonBox';
import { useDayServiceWebtoonQuery } from '@/hooks/useDayServiceWebtoonQuery';

/**
 * 웹툰 목록 컴포넌트
 * @returns
 */
const WebtoonList = () => {
  const updateDay = useRecoilValue(updateDayState);
  const service = useRecoilValue(serviceState);
  const { data, isLoading, fetchNextPage, isFetchingNextPage } =
    useDayServiceWebtoonQuery(updateDay, service);

  const handleScrollToBottom = () => {
    try {
      fetchNextPage();
    } catch (error) {
      console.error('Error fetching next page', error);
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
            {data?.pages.map((page) =>
              page.webtoons.map((webtoon) => <WebtoonBox webtoon={webtoon} />),
            )}
          </div>
        </div>
      )}
      {isFetchingNextPage && <Loading />}
      <ScrollDetector onScrollEvent={handleScrollToBottom} />
    </div>
  );
};

export default WebtoonList;
