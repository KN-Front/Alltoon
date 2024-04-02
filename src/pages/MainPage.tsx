import React, { useState, useEffect } from 'react';
import Weeks from '@/components/Weeks';
import WebtoonList from '@/components/WebtoonList';
import Service from '@/components/Service';

const Main = () => {
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

export default Main;
