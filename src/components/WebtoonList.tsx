import { webtoonInfo } from '@/types';
import Loading from './WebtoonLoading';
import { useRecoilValue } from 'recoil';
import {
  service as serviceState,
  updateDay as updateDayState,
} from '@/recoil/webtoon/atoms';
import { useQuery, useInfiniteQuery } from 'react-query';
import { getWebtoonInfo } from '@/common/api/webtoonAPI';
import { useEffect, useState } from 'react';
import { initialPageInfo } from '@/constants/initialValues';
import ScrollToBottomDetector from './ScrollDetector';
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
                <div key={`${pageIndex}-${webtoonIndex}`} className="rounded">
                  <article>
                    <div className="webtoonBox">
                      <header>
                        <a
                          href={webtoon.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="rounded bg-zinc-700/50 w-[500px] h-[260px]"
                            src={webtoon.img}
                            alt={webtoon.title}
                          />
                        </a>
                      </header>

                      <div className="w-[300px] h-[17px] mt-4">
                        <p className="line-clamp-1 font-extralight	text-sm text-[16px] text-slate-900 dark:text-white capitalize line-clamp-1">
                          {webtoon.title}
                        </p>
                      </div>
                      <div className="h-[12px] mt-1">
                        <p className="line-clamp-1 mt-1 overflow-ellipsis font-extralight	text-sm text-slate-500 dark:text-slate-400 text-sm">
                          {webtoon.author}
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
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
