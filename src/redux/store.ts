import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user-slice';
import searchReducer from './search-slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
