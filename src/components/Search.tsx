import React, {useState} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import {fetchSearchList} from '@/features/webtoon/webtoonActions';
import { useAppDispatch } from '@/features/hooks';
import { getSearchWebtoonInfoParam } from '@/types';

/**
 * 웹툰 검색 컴포넌트 
 * @returns 
 */
export function Search(){
    
    /**
     * 입력값 
     */
    const [param, setParam] = useState<getSearchWebtoonInfoParam>({ keyword : ''});
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

    const handleEnter = (e: any) => {
        if (e.key === 'Enter') {
            search();
        }
    };

    return(
        <div className="seaerch">
            <input type = "text" onChange={setKeyword} onKeyDown={handleEnter}/>
            <button onClick={()=>{search()}}>
                    검색</button>
        </div>
    );
}