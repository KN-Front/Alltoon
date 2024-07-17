import React from 'react';
import { webtoons } from '@/types/webtoon';

interface WebtoonBoxProps {
  webtoon: webtoons;
}

const WebtoonBox: React.FC<WebtoonBoxProps> = ({ webtoon }) => {
  return (
    <li className="flex flex-col cursor-pointer list-none w-[171px] min-w-[171px] box-content tap-highlight-transparent">
      <div className="relative flex flex-col border-none rounded-none">
        <span className="overflow-hidden relative z-10 flex w-full h-[224px] rounded-lg">
          <div className="relative z-10 flex w-full h-full overflow-hidden bg-transparent rounded-lg animate-none backface-hidden">
            <img
              className="inset-0 object-cover w-full h-full text-transparent transform translate-z-0 backface-hidden image-optimize-contrast"
              src={webtoon.thumbnail[0]}
              alt={webtoon.title}
            ></img>
          </div>
        </span>
      </div>
    </li>
  );
};

export default WebtoonBox;
