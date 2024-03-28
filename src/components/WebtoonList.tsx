import { webtoonInfo } from '@/types';
import Loading from './WebtoonLoading';
import { useRecoilValue } from 'recoil';
import {
  service as serviceState,
  updateDay as updateDayState,
} from '@/recoil/webtoon/atoms';
import { useQuery } from 'react-query';
import { getWebtoonInfo } from '@/common/api/webtoonAPI';

/**
 * 웹툰 목록 컴포넌트
 * @returns
 */
const WebtoonList = () => {
  const updateDay = useRecoilValue(updateDayState);
  const service = useRecoilValue(serviceState);

  const { isLoading, data, isError, error } = useQuery<webtoonInfo>(
    ['getWebtoonInfo', updateDay, service],
    () => {
      return getWebtoonInfo({
        page: 1,
        perPage: 50,
        service: service,
        updateDay: updateDay,
      });
    },
  );

  return (
    <div className="webtoonRow">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full">
          <div
            id="body"
            className="grid grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-4 p-4"
          >
            {data?.webtoons.map((data, key) => (
              <div className="rounded">
                <article key={key}>
                  <div className="webtoonBox">
                    <header>
                      <a href={data.url}>
                        <img
                          className="rounded bg-zinc-700/50 w-[500px] h-[260px]"
                          src={data.img}
                          alt={data.title}
                        ></img>
                      </a>
                    </header>

                    <div>
                      <a href={data.url}>
                        <p className="font-medium text-[16px] text-slate-900 dark:text-white capitalize line-clamp-1">
                          {data.title}
                        </p>
                        <p className="font-medium text-slate-500 dark:text-slate-400 text-sm">
                          {data.author}
                        </p>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WebtoonList;
