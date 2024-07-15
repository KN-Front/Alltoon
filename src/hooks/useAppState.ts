import { useContext } from 'react';
import { GlobalContext } from '@/store/GlobalContext';

export const useAppState = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useAppState must be used within Provider');
  }
  return context;
};
