import React, { useEffect, useState } from 'react';
import { Search } from '../../components/nav/Search';
import { WeekList } from '../../components/WeeksList';
import { WebtoonList } from '../../components/WebtoonList';
import { useAppSelector, useAppDispatch } from '../../features/hooks';
import {fetchWebtoonList} from '../../features/webtoon/webtoonActions'
export function Main() {

  const dispatch = useAppDispatch();

  useEffect(()=>{
    let param = {
      service : "naver",
      updateDay : "mon"
    };
    dispatch(fetchWebtoonList(param))
  },[]);


  return (
    <div>
      <div>
        <div>
          <Search/>
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
