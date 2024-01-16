import React from "react";
import { useSelector } from "react-redux";
import { weeksList, serviceList, webtoonActions, searchParam } from "../features/webtoon/webtoonSlice";
import { fetchWebtoonList} from "../features/webtoon/webtoonActions"
import { useAppDispatch } from "../features/hooks"
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
     * service 기준 웹툰 검색 
     * @param e 
     */
    const getServiceParam = (e:React.ChangeEvent<HTMLSelectElement>) =>{
      const service = e.target.value
      dispatch(webtoonActions.setSearchParamService(service));
      dispatch(fetchWebtoonList());
    }

    /**
     * 요일 기준 웹툰 검색 
     * @param e 
     */
    const getWeekParam = (week: {key : String, value : String }) =>{
      dispatch(webtoonActions.setSearchParamUpdateDay(week.key));
      dispatch(webtoonActions.setSelectedWeek(week.value));
      dispatch(webtoonActions.setPage(1));
      dispatch(fetchWebtoonList());
    }


    return(
    <div>
          <ul>    
              {weeks.map((item) => (
                <li key={item.key?.toString()}>
                  <a aria-current= {param.updateDay == item.key ? true : false} onClick={()=> getWeekParam(item)}>{item.value} </a>
                </li>
              ))}

              <select onChange={getServiceParam}>
                          {service.map((item,index)=>(
                              <option key={index} value = {item.toString()} > {item}</option>
                          ))}
              </select>
          </ul>  
    </div>
    )
}