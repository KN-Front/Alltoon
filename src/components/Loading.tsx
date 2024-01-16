import React, {useState} from "react"
import {useNavigate, useLocation} from "react-router-dom"
import {fetchSearchList} from "../features/webtoon/webtoonActions"
import { useAppDispatch } from "../features/hooks"
import "../styles/loading.css"
/**
 * 웹툰 검색 컴포넌트 
 * @returns 
 */
const Loading = () =>{
    
    const dispatch = useAppDispatch();

    return(
        <div className="dim">
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p className="loading-text">Loading...</p>
            </div>
        </div>
        
    );

    
}

export default Loading