import React from 'react'
import {searchList} from '../features/webtoon/webtoonSlice'
import {useSelector} from 'react-redux'
const SearchPage = () =>{
    
    const list: Array<any> = useSelector(searchList);

    if(list.length){
        return(
            <div>
                <button></button>
                 { list.map((data)=>(
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
    }else{
        return(
            <div>
                값이 없습니다.
            </div>
        )
    }
    
}

export default SearchPage