import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/features/store';
import { useSelector } from 'react-redux';

interface DarkModeState {
  isDark: boolean;
}

const initialState: DarkModeState = {
  isDark:
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches),
};

const darkSlice = createSlice({
  name: 'darkSlice',
  initialState,
  reducers: {
    toggleDarkMode: (state, action: PayloadAction<String>) => {
      const update = !state.isDark;
      // console.log(action.payload);
      if (update) {
        localStorage.theme = 'dark';
      } else {
        localStorage.theme = 'light';
      }
      state.isDark = update;
    },
  },
});

// 다크모드 get
export const darkMode = (state: RootState) => state.dark.isDark;

export const { toggleDarkMode } = darkSlice.actions;

export default darkSlice;
