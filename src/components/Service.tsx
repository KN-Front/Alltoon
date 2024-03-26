import React from 'react';
import { useSelector } from 'react-redux';
import { serviceList, webtoonActions } from '@/features/webtoon/webtoonSlice';
import { useAppDispatch } from '@/features/hooks';
import { fetchWebtoonList } from '@/features/webtoon/webtoonActions';

const Service = () => {
  const dispatch = useAppDispatch();
  const service = useSelector(serviceList);

  const getServiceParam = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const service = e.target.value;
    dispatch(webtoonActions.setSearchParamService(service));
    dispatch(fetchWebtoonList());
  };

  return (
    <div className="place-self-center">
      <label className="sr-only">Underline select</label>
      <select
        id="underline_select"
        className="block py-2.5 px-0 w-24 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        onChange={getServiceParam}
      >
        {service.map((item, index) => (
          <option key={index} value={item.toString()}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Service;
