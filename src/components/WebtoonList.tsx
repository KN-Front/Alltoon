import React, {useRef, useEffect} from "react";
import '../styles/WebtoonList.css'
import { useSelector } from "react-redux";
import { webtoonList,searchParam,webtoonActions } from "../features/webtoon/webtoonSlice"
import { useAppDispatch } from "../features/hooks"
import {getWebtoonInfo} from "../common/api/webtoonAPI"

/**
 * 웹툰 목록 컴포넌트
 * @returns 
 */
export function WebtoonList(){
    const list: Array<any> = useSelector(webtoonList);
    const param = useSelector(searchParam);
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

      const getNextWebtoonList = () => {
        let nextParam = {...param}
        nextParam.page++;
        webtoonActions.setsearchParam(nextParam);
        let a = getWebtoonInfo(nextParam)
        
        // todo 웹툰 정보 가져오기
        // webtoonActions.setPushWebtoonList(a.webtoons);

      };


    return(
        <div>
            <div className="ComponentHead__component_head--O2tPr">
                <div className="ComponentHead__title_area--IEQEG">
                    <h2 className="ComponentHead__title--TjYVo">
                        <span className="ComponentHead__text--dhKW7"> {param.updateDay}요일 전체웹툰</span>
                    </h2>
                </div>
            </div>
            <div ref={scrollRef}
                style={{
                    height: '700px',
                    overflow: 'auto',
                }}
                className="webtoonListScroll"
                >
                <ul className="ContentList__content_list--q5KXY">
                {
                    list?.map((data,key)=>(
                        <li key={key} className="item">
                            <a href={data.url}>
                                <div className="Poster__thumbnail_area--gviWY Poster__type160x207--EQAM8">
                                    <div className="Poster__bullet_wrap--VcWFJ"></div>
                                    <img src={data.img} alt={data.title} className="Poster__image--d9XTI"></img>
                                </div>
                            </a>
                            <div className="ContentList__info_area--bXx7h">
                                <a className="ContentTitle__title_area--x24vt" href={data.url}>
                                    <span className="ContentTitle__title--e3qXt">
                                        <span className="text">
                                        {data.title}
                                        </span>
                                    </span>
                                </a>
                                <div className="ContentAuthor__author_wrap--fV7Lo">
                                    <a className="ContentAuthor__author--CTAAP">
                                    {data.author}
                                    </a>
                                </div>
                                {/* {data.fanCount} */}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}