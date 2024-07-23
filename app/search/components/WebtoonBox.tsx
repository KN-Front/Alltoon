import React from 'react';
import { webtoons } from '@/types/webtoon';

interface WebtoonBoxProps {
  webtoon: webtoons;
}

const WebtoonBox: React.FC<WebtoonBoxProps> = ({ webtoon }) => {
  return (
    <a
      href={webtoon.url}
      className="flex items-center p-2 no-underline transition duration-200 border rounded-md shadow-sm group border-light-bg-secondary dark:border-dark-bg-secondary hover:bg-light-bg-third dark:hover:bg-dark-bg-third hover:border-light-primary dark:hover:border-dark-white"
      aria-label={`View details for ${webtoon.title}`}
    >
      <div className="flex-none w-[60px] h-[60px] overflow-hidden rounded-lg">
        <img
          className="object-cover w-full h-full"
          src={webtoon.thumbnail[0]}
          alt={webtoon.title}
        />
      </div>
      <div className="flex flex-col ml-4">
        <div className="text-sm font-bold text-light-text dark:text-dark-white group-hover:text-light-primary dark:group-hover:text-dark-white">
          {webtoon.title}
        </div>
        <div className="text-xs text-light-secondary dark:text-dark-secondary">
          {webtoon.authors.join(', ')}
        </div>
      </div>
    </a>
  );
};

export default WebtoonBox;
