'use client';
import WebtoonLoading from '@/components/WebtoonLoading';

import WebtoonBox from '@/components/WebtoonBox';
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
    <div
      id="body"
      className="w-full grid grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-4 p-4"
    >
      {data?.webtoons.map((webtoon) => (
        <WebtoonBox key={webtoon.id} webtoon={webtoon} />
      ))}
    </div>
  );
};

export default SearchList;
