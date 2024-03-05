import React, { useState, useEffect } from 'react';
import { Weeks } from '@/components/Weeks';
import { WebtoonList } from '@/components/WebtoonList';
import { useAppDispatch } from '@/features/hooks';
import { fetchWebtoonList } from '@/features/webtoon/webtoonActions';

const Main = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchWebtoonList());
    }, []);

    return (
        <div className="lg:px-24 mx-auto justify-center lg:mt-8 pt-10">
            <Weeks />
            <WebtoonList />
        </div>
    );
};

export default Main;
