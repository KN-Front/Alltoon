import React from 'react';
import { week } from '@/types/webtoon';
import { useAppState } from '@/hooks/useAppState';

const Weeks = () => {
  const weeks = [
    { key: 'mon', value: '월' },
    { key: 'tue', value: '화' },
    { key: 'wed', value: '수' },
    { key: 'thu', value: '목' },
    { key: 'fri', value: '금' },
    { key: 'sat', value: '토' },
    { key: 'sun', value: '일' },
  ];
  const { updateDay, setUpdateDay } = useAppState();

  const handleWeekClick = (week: week) => {
    setUpdateDay(week.key);
  };

  return (
    <section className="relative flex mb-5 h-10 border-b border-gray-300">
      <ul className="p-0 flex flex-row w-full items-center justify-between m-0 h-10 font-medium">
        {weeks.map((item) => (
          <li
            className={`flex w-full h-full items-center text-gray-400 justify-center cursor-pointer text-base leading-snug hover:text-slate-900 dark:hover:text-white ${
              item.key === updateDay ? 'text-slate-900 dark:text-white' : ''
            }`}
            key={item.key}
            onClick={() => handleWeekClick(item)}
          >
            {item.key}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Weeks;
