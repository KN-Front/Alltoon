import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { searchValue as searchValueState } from '@/recoil/webtoon/atoms';

const Search = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const setSearchValue = useSetRecoilState(searchValueState);

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
    <div className="browse-banner bg-zinc-200 rounded-lg">
      <div
        id="body"
        className="relative items-center text-center flex mx-auto justify-center"
      >
        <div className="flex flex-col mt-16">
          <h1 className="text-slate-900 dark:text-white text-2xl font-semibold">
            Find the webtoons you're looking for!
          </h1>
          <div className=" flex space-x-2 mt-3.5  text-center items-center mx-auto bg-white dark:bg-zinc-900/90 border border-zinc-700/20 px-4 rounded-lg">
            <div className="absolute justify-center space-x-4 mr-4">
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
              className=" text-slate-900 dark:text-white bg-zinc-700/20 navbar-input px-6 border !w-[18rem] lg:!w-[32rem] border-zinc-700/10"
              placeholder="Search Webtoon"
              onChange={setKeyword}
              onKeyDown={handleEnter}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
