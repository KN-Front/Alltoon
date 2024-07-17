'use client';
import Head from 'next/head';
import Provider from './components/Provider';
import WebtoonList from './components/WebtoonList';
import Weeks from './components/Weeks';

const WeekPage = () => {
  return (
    <>
      <Head>
        <title>이번 주 웹툰 | 올툰</title>
        <meta
          name="description"
          content="이번 주에 업데이트된 최신 웹툰을 확인하세요!"
        />
      </Head>
      <div className="md:px-12 mx-auto justify-center md:mt-8">
        <Provider />
        <Weeks />
        <WebtoonList />
      </div>
    </>
  );
};

export default WeekPage;
