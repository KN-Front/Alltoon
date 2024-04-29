import WebtoonLoading from '@/components/WebtoonLoading';
import { useRecoilValue } from 'recoil';
import {
  searchValue as searchValueState,
  searchService as searchServiceState,
} from '@/recoil/webtoon/atoms';
import WebtoonBox from '../../components/WebtoonBox';
import { useKeywordServiceWebtoonQuery } from '@/hooks/useKeywordServiceWebtoonQuery';

const SearchList = () => {
  const searchValue = useRecoilValue(searchValueState);
  const searchService = useRecoilValue(searchServiceState);

  const { isLoading, data } = useKeywordServiceWebtoonQuery(
    searchValue,
    searchService,
  );

  return (
    <div className="w-full">
      {isLoading ? (
        <WebtoonLoading />
      ) : (
        <div className="w-full">
          <div
            id="body"
            className="grid grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-4 p-4"
          >
            {data?.webtoons.map((webtoon, webtoonIndex) => (
              <WebtoonBox webtoon={webtoon} webtoonIndex={webtoonIndex} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchList;
