import React from 'react';
import { webtoons } from '@/types';
import { useRecoilState, useRecoilValue } from 'recoil';
import { searchService } from '@/recoil/webtoon/atoms';
import {
  naverWebtoonCount as naverWebtoonCountState,
  kakaoWebtoonCount as kakaoWebtoonCountState,
  kakaoPageWebtoonCount as kakaoPageWebtoonCountState,
} from '@/recoil/webtoon/atoms';

const Sidebar = () => {
  const [service, setService] = useRecoilState(searchService);
  const setSelectedService = (service: string) => {
    setService(service);
  };
  const naverWebtoonCount: number = useRecoilValue(naverWebtoonCountState);
  const kakaoWebtoonCount: number = useRecoilValue(kakaoWebtoonCountState);
  const kakaoPageWebtoonCount: number = useRecoilValue(
    kakaoPageWebtoonCountState,
  );

  return (
    <div className="hidden lg:block w-60 h-[64rem] overflow-auto rounded-lg bg-zinc-200 border border-zinc-700/10 dark:bg-zinc-700/50 ">
      <div className="p-4">
        <div className="flex flex-col mt-1 overflow-auto">
          <div
            className={`bg-zinc-700/10 justify-between button-animate p-2 px-3 text-sm flex cursor-pointer mt-2 rounded-sm hover:bg-zinc-700/20 ${
              service === 'ALL' ? 'bg-zinc-700/50' : 'bg-zinc-700/10'
            }`}
            onClick={() => {
              setSelectedService('ALL');
            }}
          >
            <p className="text-center">All</p>
            <p className="text-center text-sm">
              {naverWebtoonCount + kakaoWebtoonCount + kakaoPageWebtoonCount}
            </p>
          </div>
          <div
            className={`bg-zinc-700/10 justify-between button-animate p-2 px-3 text-sm flex cursor-pointer mt-2 rounded-sm hover:bg-zinc-700/20 ${
              service === 'NAVER' ? 'bg-zinc-700/50' : 'bg-zinc-700/10'
            }`}
            onClick={() => {
              setSelectedService('NAVER');
            }}
          >
            <p className="text-center">Naver</p>
            <p className="text-center text-sm">{naverWebtoonCount}</p>
          </div>
          <div
            className={`bg-zinc-700/10 justify-between button-animate p-2 px-3 text-sm flex cursor-pointer mt-2 rounded-sm hover:bg-zinc-700/20 ${
              service === 'KAKAO' ? 'bg-zinc-700/50' : 'bg-zinc-700/10'
            }`}
            onClick={() => {
              setSelectedService('KAKAO');
            }}
          >
            <p className="text-center">KaKao</p>
            <p className="text-center text-sm">{kakaoWebtoonCount}</p>
          </div>
          <div
            className={`bg-zinc-700/10 justify-between button-animate p-2 px-3 text-sm flex cursor-pointer mt-2 rounded-sm hover:bg-zinc-700/20 ${
              service === 'KAKAOPAGE' ? 'bg-zinc-700/50' : 'bg-zinc-700/10'
            }`}
            onClick={() => {
              setSelectedService('KAKAOPAGE');
            }}
          >
            <p className="text-center">KaKaoPage</p>
            <p className="text-center text-sm">{kakaoPageWebtoonCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
