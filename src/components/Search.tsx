import React, {useState} from "react"
import "../styles/Search.css"
import {useNavigate, useLocation} from "react-router-dom"
import {fetchSearchList} from "../features/webtoon/webtoonActions"
import { useAppDispatch } from "../features/hooks"

/**
 * 웹툰 검색 컴포넌트 
 * @returns 
 */
export function Search(){
    
    /**
     * 입력값 
     */
    const [param, setParam] = useState({});
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const location = useLocation().pathname;
    /**
     * set 파라미터 
     * @param e 
     */
    const setKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParam({
            keyword : e.target.value
        });
    };

    /**
     * 웹툰 검색 
     */ 
    const search = () =>{
        dispatch(fetchSearchList(param));
        moveSearchPage();
    }

    /**
     * search Page 이동 
     */
    const moveSearchPage = () =>{
        if(location !== '/search'){
            navigate(`/search`);
        }
    }

    return(
        <div className="BrandBar__right--uve_C">
            <div className="BrandBar__search_wrap--Bevo_">
                <div className="SearchBar__search_area--L61RY">
                    <input type = "text" className="SearchBar__search_input--k5nfk"
                            onChange={setKeyword}
                        />
                    <button className="SearchBar__btn_search--SsL7v"
                            onClick={()=>{search()}}>
                            검색</button>
                </div>
            </div>
        </div>
    );
}