import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";
import "../styles/WeekList.css"
export function WeekList(){
    const weeks = useSelector((state:RootState) => (state.webtoon.weeks))

    return(
    <div>
        <nav>
          <ul className="SubNavigationBar__snb_list--tAZvu">    
              {weeks.map((item, index) => (
                  <li key={index} className="SubNavigationBar__item--tmE0E">
                    <a className="SubNavigationBar__link--PXX5B">{item}</a>
                  </li>
              ))}
          </ul>  
        </nav> 
    </div>
    )
}