import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../features/store';
import axios from 'axios';
import { buildUrl } from '../common/utill/api';
import { SearchWebtoon } from './Search';
import { WeekList } from './WeeksList';
import { WebtoonList } from './WebtoonList';

export function Main() {
    const [webtoonList, setWebtoonList] = useState({});

    useEffect(()=>{
        getWebtoonInfo();
    },[]);

    /**
     * 웹툰 정보 가져오기
     */
    const getWebtoonInfo = () =>{
        const url = "https://korea-webtoon-api.herokuapp.com";
        let param = {
            service : "naver",
            updateDay : "mon"
        };
         axios.get(buildUrl(url,param))
         .then(response => {
            setWebtoonList(response.data.webtoons);
            console.log(webtoonList)
         })
         .catch(error => {
           console.error(error);
         });

    } 

  return (
    <div>

      <div>
        <div>
          <SearchWebtoon/>
        </div>
        <div>
            슬라이드 
        </div>
        <div>
          <WeekList/>
        </div>
        <div>
          <WebtoonList/>
        </div>
      </div>
    </div>
  );
}
