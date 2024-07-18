import React from 'react';
import { webtoons } from '@/types/webtoon';

interface WebtoonBoxProps {
  webtoon: webtoons;
}

const WebtoonBox: React.FC<WebtoonBoxProps> = ({ webtoon }) => {
  return (
    <li className="flex flex-col cursor-pointer list-non4 md:w-[120px] lg:w-[140px] w-[120px] box-content tap-highlight-transparent">
      <div className="relative flex flex-col border-none rounded-none">
        <span className="relative z-10 flex w-full overflow-hidden rounded-lg">
          <div className="relative z-10 flex w-full h-[160px] md:h-[180px] lg:h-[200px] overflow-hidden bg-transparent rounded-lg animate-none backface-hidden">
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
