import React from 'react';
import { webtoonInfo, webtoons } from '@/types';
import WebtoonLoading from './WebtoonLoading';
import { useQuery } from 'react-query';
import { getSearchWebtoonInfo } from '@/common/api/webtoonAPI';
import { useRecoilValue } from 'recoil';
import {
  searchValue as searchValueState,
  searchService as searchServiceState,
} from '@/recoil/webtoon/atoms';

const SearchList = () => {
  const searchValue = useRecoilValue(searchValueState);
  const searchService = useRecoilValue(searchServiceState);

  const { isLoading, data, isError, error } = useQuery<webtoonInfo>(
    ['getSearchWebtoonInfo', searchValue, searchService],
    () => {
      return getSearchWebtoonInfo({
        keyword: searchValue,
      });
    },
    {
      select: (data) => {
        if (!data)
          return {
            totalWebtoonCount: 0,
            naverWebtoonCount: 0,
            kakaoWebtoonCount: 0,
            kakaoPageWebtoonCount: 0,
            updatedWebtoonCount: 0,
            createdWebtoonCount: 0,
            lastUpdate: null,
            webtoons: [],
          }; // 데이터가 없을 경우 빈 객체 반환
        return {
          ...data,
          webtoons: data.webtoons.filter(
            (webtoon) => webtoon.service === searchService,
          ),
        };
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
            {data?.webtoons.map((data, key) => (
              <div key={key} className="rounded">
                <article>
                  <div className="webtoonBox">
                    <header>
                      <a href={data.url}>
                        <img
                          src={data.img}
                          alt={data.title}
                          className="rounded bg-zinc-700/50"
                        ></img>
                      </a>
                    </header>
                    <div>
                      <a href={data.url}>
                        <p className="font-medium text-[16px] text-white capitalize line-clamp-1">
                          {data.title}
                        </p>
                        <p className="font-medium text-zinc-300 text-sm">
                          {data.author}
                        </p>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchList;
