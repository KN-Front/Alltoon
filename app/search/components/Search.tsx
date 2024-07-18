'use client';
import React, { useState } from 'react';
import { useAppState } from '@/hooks/useAppState';

const Search = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const { setSearchValue } = useAppState();

  const setKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const search = () => {
    setSearchValue(inputValue);
  };

  const handleEnter = (e: any) => {
    if (e.key === 'Enter') {
      setSearchValue(inputValue);
    }
  };

  return (
    <div>
      {/* md 이상 */}
      <div className="hidden rounded-lg md:block browse-banner bg-zinc-200 dark:bg-zinc-700/50 ">
        <div
          id="body"
          className="relative flex items-center justify-center mx-auto text-center"
        >
          <div className="flex flex-col mt-16">
            <h1 className="font-semibold text-slate-900 dark:text-dark-white md:text-xl lg:text-2xl">
              Find the webtoons you're looking for!
            </h1>
            <div className="flex space-x-2 mt-3.5 text-center items-center mx-auto bg-white dark:bg-dark-bg-third border border-zinc-700/20 px-4 rounded-lg">
              <div className="absolute justify-center mr-4 space-x-4">
                <button
                  onClick={() => {
                    search();
                  }}
                >
                  oo
                </button>
                <i className="fa-solid fa-search text-[17px] mt-1"></i>
              </div>
              <input
                className="text-slate-900 dark:text-dark-white bg-zinc-700/20 navbar-input px-6 border !w-[18rem] lg:!w-[32rem] border-zinc-700/10"
                placeholder="Search Webtoon"
                onChange={setKeyword}
                onKeyDown={handleEnter}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center block p-4 rounded-lg md:hidden bg-zinc-200 dark:bg-zinc-700/50">
        <input
          className="flex-1 bg-transparent border-none text-slate-900 dark:text-dark-white focus:outline-none"
          placeholder="제목, 작가명"
          onChange={setKeyword}
          onKeyDown={handleEnter}
          value={inputValue}
        />
        <button
          onClick={search}
          className="ml-2 text-light-text dark:text-dark-white"
        >
          검색
        </button>
      </div>
    </div>
  );
};

export default Search;
