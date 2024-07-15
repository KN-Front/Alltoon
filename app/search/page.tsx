import Search from './components/Search';
import SearchList from './components/SearchList';
import Sidebar from './components/Sidebar';

const SearchPage = () => {
  return (
    <div className="lg:px-24 mx-auto justify-center lg:mt-8 pt-10 overflow-hidden">
      <Search />
      <div className="body mt-4 flex flew-row space-x-4">
        <Sidebar />
        <SearchList />
      </div>
    </div>
  );
};

export default SearchPage;
