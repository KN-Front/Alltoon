import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../features/store";

export function WebtoonList(){
    const webtoonList = useSelector((state:RootState) => (state.webtoon.webtoonList))

    return(
        <div>
            {webtoonList}
        </div>
    )
}