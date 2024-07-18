import Search from './components/Search';
import SearchList from './components/SearchList';
import Sidebar from './components/Sidebar';

const SearchPage = () => {
  return (
    <div className="justify-center px-24 pt-10 mx-auto mt-8 overflow-hidden">
      <Search />
      <div className="mt-4 md:flex">
        <Sidebar />
        <SearchList />
      </div>
    </div>
  );
};

export default SearchPage;
