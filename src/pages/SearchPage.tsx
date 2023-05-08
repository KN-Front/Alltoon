import React , {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
const SearchPage = () =>{
    

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const [searchValue, setSearchValue] = useState('');

    useEffect(()=>{
        setSearchValue(getSearchValue);
    },[location.search, searchParams])


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
    

    return(
        <div>
             {searchValue} '로 검색했습니다.'
        </div>
    )
}

export default SearchPage