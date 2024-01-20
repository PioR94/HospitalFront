import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user-slice';
import searchReducer from './search-slice';
import scheduleReducer from './schedule-slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
    schedule: scheduleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
