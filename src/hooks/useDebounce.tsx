import { useState, useEffect } from 'react';

/**
 * useDebounce 커스텀 훅
 * @param {*} value debounce 적용값
 * @param {*} delay 지연시간
 * @returns debounce가 적용된 값
 */
const useDebounce = (value: string, delay: number): string => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
