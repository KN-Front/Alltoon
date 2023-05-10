import React, {useState} from "react"
import  "../styles/Search.css"
import {useNavigate, Link} from "react-router-dom"
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
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    /**
     * 웹툰 검색 
     */ 
    const search = () =>{
        //setSearchValue("쎈놈");
        let param = {
            keyword : "쎈놈"
        }
        dispatch(fetchSearchList(param));
        
        navigate(`/search`);
    }

    return(
        <div>
            <div className="SearchBar__search_area--L61RY">
                <input type = "text" className="SearchBar__search_input--k5nfk"
                        onChange={handleChange}
                       />
                <button className="SearchBar__btn_search--SsL7v"
                        onClick={()=>{search()}}>
                        검색</button>
            </div>
        </div>
    );
}