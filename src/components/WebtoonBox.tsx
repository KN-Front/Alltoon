import React from 'react';
import { webtoons } from '@/types';
import { truncateString } from '@/common/utill/text';

interface WebtoonBoxProps {
  webtoon: webtoons;
}

const WebtoonBox: React.FC<WebtoonBoxProps> = ({ webtoon }) => {
  return (
    <div className="rounded">
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

          <div className="w-[300px] h-[17px] mt-4">
            <a href={webtoon.url} target="_blank" rel="noopener noreferrer">
              <p
                title={webtoon.title}
                className="line-clamp-1 font-extralight	text-sm text-[16px] text-slate-900 dark:text-white capitalize"
              >
                {truncateString(webtoon.title, 14)}
              </p>
            </a>
          </div>
          <div className="h-[12px] mt-1">
            <p
              title={webtoon.author}
              className="line-clamp-1 mt-1 overflow-ellipsis font-extralight text-slate-500 dark:text-slate-400 text-sm"
            >
              {/* {truncateString(webtoon.author, 15)} */}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default WebtoonBox;
