import React from 'react';
import { webtoons } from '@/types/webtoon';

interface WebtoonBoxProps {
  webtoon: webtoons;
}

const WebtoonBox: React.FC<WebtoonBoxProps> = ({ webtoon }) => {
  return (
    <div className="flex items-center p-2 border border-gray-200 rounded-md shadow-sm">
      <div className="flex-none w-[60px] h-[60px] overflow-hidden rounded-lg">
        <a href={webtoon.url}>
          <img
            className="object-cover w-full h-full"
            src={webtoon.thumbnail[0]}
            alt={webtoon.title}
          />
        </a>
      </div>
      <div className="flex flex-col ml-4">
        <div className="text-sm font-bold text-black dark:text-white">
          <a href={webtoon.url} title={webtoon.title}>
            {webtoon.title}
          </a>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {webtoon.authors.join(', ')}
        </div>
      </div>
    </div>
  );
};

export default WebtoonBox;
