import React from 'react';
import { useSelector } from 'react-redux';
import { loading } from '@/features/webtoon/webtoonSlice';
import '@/styles/loading.css';
/**
 * 웹툰 검색 컴포넌트 
 * @returns 
 */
const Loading = () =>{
    
    const isLoading:boolean = useSelector(loading);

    return(
        isLoading ? (
        <div className="dim">
            <div className="loading-container">
                <div className="loading-spinner"></div>
                <p className="loading-text">Loading...</p>
            </div>
        </div>
        ) : null
    )
}

export default Loading