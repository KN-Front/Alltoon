import WebtoonLoading from '@/components/WebtoonLoading';
import { useRecoilValue } from 'recoil';
import {
  searchValue as searchValueState,
  searchService as searchServiceState,
} from '@/recoil/webtoon/atoms';
import WebtoonBox from '@/components/WebtoonBox';
import { useKeywordServiceWebtoonQuery } from '@/hooks/useKeywordServiceWebtoonQuery';

const SearchList = () => {
  const searchValue = useRecoilValue(searchValueState);
  const searchService = useRecoilValue(searchServiceState);

  const { isLoading, data } = useKeywordServiceWebtoonQuery(
    searchValue,
    searchService,
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
