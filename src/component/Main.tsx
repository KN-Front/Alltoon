import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import axios from 'axios';
import { buildUrl } from '../common/utill/api';
export function Main() {
    const weeks = useSelector((state:RootState) => (state.webtoon.weeks))
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
            
        };
         axios.get(buildUrl(url,param))
         .then(response => {
            setWebtoonList(response.data);
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
            검색 input 영역
        </div>
        <div>
            슬라이드 
        </div>
        <div>
  
        <ul>
            {weeks.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>   
        </div>
        <div>
            요일 웹툰 div
        </div>
      </div>
    </div>
  );
}
