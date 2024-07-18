'use client';
import React from 'react';
import { useAppState } from '@/hooks/useAppState';

const Sidebar = () => {
  const {
    searchProvider,
    setSearchProvider,
    naverWebtoonCount,
    kakaoWebtoonCount,
    kakaoPageWebtoonCount,
  } = useAppState();

  interface ServiceOption {
    id: string;
    label: string;
    count: number;
  }

  const services: ServiceOption[] = [
    {
      id: '',
      label: 'All',
      count: naverWebtoonCount + kakaoWebtoonCount + kakaoPageWebtoonCount,
    },
    { id: 'NAVER', label: 'Naver', count: naverWebtoonCount },
    { id: 'KAKAO', label: 'KaKao', count: kakaoWebtoonCount },
    { id: 'KAKAOPAGE', label: 'KaKaoPage', count: kakaoPageWebtoonCount },
  ];

  const handleServiceSelect = (serviceId: string) => {
    setSearchProvider(serviceId);
  };

  const renderServiceOption = (serviceOption: ServiceOption) => (
    <div
      key={serviceOption.id}
      className={`bg-zinc-700/10 justify-between button-animate p-2 px-3 text-sm flex cursor-pointer mt-2 rounded-sm hover:bg-zinc-700/20 ${
        searchProvider === serviceOption.id ? 'bg-zinc-700/50' : ''
      }`}
      onClick={() => handleServiceSelect(serviceOption.id)}
    >
      <p className="text-center">{serviceOption.label}</p>
      <p className="text-sm text-center">{serviceOption.count}</p>
    </div>
  );

  return (
    <>
      <div className="hidden md:block w-40 lg:w-52 xl:w-64 min-h-[64rem] overflow-auto rounded-lg bg-zinc-200 border border-zinc-700/10 dark:bg-zinc-700/50">
        <div className="p-4">
          <div className="flex flex-col mt-1 overflow-auto">
            {services.map(renderServiceOption)}
          </div>
        </div>
      </div>

      <section className="p-4 md:hidden">
        <div className="flex items-center gap-2 dark:border-zinc-500">
          {services.map((service) => (
            <button
              className={`px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm rounded-full border border-gray-300 text-gray-400 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black transition-colors duration-300 ${
                searchProvider === service.id
                  ? 'bg-black text-white dark:text-black dark:bg-white'
                  : 'text-black dark:text-gray-400'
              }`}
              key={service.id}
              value={service.id}
              onClick={() => handleServiceSelect(service.id)}
            >
              {service.label}
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default Sidebar;
