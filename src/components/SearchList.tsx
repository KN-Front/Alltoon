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
                    <div className="w-[150px] h-[17px] mt-4">
                      <a
                        href={data.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p
                          title={data.title}
                          className="line-clamp-1 font-extralight	text-sm text-[16px] text-slate-900 dark:text-white capitalize line-clamp-1"
                        >
                          {data.title}
                        </p>
                      </a>
                    </div>
                    <div className="h-[12px] mt-1">
                      <p
                        title={data.author}
                        className="line-clamp-1 mt-1 overflow-ellipsis font-extralight	text-sm text-slate-500 dark:text-slate-400 text-sm"
                      >
                        {data.author}
                      </p>
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
