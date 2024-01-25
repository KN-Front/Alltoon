import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { searchWebtoon } from '@/features/webtoon/webtoonSlice';
import { webtoonInfo,webtoons } from '@/types';
import { getUpdateWeekArrayToString } from '@/common/utill/week';
import {AdultIcon, NewIcon, ResetIcon, UpIcon} from './icon';

const SearchList = () =>{
    const webtoon:webtoonInfo = useSelector(searchWebtoon);
    const[naverWebtoon, setNaverWebtoon] = useState<webtoons[]>([]);
    const[kakaoWebtoon, setKakaoWebtoon] = useState<webtoons[]>([]);
    const[kakaoPageWebtoon, setKakaoPageWebtoon] = useState<webtoons[]>([]);
    
    useEffect(()=>{
        clear()
            .then(filterByService);
    },[webtoon]);

    const clear = async() =>{
        setNaverWebtoon([]);
        setKakaoWebtoon([]);
        setKakaoPageWebtoon([]);
    }
    const filterByService = async ()=>{
        webtoon.webtoons.forEach((webtoon)=>{
            if(webtoon.service === 'naver'){
                setNaverWebtoon((prev) => [...prev, webtoon]);
            }else if(webtoon.service === 'kakao'){
                setKakaoWebtoon((prev) => [...prev, webtoon]);
            }else if(webtoon.service === 'kakaoPage'){
                setKakaoPageWebtoon((prev) => [...prev, webtoon]);
            }
        })
    }

    const sliceText = (text:string) =>{
        return `${text.slice(0, 35)}...`;
    }

    return(
        <div className='searchList'>
            <div className='serviceTitle'>
                <div className='serviceSub'>
                    <h2>Naver</h2>
                    <p>{naverWebtoon.length} 개</p>
                </div>
            </div>    
            <div className='wrap'>
            { Boolean(naverWebtoon) ? 
            naverWebtoon.map((webtoon)=>(
                <ul className='searchWebtoon' key={webtoon._id}>
                    <li>
                        <a href={webtoon.url}>
                            <div className='poster'>
                                <img src={webtoon.img}></img>                           
                            </div>
                        </a> 
                        <div className='info'>
                            <div className='additional'>
                                {webtoon.additional.adult ? 
                                <AdultIcon/> : null}
                                {webtoon.additional.new ? 
                                <NewIcon/> : null}
                                {webtoon.additional.up ? 
                                <UpIcon/> : null}
                                {webtoon.additional.rest ? 
                                <ResetIcon/> : null}
                            </div>
                            <a href={webtoon.url}>
                                <span>{webtoon.title}</span>
                            </a>
                            <div className='author'>
                                <span>작가 : {sliceText(webtoon.author)}</span>
                            </div>
                            <div className='updateDay'>
                                <span>업데이트 날짜 : {getUpdateWeekArrayToString(webtoon.updateDays)}</span>
                            </div>
                            
                        </div>
                    </li>
                </ul>
            )) : 
                <label>
                    결과가 없습니다.
                </label>
            }
            </div>
            <div className='serviceTitle'>
                <div className='serviceSub'>
                    <h2>Kakao</h2>
                    <p>{kakaoWebtoon.length} 개</p>
                </div>
            </div>
            <div className='wrap'>
            { Boolean(kakaoWebtoon) ? 
            kakaoWebtoon.map((webtoon,index)=>(
                <ul className='searchWebtoon' key={webtoon._id}>
                    <li>
                        <a href={webtoon.url}>
                            <div className='poster'>
                                <img src={webtoon.img}></img>                           
                            </div>
                        </a> 
                        <div className='info'>
                            <div className='additional'>
                                {webtoon.additional.adult ? 
                                <AdultIcon/> : null}
                                {webtoon.additional.new ? 
                                <NewIcon/> : null}
                                {webtoon.additional.up ? 
                                <UpIcon/> : null}
                                {webtoon.additional.rest ? 
                                <ResetIcon/> : null}
                            </div>
                            <a href={webtoon.url}>
                                <span>{webtoon.title}</span>
                            </a>
                            <div className='author'>
                                <span>작가 : {sliceText(webtoon.author)}</span>
                            </div>
                            <div className='updateDay'>
                                <span>업데이트 날짜 : {getUpdateWeekArrayToString(webtoon.updateDays)}</span>
                            </div>
                            
                        </div>
                    </li>
                </ul>
            )) : undefined
            }
            </div>
            <div className='serviceTitle'>
                <div className='serviceSub'>
                    <h2>KakaoPage</h2>
                    <p>{kakaoPageWebtoon.length} 개</p>
                </div>
            </div>

            <div className='wrap'>
            { Boolean(kakaoPageWebtoon) ? 
            kakaoPageWebtoon.map((webtoon, index)=>(
                <ul className='searchWebtoon' key={webtoon._id}>
                    <li>
                        <a href={webtoon.url}>
                            <div className='poster'>
                                <img src={webtoon.img}></img>                           
                            </div>
                        </a> 
                        <div className='info'>
                            <div className='additional'>
                                {webtoon.additional.adult ? 
                                <AdultIcon/> : null}
                                {webtoon.additional.new ? 
                                <NewIcon/> : null}
                                {webtoon.additional.up ? 
                                <UpIcon/> : null}
                                {webtoon.additional.rest ? 
                                <ResetIcon/> : null}
                            </div>
                            <a href={webtoon.url}>
                                <span>{webtoon.title}</span>
                            </a>
                            <div className='author'>
                                <span>작가 : {sliceText(webtoon.author)}</span>
                            </div>
                            <div className='updateDay'>
                                <span>업데이트 날짜 : {getUpdateWeekArrayToString(webtoon.updateDays)}</span>
                            </div>
                            
                        </div>
                    </li>
                </ul>
            )) : undefined
            }
            </div>
        </div>
    )
}

export default SearchList