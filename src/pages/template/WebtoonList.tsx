import Loading from '@/components/WebtoonLoading';
import { useRecoilValue } from 'recoil';
import {
  service as serviceState,
  updateDay as updateDayState,
} from '@/recoil/webtoon/atoms';
import { useState } from 'react';
import ScrollToBottomDetector from '@/components/ScrollDetector';
import WebtoonBox from '../../components/WebtoonBox';
import { useDayServiceWebtoonQuery } from '@/hooks/useDayServiceWebtoonQuery';

/**
 * 웹툰 목록 컴포넌트
 * @returns
 */
const WebtoonList = () => {
  const updateDay = useRecoilValue(updateDayState);
  const service = useRecoilValue(serviceState);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const { data, isLoading, fetchNextPage } = useDayServiceWebtoonQuery(
    updateDay,
    service,
  );

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
                <WebtoonBox
                  webtoon={webtoon}
                  webtoonIndex={pageIndex - webtoonIndex}
                />
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
