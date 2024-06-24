import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { searchService } from '@/recoil/webtoon/atoms';
import {
  naverWebtoonCount as naverWebtoonCountState,
  kakaoWebtoonCount as kakaoWebtoonCountState,
  kakaoPageWebtoonCount as kakaoPageWebtoonCountState,
} from '@/recoil/webtoon/atoms';

const Sidebar = () => {
  const [service, setService] = useRecoilState(searchService);
  const naverWebtoonCount = useRecoilValue(naverWebtoonCountState);
  const kakaoWebtoonCount = useRecoilValue(kakaoWebtoonCountState);
  const kakaoPageWebtoonCount = useRecoilValue(kakaoPageWebtoonCountState);

  interface ServiceOption {
    id: string;
    label: string;
    count: number;
  }

  const services: ServiceOption[] = [
    {
      id: 'ALL',
      label: 'All',
      count: naverWebtoonCount + kakaoWebtoonCount + kakaoPageWebtoonCount,
    },
    { id: 'NAVER', label: 'Naver', count: naverWebtoonCount },
    { id: 'KAKAO', label: 'KaKao', count: kakaoWebtoonCount },
    { id: 'KAKAOPAGE', label: 'KaKaoPage', count: kakaoPageWebtoonCount },
  ];

  const handleServiceSelect = (serviceId: string) => {
    setService(serviceId);
  };

  const renderServiceOption = (serviceOption: ServiceOption) => (
    <div
      key={serviceOption.id}
      className={`bg-zinc-700/10 justify-between button-animate p-2 px-3 text-sm flex cursor-pointer mt-2 rounded-sm hover:bg-zinc-700/20 ${
        service === serviceOption.id ? 'bg-zinc-700/50' : ''
      }`}
      onClick={() => handleServiceSelect(serviceOption.id)}
    >
      <p className="text-center">{serviceOption.label}</p>
      <p className="text-center text-sm">{serviceOption.count}</p>
    </div>
  );

  return (
    <div className="hidden lg:block w-60 min-h-[64rem] overflow-auto rounded-lg bg-zinc-200 border border-zinc-700/10 dark:bg-zinc-700/50">
      <div className="p-4">
        <div className="flex flex-col mt-1 overflow-auto">
          {services.map(renderServiceOption)}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
