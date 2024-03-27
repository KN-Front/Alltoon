import React from 'react';
import { week } from '@/types';
import { useRecoilState } from 'recoil';
import { updateDay as updateDayState } from '@/recoil/webtoon/atoms';

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
  const [updateDay, setUpdateDay] = useRecoilState(updateDayState);

  const getWeekParam = (week: week) => {
    setUpdateDay(week.key);
  };

  return (
    <div className="col-span-8 space-x-8 lg:mt-0 mt-4 justify-left flex items-center text-center mx-auto h-24 p-14">
      {weeks.map((item) => (
        <div
          className={`relative text-gray-400  font-medium transition-all duration-200 hover:text-white cursor-pointer ${
            item.key === updateDay ? 'text-white ' : ''
          }`}
          key={item.key}
          onClick={() => getWeekParam(item)}
        >
          {item.key}
        </div>
      ))}
    </div>
  );
};

export default Weeks;
