import React from "react";
import { useSelector } from "react-redux";
import { weeksList, serviceList, webtoonActions, searchParam } from "../features/webtoon/webtoonSlice";
import { fetchWebtoonList} from "../features/webtoon/webtoonActions";
import { useAppDispatch } from "../features/hooks";
import { week } from "@/types";
import { findWeekValueByKey } from "../common/utill/week";
/**
 * 요일 목록 컴포넌트
 * @returns 
 */
export function WeekList(){
    const dispatch = useAppDispatch();
    const weeks = useSelector(weeksList);
    const service = useSelector(serviceList);
    const param = useSelector(searchParam);

    const getServiceParam = (e:React.ChangeEvent<HTMLSelectElement>) =>{
      const service = e.target.value
      dispatch(webtoonActions.setSearchParamService(service));
      dispatch(fetchWebtoonList());
    }

    const getWeekParam = (week: week) =>{
      dispatch(webtoonActions.setSearchParamUpdateDay(week.key));
      dispatch(webtoonActions.setPage(1));
      dispatch(fetchWebtoonList());
    }
    // currentWeek === item.value
    return(
    <div className="weekList">
          <ul>    
              {weeks.map((item) => (
                <li key={item.key} onClick={()=> getWeekParam(item)} className={`${ (item.key == param.updateDay)? 'active' : ''}`}>
                  <a>{item.value} </a>
                </li>
              ))}
          </ul>  
          <select onChange={getServiceParam}>
              {service.map((item,index)=>(
                  <option key={index} value = {item.toString()} > {item}</option>
              ))}
          </select>
    </div>
    )
}