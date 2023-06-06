import React, {useState, useEffect} from 'react';
import { WeekList } from '../components/WeeksList';
import { WebtoonList } from '../components/WebtoonList';
import { useAppDispatch } from '../features/hooks';
import {fetchWebtoonList} from '../features/webtoon/webtoonActions'
import { searchParam, webtoonActions } from '../features/webtoon/webtoonSlice'
import {getWebtoonInfo} from '../common/api/webtoonAPI'
import { useSelector } from "react-redux";

const Main = () => {

  let [list, setList] = useState<any>();
  const dispatch = useAppDispatch();
  const param = useSelector(searchParam)
  useEffect(()=>{
    dispatch(fetchWebtoonList(param))
  },[]);

  return (
    <div>
        <hr/>

      <div>
        <hr/>

        <div>
          <WeekList/>
        </div>
        <hr/>

        <div>
          <WebtoonList/>
        </div>
        <hr/>

      </div>
    </div>
  );
}

export default Main;
