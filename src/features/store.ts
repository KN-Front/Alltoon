import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import webtoonReducer from './webtoon/webtoonSlice';
import darkSlice from '@/common/utill/darkSlice';
export const store = configureStore({
  reducer: {
    webtoon: webtoonReducer,
    dark: darkSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
