import { useState, useEffect } from 'react';

const useDarkMode = (): [boolean, () => void] => {
  const windowChecker = (): boolean => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches)
      return true;
    return false;
  }

  const localStorageChecker = (): boolean => {
    if (!localStorage.theme) return false;
    return localStorage.theme === 'dark' ? true : false;
  };

  const [dark, setDark] = useState(localStorageChecker() || windowChecker());

  const darkSetButton = () => {
    setDark((state) => {
      const update = !state;
      if (update) {
        localStorage.theme = 'dark';
      } else {
        localStorage.theme = 'light';
      }
      return update;
    });
  };

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return [dark, darkSetButton];
};

export default useDarkMode;