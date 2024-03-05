import React from 'react';

const Header = () => {
    return (
        <header className="mx-auto justify-center lg:px-24 px-6 relative w-full h-24 lg:mb-0 mb-8 lg:grid grid-cols-1 lg:grid-cols-12">
            <div className="flex col-span-2 lg:justify-start justify-center items-center mx-auto mt-6">
                <a href="/">Home</a>
            </div>
            <div className="col-span-8 space-x-8 lg:mt-0 mt-4 justify-center flex items-center text-center mx-auto">
                <a href="/">
                    <div className="relative text-gray-400  font-medium transition-all duration-200 hover:text-white cursor-pointer">
                        Week
                    </div>
                </a>
                <a href="/mangas">
                    <div className="relative text-gray-400  font-medium transition-all duration-200 hover:text-white cursor-pointer">
                        Search
                    </div>
                </a>
            </div>
        </header>
    );
};

export default Header;
