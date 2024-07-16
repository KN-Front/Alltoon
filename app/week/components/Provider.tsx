'use client';
import { useAppState } from '@/hooks/useAppState';
import React from 'react';

const Service = () => {
  const serviceList = ['NAVER', 'KAKAO', 'KAKAO_PAGE'];
  const { weekProvider, setWeekProvider } = useAppState();
  const handleChangeProvider = (provider: string) => {
    setWeekProvider(provider);
  };

  return (
    <section className="flex gap-2 items-center md:p-4">
      {serviceList.map((item) => (
        <button
          className={`text-xs md:text-base px-4 py-2 rounded-full border border-gray-300 text-gray-400 hover:bg-black hover:text-white dark:bg-black dark:text-gray-400 dark:hover:bg-white dark:hover:text-black  ${weekProvider === item ? 'bg-black text-white dark:text-black dark:bg-white' : 'text-black dark:text-gray-400'}`}
          key={item}
          value={item.toString()}
          onClick={() => {
            handleChangeProvider(item);
          }}
        >
          {item}
        </button>
      ))}
    </section>
  );
};

export default Service;
