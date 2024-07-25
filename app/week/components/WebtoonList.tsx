import Loading from '@/components/WebtoonLoading';
import ScrollDetector from '@/components/ScrollDetector';
import WebtoonBox from './WebtoonBox';
import { useDayServiceWebtoonQuery } from '@/hooks/useDayServiceWebtoonQuery';
import { useAppState } from '@/hooks/useAppState';

const WebtoonList = () => {
  const { updateDay, weekProvider } = useAppState();
  const { data, isLoading, fetchNextPage, isFetchingNextPage } =
    useDayServiceWebtoonQuery(updateDay, weekProvider);

  const handleScrollToBottom = () => {
    try {
      fetchNextPage();
    } catch (error) {
      console.error('Error fetching next page', error);
    }
  };

  return (
    <section className="relative bg-white mb-20 mx-auto dark:bg-black">
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <ul className="flex flex-wrap gap-3 w-full list-none dark:bg-black place-content-center justify-center">
            {data?.pages.map((page) =>
              page.webtoons.map((webtoon) => (
                <WebtoonBox webtoon={webtoon} key={webtoon.id} />
              )),
            )}
          </ul>
        )}
        {isFetchingNextPage && <Loading />}
        <ScrollDetector onScrollEvent={handleScrollToBottom} />
      </div>
    </section>
  );
};

export default WebtoonList;
