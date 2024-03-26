import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import webtoonReducer from './webtoon/webtoonSlice';
export const store = configureStore({
  reducer: {
    webtoon: webtoonReducer,
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
