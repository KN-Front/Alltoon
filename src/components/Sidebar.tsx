import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/features/hooks';
import { webtoonActions } from '@/features/webtoon/webtoonSlice';
import {
    allWebtoons,
    naverWebtoons,
    kakaoWebtoons,
    kakaoPageWebtoons,
    searchService,
} from '@/features/webtoon/webtoonSlice';
import { webtoons } from '@/types';

const Sidebar = () => {
    const dispatch = useAppDispatch();
    const changeWeek = (service: string) => {
        dispatch(webtoonActions.setsearchService(service));
    };
    const allWebtoon: webtoons[] = useSelector(allWebtoons);
    const naverWebtoon: webtoons[] = useSelector(naverWebtoons);
    const kakaoWebtoon: webtoons[] = useSelector(kakaoWebtoons);
    const kakaoPageWebtoon: webtoons[] = useSelector(kakaoPageWebtoons);
    const currentService: string = useSelector(searchService);

    return (
        <div className="hidden lg:block w-60 h-[64rem] overflow-auto rounded-lg bg-zinc-700/50 border border-zinc-700/10">
            <div className="p-4">
                <div className="flex flex-col mt-1 overflow-auto">
                    <div
                        className={`bg-zinc-700/10 justify-between button-animate p-2 px-3 text-sm flex cursor-pointer mt-2 rounded-sm hover:bg-zinc-700/20 ${
                            currentService === 'ALL' ? 'bg-zinc-700/50' : 'bg-zinc-700/10'
                        }`}
                        onClick={() => {
                            changeWeek('ALL');
                        }}
                    >
                        <p className="text-center">All</p>
                        <p className="text-center text-sm">{!!allWebtoon ? allWebtoon.length : 0}</p>
                    </div>
                    <div
                        className={`bg-zinc-700/10 justify-between button-animate p-2 px-3 text-sm flex cursor-pointer mt-2 rounded-sm hover:bg-zinc-700/20 ${
                            currentService === 'NAVER' ? 'bg-zinc-700/50' : 'bg-zinc-700/10'
                        }`}
                        onClick={() => {
                            changeWeek('NAVER');
                        }}
                    >
                        <p className="text-center">Naver</p>
                        <p className="text-center text-sm">{!!naverWebtoon ? naverWebtoon.length : 0}</p>
                    </div>
                    <div
                        className={`bg-zinc-700/10 justify-between button-animate p-2 px-3 text-sm flex cursor-pointer mt-2 rounded-sm hover:bg-zinc-700/20 ${
                            currentService === 'KAKAO' ? 'bg-zinc-700/50' : 'bg-zinc-700/10'
                        }`}
                        onClick={() => {
                            changeWeek('KAKAO');
                        }}
                    >
                        <p className="text-center">KaKao</p>
                        <p className="text-center text-sm">{!!kakaoWebtoon ? kakaoWebtoon.length : 0}</p>
                    </div>
                    <div
                        className={`bg-zinc-700/10 justify-between button-animate p-2 px-3 text-sm flex cursor-pointer mt-2 rounded-sm hover:bg-zinc-700/20 ${
                            currentService === 'KAKAOPAGE' ? 'bg-zinc-700/50' : 'bg-zinc-700/10'
                        }`}
                        onClick={() => {
                            changeWeek('KAKAOPAGE');
                        }}
                    >
                        <p className="text-center">KaKaoPage</p>
                        <p className="text-center text-sm">{!!kakaoPageWebtoon ? kakaoPageWebtoon.length : 0}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
