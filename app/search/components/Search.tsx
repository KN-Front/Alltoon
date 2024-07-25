import React, { useState, useEffect } from 'react';
import { useAppState } from '@/hooks/useAppState';
import useDebounce from '@/hooks/useDebounce';

const Search = () => {
  const { setSearchValue } = useAppState();
  const [inputValue, setInputValue] = useState('');

  const debounceSearchTerm = useDebounce(inputValue, 500);

  useEffect(() => {
    setSearchValue(debounceSearchTerm);
  }, [debounceSearchTerm, setSearchValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
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
                <button>
                  oo<i className="fa-solid fa-search text-[17px] mt-1"></i>
                </button>
              </div>
              <input
                className="text-slate-900 dark:text-dark-white bg-zinc-700/20 navbar-input px-6 border !w-[18rem] lg:!w-[32rem] border-zinc-700/10"
                placeholder="Search Webtoon"
                onChange={handleInputChange}
                value={inputValue}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center block p-4 rounded-lg md:hidden bg-zinc-200 dark:bg-zinc-700/50">
        <input
          className="flex-1 text-xs bg-transparent border-none text-slate-900 dark:text-dark-white focus:outline-none sm:text-sm"
          placeholder="제목, 작가명"
          onChange={handleInputChange}
          value={inputValue}
        />
      </div>
    </div>
  );
};

export default Search;
