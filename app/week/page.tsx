'use client';
import Provider from './components/Provider';
import WebtoonList from './components/WebtoonList';
import Weeks from './components/Weeks';

const WeekPage = () => {
  return (
    <div className="md:px-12 mx-auto justify-center md:mt-8">
      <Provider />
      <Weeks />
      <WebtoonList />
    </div>
  );
};

export default WeekPage;
