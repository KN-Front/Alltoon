import React from 'react';
import { useRecoilState } from 'recoil';
import { service as serviceState } from '@/recoil/webtoon/atoms';

const Service = () => {
  const serviceList = ['naver', 'kakao', 'kakaoPage'];
  const [service, setService] = useRecoilState(serviceState);
  const getServiceParam = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setService(e.target.value);
  };

  return (
    <div className="place-self-center">
      <label className="sr-only">Underline select</label>
      <select
        id="underline_select"
        className="block py-2.5 px-0 w-24 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        value={service}
        onChange={getServiceParam}
      >
        {serviceList.map((item, index) => (
          <option key={index} value={item.toString()}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Service;
