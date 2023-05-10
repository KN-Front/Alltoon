import React, { useEffect} from 'react';
import { WeekList } from '../components/WeeksList';
import { WebtoonList } from '../components/WebtoonList';
import { useAppDispatch } from '../features/hooks';
import {fetchWebtoonList} from '../features/webtoon/webtoonActions'

const Main = () => {

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

export default Main;
