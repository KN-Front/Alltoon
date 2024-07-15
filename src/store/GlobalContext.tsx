import React, { createContext, ReactNode } from 'react';
import { useState } from 'react';

interface ContextProps {
  weekProvider: string;
  setWeekProvider: React.Dispatch<React.SetStateAction<string>>;
  updateDay: string;
  setUpdateDay: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchProvider: string;
  setSearchProvider: React.Dispatch<React.SetStateAction<string>>;
  naverWebtoonCount: number;
  setNaverWebtoonCount: React.Dispatch<React.SetStateAction<number>>;
  kakaoWebtoonCount: number;
  setKakaoWebtoonCount: React.Dispatch<React.SetStateAction<number>>;
  kakaoPageWebtoonCount: number;
  setKakaoPageWebtoonCount: React.Dispatch<React.SetStateAction<number>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext<ContextProps | null>(null);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [weekProvider, setWeekProvider] = useState('NAVER');
  const [updateDay, setUpdateDay] = useState('mon');
  const [searchValue, setSearchValue] = useState('');
  const [searchProvider, setSearchProvider] = useState('ALL');
  const [naverWebtoonCount, setNaverWebtoonCount] = useState(0);
  const [kakaoWebtoonCount, setKakaoWebtoonCount] = useState(0);
  const [kakaoPageWebtoonCount, setKakaoPageWebtoonCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        weekProvider,
        setWeekProvider,
        updateDay,
        setUpdateDay,
        searchValue,
        setSearchValue,
        searchProvider,
        setSearchProvider,
        naverWebtoonCount,
        setNaverWebtoonCount,
        kakaoWebtoonCount,
        setKakaoWebtoonCount,
        kakaoPageWebtoonCount,
        setKakaoPageWebtoonCount,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
