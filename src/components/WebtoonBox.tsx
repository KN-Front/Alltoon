import React from 'react';
import { webtoons } from '@/types/webtoon';
import { truncateString } from '@/utils/text';

interface WebtoonBoxProps {
  webtoon: webtoons;
}

const WebtoonBox: React.FC<WebtoonBoxProps> = ({ webtoon }) => {
  return (
    <li className="flex flex-col cursor-pointer list-none w-[171px] min-w-[171px] box-content tap-highlight-transparent">
      <div className="relative flex flex-col border-none rounded-none">
        <span className="overflow-hidden relative z-10 flex w-full h-[224px] rounded-lg">
          <div className="relative w-full h-full bg-transparent animate-none flex backface-hidden rounded-lg overflow-hidden z-10">
            <img
              className="absolute w-full h-full inset-0 transform translate-z-0 backface-hidden object-cover image-optimize-contrast text-transparent"
              src={webtoon.thumbnail[0]}
              alt={webtoon.title}
            ></img>
          </div>
        </span>
      </div>

      {/* 
      <article>
          <div className="webtoonBox">
            <header>
              <a href={webtoon.url} target="_blank" rel="noopener noreferrer">
                <img
                  className="rounded bg-zinc-700/50 w-[500px] h-[260px]"
                  src={webtoon.thumbnail[0]}
                  alt={webtoon.title}
                />
              </a>
            </header>
          </div>
        </article> */}
      {/* <div className="w-[300px] h-[17px] mt-4">
        <a href={webtoon.url} target="_blank" rel="noopener noreferrer">
          <p
            title={webtoon.title}
            className="line-clamp-1 font-extralight	text-sm text-[16px] text-slate-900 dark:text-white capitalize"
          >
            {truncateString(webtoon.title, 14)}
          </p>
        </a>
      </div> */}
    </li>
  );
};

export default WebtoonBox;
