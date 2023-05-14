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

    const [selectedWeek, setSelectedWeek] = useState('');
    const [selectedService, setSelectedService] = useState('');

    /**
     * 웹툰 검색
     * @param week 
     */
    const searchWebtoon = () =>{
      dispatch(fetchWebtoonList(param))
    }

    /**
     * 웹툰 서비스
     * @param e 
     */
    const getServiceParam = (e:React.ChangeEvent<HTMLSelectElement>) =>{
      dispatch(webtoonActions.setSearchParamService(e.target.value));
      searchWebtoon();
    }

    const getWeekParam = (week: string) =>{
      dispatch(webtoonActions.setSearchParamUpdateDay(week));
      searchWebtoon();
    }


    return(
    <div>
        <nav>
          <ul className="SubNavigationBar__snb_list--tAZvu">    
              {weeks.map((item) => (
                  <button key={item.key} onClick={()=> getWeekParam(item.key)}>{item.value}</button>
              ))}

              <select id="selectBox" value={selectedService} onChange={getServiceParam}>
                          {service.map((item,index)=>(
                              <option key={index} value = {item} > {item}</option>
                          ))}
              </select>
          </ul>  
        </nav> 
    </div>
    )
}