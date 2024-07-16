import React from 'react';
import { webtoons } from '@/types/webtoon';
import { truncateString } from '@/utils/text';

interface WebtoonBoxProps {
  webtoon: webtoons;
}

const WebtoonBox: React.FC<WebtoonBoxProps> = ({ webtoon }) => {
  return (
    <li className="flex flex-col cursor-pointer list-none box-content tap-highlight-transparent md:w-[171px] md:min-w-[171px] w-[120px] min-w:[120px] ">
      <div className="relative flex flex-col border-none rounded-none">
        <span className="overflow-hidden relative z-10 flex w-full h-[224px] rounded-lg">
          <div className="relative md: w-full md: h-full bg-transparent animate-none flex backface-hidden rounded-lg overflow-hidden z-10">
            <a href={webtoon.url}>
              <img
                className="absolute w-full h-full inset-0 transform translate-z-0 backface-hidden object-cover image-optimize-contrast text-transparent"
                src={webtoon.thumbnail[0]}
                alt={webtoon.title}
              />
            </a>
          </div>
        </span>
      </div>
      <div className="flex flex-col mt-2">
        <div className="flex">
          <div className="overflow-hidden text-ellipsis text-base leading-tight text-[#1b1b1b] text-left tracking-tightest whitespace-nowrap max-h-[33px]">
            <a title={webtoon.title} href={webtoon.url}>
              {webtoon.title}
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default WebtoonBox;
