import React from 'react';
import SearchList from '@/pages/template/SearchList';
import Search from '@/pages/template/Search';
import Sidebar from '@/pages/template/Sidebar';

const SearchPage = () => {
  return (
    <div className="lg:px-24 mx-auto justify-center lg:mt-8 pt-10">
      <Search />
      <div className="body mt-4 flex flew-row space-x-4">
        <Sidebar />
        <SearchList />
      </div>
    </div>
  );
};

export default SearchPage;
