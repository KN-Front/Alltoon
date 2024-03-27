import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  allWebtoons,
  naverWebtoons,
  kakaoWebtoons,
  kakaoPageWebtoons,
  searchService,
} from '@/features/webtoon/webtoonSlice';
import { webtoons } from '@/types';
import { loading } from '@/features/webtoon/webtoonSlice';
import WebtoonLoading from './WebtoonLoading';

const SearchList = () => {
  const allWebtoon: webtoons[] = useSelector(allWebtoons);
  const naverwebtoon: webtoons[] = useSelector(naverWebtoons);
  const kakaowebtoon: webtoons[] = useSelector(kakaoWebtoons);
  const kakaoPagewebtoon: webtoons[] = useSelector(kakaoPageWebtoons);
  const [webtoons, setWebtoons] = useState<webtoons[]>([]);
  const isLoading: boolean = useSelector(loading);
  const service = useSelector(searchService);

  const filterByService = () => {
    if (service === 'ALL') {
      setWebtoons(allWebtoon);
    } else if (service === 'NAVER') {
      setWebtoons(naverwebtoon);
    } else if (service === 'KAKAO') {
      setWebtoons(kakaowebtoon);
    } else if (service === 'KAKAOPAGE') {
      setWebtoons(kakaoPagewebtoon);
    }
  };

  useEffect(() => {
    filterByService();
  }, [service, allWebtoon]);

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
            {webtoons.map((data, key) => (
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
                        <p className="font-medium text-[16px] text-slate-900 dark:text-white capitalize line-clamp-1">
                          {data.title}
                        </p>
                        <p className="font-medium text-slate-500 dark:text-slate-400 text-sm">
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
