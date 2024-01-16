import React from 'react'
import { searchWebtoon } from '../features/webtoon/webtoonSlice'
import { useSelector } from 'react-redux'
import { webtoonInfo } from '@/types'
const SearchPage = () =>{
    
    const webtoon:webtoonInfo = useSelector(searchWebtoon);

    if(webtoon.webtoons.length){
        return(
            <div>
                 { webtoon.webtoons.map((data)=>(
                        <div key={data._id}>
                            title : {data.title}
                            img : {data.img}
                            author : {data.author}
                            service : {data.service}
                            url : {data.url}
                            updateDays : {data.updateDays}
                            fanCount : {data.fanCount}
                        </div>
                    )) 
                 }
            </div>
        )
    }else{
        return(
            <div>
                값이 없습니다.
            </div>
        )
    }
    
}

export default SearchPage