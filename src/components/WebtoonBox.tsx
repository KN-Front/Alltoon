import React from 'react';
import { webtoons } from '@/types';

interface WebtoonBoxProps {
  webtoon: webtoons;
  webtoonIndex: number;
}

const WebtoonBox: React.FC<WebtoonBoxProps> = ({ webtoon, webtoonIndex }) => {
  return (
    <div key={webtoonIndex} className="rounded">
      <article>
        <div className="webtoonBox">
          <header>
            <a href={webtoon.url} target="_blank" rel="noopener noreferrer">
              <img
                className="rounded bg-zinc-700/50 w-[500px] h-[260px]"
                src={webtoon.img}
                alt={webtoon.title}
              />
            </a>
          </header>

          <div className="w-[300px] h-[17px] mt-4">
            <a href={webtoon.url} target="_blank" rel="noopener noreferrer">
              <p
                title={webtoon.title}
                className="line-clamp-1 font-extralight	text-sm text-[16px] text-slate-900 dark:text-white capitalize"
              >
                {webtoon.title}
              </p>
            </a>
          </div>
          <div className="h-[12px] mt-1">
            <p
              title={webtoon.author}
              className="line-clamp-1 mt-1 overflow-ellipsis font-extralight text-slate-500 dark:text-slate-400 text-sm"
            >
              {webtoon.author}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default WebtoonBox;
