import React from 'react';

const Weeks = () => {
    return (
        <div className="col-span-8 space-x-8 lg:mt-0 mt-4 justify-left flex items-center text-center mx-auto h-24 p-14">
            <div className="relative text-gray-400  font-medium transition-all duration-200 hover:text-white cursor-pointer">
                Mon
            </div>
            <div className="relative text-gray-400  font-medium transition-all duration-200 hover:text-white cursor-pointer">
                Tue
            </div>
            <div className="relative text-gray-400  font-medium transition-all duration-200 hover:text-white cursor-pointer">
                Wed
            </div>{' '}
            <div className="relative text-gray-400  font-medium transition-all duration-200 hover:text-white cursor-pointer">
                Thur
            </div>
            <div className="relative text-gray-400  font-medium transition-all duration-200 hover:text-white cursor-pointer">
                Fri
            </div>
            <div className="relative text-gray-400  font-medium transition-all duration-200 hover:text-white cursor-pointer">
                Sat
            </div>
            <div className="relative text-gray-400  font-medium transition-all duration-200 hover:text-white cursor-pointer">
                Sun
            </div>
        </div>
    );
};

export default Weeks;
