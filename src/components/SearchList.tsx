import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { searchWebtoon } from '@/features/webtoon/webtoonSlice';
import { webtoonInfo, webtoons } from '@/types';
import { getUpdateWeekArrayToString } from '@/common/utill/week';
import { AdultIcon, NewIcon, ResetIcon, UpIcon } from './icon';
import { loading } from '@/features/webtoon/webtoonSlice';
import WebtoonLoading from './WebtoonLoading';

const SearchList = () => {
    const webtoon: webtoonInfo = useSelector(searchWebtoon);
    const [naverWebtoon, setNaverWebtoon] = useState<webtoons[]>([]);
    const [kakaoWebtoon, setKakaoWebtoon] = useState<webtoons[]>([]);
    const [kakaoPageWebtoon, setKakaoPageWebtoon] = useState<webtoons[]>([]);
    const isLoading: boolean = useSelector(loading);
    useEffect(() => {
        clear().then(filterByService);
    }, [webtoon]);

    const clear = async () => {
        setNaverWebtoon([]);
        setKakaoWebtoon([]);
        setKakaoPageWebtoon([]);
    };
    const filterByService = async () => {
        webtoon.webtoons.forEach((webtoon) => {
            if (webtoon.service === 'naver') {
                setNaverWebtoon((prev) => [...prev, webtoon]);
            } else if (webtoon.service === 'kakao') {
                setKakaoWebtoon((prev) => [...prev, webtoon]);
            } else if (webtoon.service === 'kakaoPage') {
                setKakaoPageWebtoon((prev) => [...prev, webtoon]);
            }
        });
    };

    const sliceText = (text: string) => {
        return `${text.slice(0, 35)}...`;
    };

    return (
        <div className="w-full">
            {isLoading ? (
                <WebtoonLoading />
            ) : (
                <div className="w-full">
                    <div id="body" className="grid grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-4 p-4">
                        {webtoon.webtoons.map((data, key) => (
                            <div key={key}>
                                <article>
                                    <div className="webtoonBox">
                                        <header>
                                            <a href={data.url}>
                                                <img src={data.img} alt={data.title}></img>
                                            </a>
                                        </header>
                                        <div>
                                            <a href={data.url}>
                                                <span>{data.title}</span>
                                            </a>
                                            <p>{data.author}</p>
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
