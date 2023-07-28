import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../types/redux/app-state';

// Poprawiona definicja stanu aplikacji

const initialState: AppState = {
  activeLogin: '',
};

const loginSlice = createSlice({
  name: 'activeLogin',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.activeLogin = action.payload;
    },
  },
});

export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;
