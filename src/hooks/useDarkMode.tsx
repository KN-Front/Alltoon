import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { darkMode, toggleDarkMode } from '@/common/utill/darkSlice';

export interface UseDark {
  isDark: boolean;
  onToggleDarkMode: (text: string) => void;
}

const useDarkMode = (): UseDark => {
  const isDark = useSelector(darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isDark) {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    } else {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const onToggleDarkMode = (text: string): void => {
    dispatch(toggleDarkMode(text));
  };

  return { isDark, onToggleDarkMode };
};

export default useDarkMode;
