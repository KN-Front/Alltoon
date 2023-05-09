import React, { MouseEventHandler, useState } from "react";
import { useSelector } from "react-redux";
import { weeksList } from "../features/webtoon/webtoonSlice";
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
    const [selectedWeek, setSelectedWeek] = useState('');

    const searchWebtoon = (week: string) =>{
      setSelectedWeek(week);
      let param = {
        service : "naver",
        updateDay : selectedWeek
      }
      dispatch(fetchWebtoonList(param))

    }

    return(
    <div>
        <nav>
          <ul className="SubNavigationBar__snb_list--tAZvu">    
              {weeks.map((item) => (
                  <button key={item.key} onClick={()=> searchWebtoon(item.key)}>{item.value}</button>
              ))}
          </ul>  
        </nav> 
    </div>
    )
}