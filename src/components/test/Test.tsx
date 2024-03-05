import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Header from './Header';
import Search from './Search';
import Sidebar from './Sidebar';
import WebtoonList from './WebtoonList';
import Weeks from './Weeks';

const Test = () => {
    return (
        <div className="justify-center lg:w-[90rem] w-[30rem] overflow-y-hidden mx-auto transition-all duration-300">
            <Header />
            <div className="lg:px-24 mx-auto justify-center lg:mt-8 pt-10">
                {/* <Search />
                <div className="body mt-4 flex flew-row space-x-4">
                    <Sidebar />
                    <WebtoonList />
                </div> */}
                <Weeks />
                <WebtoonList />
            </div>
        </div>
    );
};

export default Test;
