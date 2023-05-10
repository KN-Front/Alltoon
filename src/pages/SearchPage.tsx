import React , {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import {getSearchWebtoonInfo } from '../common/api/webtoonAPI'

const SearchPage = () =>{
    

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const [searchValue, setSearchValue] = useState('');
    const [webtoonList, setWebtoonList] = useState({});
    
    useEffect(()=>{
        setSearchValue(getSearchValue);
        
        let param = {
            keyword : searchValue
        }

        // let result = getSearchWebtoonInfo(param);
        // setWebtoonList(result);
    },[location.search, searchParams, webtoonList])


    /**
     * 검색한 값 반환
     * @returns 
     */
    const getSearchValue = (): string =>{
        
        let searchTerm = searchParams.get("search")?.toString();
        
        if(searchTerm){
            return searchTerm;
        }else{
            return ' ';
        }
    }
    
    const test = () =>{
        debugger
    }

    return(
        <div>
             {searchValue} '로 검색했습니다.'
            <button onClick={()=>test}>gd</button>
        </div>
    )
}

export default SearchPage