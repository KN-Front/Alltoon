import React from "react";
import '../styles/WebtoonList.css'
import { useSelector } from "react-redux";
import { webtoonList,searchParam } from "../features/webtoon/webtoonSlice"

/**
 * 웹툰 목록 컴포넌트
 * @returns 
 */
export function WebtoonList(){
    const list: Array<any> = useSelector(webtoonList);
    const selectedWeek = useSelector(searchParam).updateDay;

    const getWeek = () =>{
        if(selectedWeek == 'mon'){
            return '월'
        }else if(selectedWeek == 'tue'){
            return '화'
        }else if(selectedWeek == 'wed'){
            return '수'
        }else if(selectedWeek == 'thu'){
            return '목'
        }else if(selectedWeek == 'fri'){
            return '금'
        }else if(selectedWeek == 'sat'){
            return '토'
        }else if(selectedWeek == 'sun '){
            return '일'
        }
    }

    return(
        <div>
            <div className="ComponentHead__component_head--O2tPr">
                <div className="ComponentHead__title_area--IEQEG">
                    <h2 className="ComponentHead__title--TjYVo">
                        <span className="ComponentHead__text--dhKW7"> {getWeek()}요일 전체웹툰</span>
                    </h2>
                </div>
            </div>
            <ul className="ContentList__content_list--q5KXY">
            {
                list.map((data,key)=>(
                    <li key={key} className="item">
                        <a href={data.url}>
                            <div className="Poster__thumbnail_area--gviWY Poster__type160x207--EQAM8">
                                <div className="Poster__bullet_wrap--VcWFJ"></div>
                                <img src={data.img} alt={data.title} className="Poster__image--d9XTI"></img>
                            </div>
                        </a>
                        <div>
                            {data.title}
                            {data.author}
                            {data.service}
                            {data.fanCount}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}