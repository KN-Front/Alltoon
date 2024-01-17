import React from 'react'
import { searchWebtoon } from '../features/webtoon/webtoonSlice'
import { useSelector } from 'react-redux'
import { webtoonInfo } from '@/types'

const SearchList = () =>{
    //TODO Naver, kakao, kakaoPage 별 값 나누기 
    
    const webtoon:webtoonInfo = useSelector(searchWebtoon);
    if(webtoon.webtoons.length){
        return(
            <div className='searchList'>
                <div className='serviceTitle'>
                    <div className='serviceSub'>
                        <h2>Naver</h2>
                        <span></span>
                    </div>
                </div>
                {webtoon.webtoons.map((webtoon)=>(
                    <ul className='searchWebtoon'>
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
                ))
                }
            </div>
        )
    }else{
        return(
            <div></div>
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