import React from 'react';
import { webtoonInfo, webtoons } from '@/types';
import WebtoonLoading from './WebtoonLoading';
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
            {data?.webtoons.map((data, key) => (
              <div key={key} className="rounded">
                <article>
                  <div className="webtoonBox">
                    <header>
                      <a href={data.url} target="_blank">
                        <img
                          src={data.img}
                          alt={data.title}
                          className="rounded bg-zinc-700/50 w-[500px] h-[260px]"
                        ></img>
                      </a>
                    </header>
                    <div className="flex flex-col ">
                      <a href={data.url} target="_blank">
                        <p className="font-medium text-[16px] text-slate-900 dark:text-dark-white capitalize line-clamp-1">
                          {data.title}
                        </p>
                        <p className="font-medium text-slate-500 dark:text-dark-third text-sm">
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
