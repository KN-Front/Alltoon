'use client';
import Service from './components/Service';
import WebtoonList from './components/WebtoonList';
import Weeks from './components/Weeks';

const WeekPage = () => {
  return (
    <div className="lg:px-24 mx-auto justify-center lg:mt-8 pt-10">
      <div className="flex flex-nowrap bg-zinc-200 dark:bg-dark-bg-secondary">
        <Weeks />
        <Service />
      </div>
      <WebtoonList />
    </div>
  );
};

export default WeekPage;
