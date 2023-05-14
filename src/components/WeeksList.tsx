import React, { useState } from "react";
import { useSelector } from "react-redux";
import { weeksList, serviceList, webtoonActions, searchParam } from "../features/webtoon/webtoonSlice";
import { fetchWebtoonList} from "../features/webtoon/webtoonActions"
import { useAppDispatch } from "../features/hooks"
import "../styles/WeekList.css"
/**
 * 요일 목록 컴포넌트
 * @returns 
 */
export function WeekList(){
    const dispatch = useAppDispatch();
    const weeks = useSelector(weeksList);
    const service = useSelector(serviceList);
    const param = useSelector(searchParam);

    /**
     * 웹툰 검색
     * @param week 
     */
    const search = () =>{
      dispatch(fetchWebtoonList(param))
    }

    /**
     * service 기준 웹툰 검색 
     * @param e 
     */
    const getServiceParam = (e:React.ChangeEvent<HTMLSelectElement>) =>{
      dispatch(webtoonActions.setSearchParamService(e.target.value));
      search();
    }

    /**
     * 요일 기준 웹툰 검색 
     * @param e 
     */
    const getWeekParam = (week: string) =>{
      dispatch(webtoonActions.setSearchParamUpdateDay(week));
      search();
    }


    return(
    <div className="SubNavigationBar__snb_wrap--A5gfM">
        <nav className="snb_nav">
          <ul className="SubNavigationBar__snb_list--tAZvu">    
              {weeks.map((item) => (
                <li key={item.key} className="SubNavigationBar__item--tmE0E">
                  <a aria-current= {param.updateDay == item.key ? true : false} onClick={()=> getWeekParam(item.key)} className="SubNavigationBar__link--PXX5B">{item.value} </a>
                </li>
              ))}

              <select id="selectBox" onChange={getServiceParam}>
                          {service.map((item,index)=>(
                              <option key={index} value = {item} > {item}</option>
                          ))}
              </select>
          </ul>  
        </nav> 
    </div>
    )
}