import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../types/redux/user-state';

const initialState: UserState = {
  activeLogin: '',
  id: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.activeLogin = action.payload;
    },
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
  },
});

export const { setLogin, setId } = userSlice.actions;
export default userSlice.reducer;
