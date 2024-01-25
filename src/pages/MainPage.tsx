import React, {useState, useEffect} from 'react';
import { WeekList } from '@/components/WeeksList';
import { WebtoonList } from '@/components/WebtoonList';
import { useAppDispatch } from '@/features/hooks';
import {fetchWebtoonList} from '@/features/webtoon/webtoonActions'


const Main = () => {
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(fetchWebtoonList())
  },[]);

  return (
    <main>
          <WeekList/>
          <WebtoonList/>
    </main>
  );
}

export default Main;
