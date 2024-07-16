'use client';
import Service from './components/Service';
import WebtoonList from './components/WebtoonList';
import Weeks from './components/Weeks';

const WeekPage = () => {
  return (
    <div className="md:px-12 mx-auto justify-center md:mt-8">
      {/* <div className="flex flex-nowrap bg-zinc-200 dark:bg-dark-bg-secondary">
        <Weeks />
        <Service />
      </div> */}
      <Weeks />
      <WebtoonList />
    </div>
  );
};

export default WeekPage;
