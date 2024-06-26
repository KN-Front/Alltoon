import { Routes, Route, Outlet } from 'react-router-dom';
import Main from '@/pages/main/MainPage';
import SearchPage from '@/pages/search/SearchPage';
import Header from '@/components/Header';
import FloatingButtons from '@/components/FloatingButtons';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <FloatingButtons />
    </div>
  );
};

const App = () => {
  return (
    <div className="justify-center lg:w-[90rem] w-[30rem] overflow-y-hidden mx-auto transition-all duration-300">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
