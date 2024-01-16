import React, {useRef, useEffect} from "react";
import { useSelector } from "react-redux";
import { webtoonList,searchParam,webtoonActions,selectedWeek } from "../features/webtoon/webtoonSlice"
import { useAppDispatch } from "../features/hooks"
import {fetchWebtoonList} from "../features/webtoon/webtoonActions"
/**
 * 웹툰 목록 컴포넌트
 * @returns 
 */
export function WebtoonList(){
    const list: Array<any> = useSelector(webtoonList);
    const param = useSelector(searchParam);
    const week = useSelector(selectedWeek)
    const scrollRef = useRef<any>(null);
    const dispatch = useAppDispatch();

    useEffect(() => {
const scrollContainer = scrollRef.current;
    
        const handleScroll = () => {
          const isScrolledToBottom =
            scrollContainer.scrollHeight - scrollContainer.scrollTop ===
            scrollContainer.clientHeight;
    
          if (isScrolledToBottom) {
            getNextWebtoonList();
          }
        };
    
        scrollContainer.addEventListener('scroll', handleScroll);
    
        return () => {
          scrollContainer.removeEventListener('scroll', handleScroll);
        };
      }, []);

      /**
       * 웹툰 검색
       * @returns 
       */
      const getNextWebtoonList = () => {
        
        dispatch(webtoonActions.setNextPage());
        dispatch(fetchWebtoonList());
      };



    return(
        <div>
            <div>
                <span> {week}요일 전체웹툰</span>
            </div>
            <div ref={scrollRef}>
                <ul>
                {
                    list?.map((data,key)=>(
                        <li key={key}>
                            <a href={data.url}>
                                <img src={data.img} alt={data.title}></img>
                            </a>
                            <div>
                                {data.title}
                                {data.author}
                                {data.fanCount}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}