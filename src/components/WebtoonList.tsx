import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { weekWebtoon, webtoonActions } from '@/features/webtoon/webtoonSlice';
import { useAppDispatch } from '@/features/hooks';
import { fetchWebtoonList } from '@/features/webtoon/webtoonActions';
import { webtoonInfo } from '@/types';
import { loading } from '@/features/webtoon/webtoonSlice';
import Webtoon from './WebtoonLoading';

/**
 * 웹툰 목록 컴포넌트
 * @returns
 */
export function WebtoonList() {
    const webtoon: webtoonInfo = useSelector(weekWebtoon);
    const scrollRef = useRef<any>(null);
    const dispatch = useAppDispatch();
    const isLoading: boolean = useSelector(loading);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        const handleScroll = () => {
            const isScrolledToBottom =
                scrollContainer.scrollHeight - scrollContainer.scrollTop === scrollContainer.clientHeight;

            if (isScrolledToBottom) {
                getNextWebtoonList();
            }
        };

        scrollContainer.addEventListener('scroll', handleScroll);

        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll);
        };
    }, []);

    /**
     * 웹툰 검색
     * @returns
     */
    const getNextWebtoonList = () => {
        dispatch(webtoonActions.setNextPage());
        dispatch(fetchWebtoonList());
    };

    return (
        <div className="webtoonRow" ref={scrollRef}>
            {isLoading ? (
                <Webtoon />
            ) : (
                <div className="w-full">
                    <div id="body" className="grid grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-4 p-4">
                        {webtoon.webtoons.map((data, key) => (
                            <div className="rounded">
                                <article key={key}>
                                    <div className="webtoonBox">
                                        <header>
                                            <a href={data.url}>
                                                <img
                                                    className="rounded bg-zinc-700/50"
                                                    src={data.img}
                                                    alt={data.title}
                                                ></img>
                                            </a>
                                        </header>
                                        <div>
                                            <a href={data.url}>
                                                {/* <span>{data.title}</span> */}
                                                <p className="font-medium text-[16px] text-white capitalize line-clamp-1">
                                                    {data.title}
                                                </p>
                                                <p className="font-medium text-zinc-300 text-sm">{data.author}</p>
                                            </a>
                                            {/* <p>{data.author}</p> */}
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
}
