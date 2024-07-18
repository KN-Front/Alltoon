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
    <div className="flex flex-wrap w-full gap-4 p-4 place-content-center">
      {data?.webtoons.map((webtoon) => (
        <WebtoonBox key={webtoon.id} webtoon={webtoon} />
      ))}
    </div>
  );
};

export default SearchList;
