import React, { useState,useEffect } from 'react'
import { searchWebtoon } from '../features/webtoon/webtoonSlice'
import { useSelector } from 'react-redux'
import { webtoonInfo,webtoons } from '@/types'

const SearchList = () =>{
    //TODO Naver, kakao, kakaoPage 별 값 나누기 
    const webtoon:webtoonInfo = useSelector(searchWebtoon);
    const[naverWebtoon, setNaverWebtoon] = useState<webtoons[]>([]);
    const[kakaoWebtoon, setKakaoWebtoon] = useState<webtoons[]>([]);
    const[kakaoPageWebtoon, setKakaoPageWebtoon] = useState<webtoons[]>([]);
    useEffect(()=>{
        clear()
    },[]);
    
    useEffect(()=>{
        clear()
            .then(filterByService);
    },[webtoon]);

    const clear = async() =>{
        setNaverWebtoon([]);
        setKakaoWebtoon([]);
        setKakaoWebtoon([]);
    }
    const filterByService = async ()=>{
        webtoon.webtoons.forEach((webtoon)=>{
            if(webtoon.service === 'naver'){
                setNaverWebtoon([...naverWebtoon, webtoon]);
            }else if(webtoon.service === 'kakao'){
                setKakaoWebtoon([...kakaoWebtoon, webtoon]);
            }else if(webtoon.service === 'kakaoPage'){
                setKakaoPageWebtoon([...kakaoPageWebtoon, webtoon]);
            }
        })
    }

    if(webtoon.webtoons.length){
        return(
            <div className='searchList'>
                <div className='serviceTitle'>
                    <div className='serviceSub'>
                        <h2>Naver</h2>
                        <span></span>
                    </div>
                </div>
                { Boolean(naverWebtoon) ? 
                naverWebtoon.map((webtoon)=>(
                    <ul className='searchWebtoon' key={webtoon._id}>
                        <li>
                            <a>
                                <div className='poster'>
                                    <img src={webtoon.img}></img>                           
                                </div>
                            </a> 
                            <div className='info'>
                                <a>
                                    <span>{webtoon.title}</span>
                                </a>
                                <div className='detail'>
                                    <span>{webtoon.author}</span>
                                    <em>gdgd</em>
                                </div>
                                <p>
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </p>
                            </div>
                        </li>
                    </ul>
                )) : undefined
                }
                <div className='serviceTitle'>
                    <div className='serviceSub'>
                        <h2>Kakao</h2>
                        <span></span>
                    </div>
                </div>
                { Boolean(kakaoWebtoon) ? 
                kakaoWebtoon.map((webtoon)=>(
                    <ul className='searchWebtoon' key={webtoon._id}>
                        <li>
                            <a>
                                <div className='poster'>
                                    <img src={webtoon.img}></img>                           
                                </div>
                            </a> 
                            <div className='info'>
                                <a>
                                    <span>{webtoon.title}</span>
                                </a>
                                <div className='detail'>
                                    <span>{webtoon.author}</span>
                                    <em>gdgd</em>
                                </div>
                                <p>
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </p>
                            </div>
                        </li>
                    </ul>
                )) : undefined
                }
                <div className='serviceTitle'>
                    <div className='serviceSub'>
                        <h2>KakaoPage</h2>
                        <span></span>
                    </div>
                </div>
                { Boolean(kakaoPageWebtoon) ? 
                kakaoPageWebtoon.map((webtoon)=>(
                    <ul className='searchWebtoon' key={webtoon._id}>
                        <li>
                            <a>
                                <div className='poster'>
                                    <img src={webtoon.img}></img>                           
                                </div>
                            </a> 
                            <div className='info'>
                                <a>
                                    <span>{webtoon.title}</span>
                                </a>
                                <div className='detail'>
                                    <span>{webtoon.author}</span>
                                    <em>gdgd</em>
                                </div>
                                <p>
                                    aaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </p>
                            </div>
                        </li>
                    </ul>
                )) : undefined
                }
            </div>
        )
    }else{
        return(
            <div>검색된 결과가 없습니다.</div>
        )
    }
    
    // if(webtoon.webtoons.length){
    //     return(
    //         <div>
    //              { webtoon.webtoons.map((data)=>(
    //                     <div key={data._id}>
    //                         title : {data.title}
    //                         img : {data.img}
    //                         author : {data.author}
    //                         service : {data.service}
    //                         url : {data.url}
    //                         updateDays : {data.updateDays}
    //                         fanCount : {data.fanCount}
    //                     </div>
    //                 )) 
    //              }
    //         </div>
    //     )
    // }else{
    //     return(
    //         <div>
    //             값이 없습니다.
    //         </div>
    //     )
    // }
    
}

export default SearchList