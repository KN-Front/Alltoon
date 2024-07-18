'use client';
import WebtoonLoading from '@/components/WebtoonLoading';

import WebtoonBox from './WebtoonBox';
import { useKeywordServiceWebtoonQuery } from '@/hooks/useKeywordServiceWebtoonQuery';
import { useAppState } from '@/hooks/useAppState';

const SearchList = () => {
  const { searchValue, searchProvider } = useAppState();
  const { isLoading, data } = useKeywordServiceWebtoonQuery(
    searchValue,
    searchProvider,
  );

  if (isLoading) {
    return <WebtoonLoading />;
  }

  return (
    <div className="grid w-full gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {data?.webtoons.map((webtoon) => (
        <WebtoonBox key={webtoon.id} webtoon={webtoon} />
      ))}
    </div>
  );
};

export default SearchList;
