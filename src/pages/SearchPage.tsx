import React , {useEffect, useState} from 'react'
import {searchList} from '../features/webtoon/webtoonSlice'
import {useSelector} from 'react-redux'
const SearchPage = () =>{
    

    const list: Array<any> = useSelector(searchList);

    const test = () =>{
        console.log(list);
    }
    return(
        <div>
            <button onClick={()=>test()}></button>
             {
                list.map((data)=>(
                    <div key={data._id}>
                        title : {data.title}
                        img : {data.img}
                        author : {data.author}
                        service : {data.service}
                        url : {data.url}
                        updateDays : {data.updateDays}
                        fanCount : {data.fanCount}
                    </div>
                ))
             }
        </div>
    )
}

export default SearchPage