import { useAppState } from '@/hooks/useAppState';
import React from 'react';

const Provider = () => {
  const providerList = [
    { name: 'Naver', value: 'NAVER' },
    { name: 'Kakao', value: 'KAKAO' },
    { name: 'Kakao Page', value: 'KAKAO_PAGE' },
  ];

  const { weekProvider, setWeekProvider } = useAppState();
  const handleChangeProvider = (provider: string) => {
    setWeekProvider(provider);
  };

  return (
    <section className="flex gap-2 items-center md:p-4">
      {providerList.map((service) => (
        <button
          className={`text-xs md:text-base px-4 py-2 rounded-full border border-gray-300 text-gray-400 hover:bg-black hover:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black transition-colors duration-300 ${weekProvider === service.value ? 'bg-black text-white dark:text-black dark:bg-white' : 'text-black dark:text-gray-400'}`}
          key={service.value}
          value={service.value}
          onClick={() => {
            handleChangeProvider(service.value);
          }}
        >
          {service.name}
        </button>
      ))}
    </section>
  );
};

export default Provider;
