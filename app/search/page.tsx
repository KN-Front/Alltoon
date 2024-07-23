import ClientLayout from 'app/layout/ClientLayout';
import Search from './components/Search';
import SearchList from './components/SearchList';
import Sidebar from './components/Sidebar';

const SearchPage = () => {
  return (
    <ClientLayout>
      <div className="justify-center px-4 pt-10 mx-auto mt-8 overflow-hidden md:px-24">
        <Search />
        <div className="flex flex-col mt-4 md:flex-row">
          <Sidebar />
          <div className="flex-1 mt-4 md:ml-4 md:mt-0">
            <SearchList />
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default SearchPage;
