import React, { useState, useEffect } from 'react';
import Weeks from '@/pages/main/components/Weeks';
import WebtoonList from '@/pages/main/components/WebtoonList';
import Service from '@/pages/main/components/Service';

const MainPage = () => {
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

export default MainPage;
