import React from 'react';
import { webtoonInfo, webtoons } from '@/types';
import WebtoonLoading from '@/components/WebtoonLoading';
import { useQuery } from 'react-query';
import { getSearchWebtoonInfo } from '@/common/api/webtoonAPI';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  searchValue as searchValueState,
  searchService as searchServiceState,
} from '@/recoil/webtoon/atoms';
import {
  naverWebtoonCount,
  kakaoWebtoonCount,
  kakaoPageWebtoonCount,
} from '@/recoil/webtoon/atoms';
import {
  countWebtoonsByService,
  filterByService,
} from '@/common/utill/webtoon';
import WebtoonBox from './WebtoonBox';

const SearchList = () => {
  const searchValue = useRecoilValue(searchValueState);
  const searchService = useRecoilValue(searchServiceState);
  const setNaverWebtoonCount = useSetRecoilState(naverWebtoonCount);
  const setKakaoWebtoonCount = useSetRecoilState(kakaoWebtoonCount);
  const setKakaoPageWebtoonCount = useSetRecoilState(kakaoPageWebtoonCount);

  const { isLoading, data, isError, error } = useQuery<webtoonInfo>(
    ['getSearchWebtoonInfo', searchValue, searchService],
    () => {
      return getSearchWebtoonInfo({
        keyword: searchValue,
      });
    },
    {
      select: (data) => {
        setNaverWebtoonCount(countWebtoonsByService(data, 'naver'));
        setKakaoWebtoonCount(countWebtoonsByService(data, 'kakao'));
        setKakaoPageWebtoonCount(countWebtoonsByService(data, 'kakaoPage'));

        return filterByService(searchService, data);
      },
    },
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
