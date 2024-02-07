import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../types/redux/user-state';

const initialState: UserState = {
  idUser: '',
  login: '',
  name: '',
  lastName: '',
  mail: '',
  street: '',
  code: '',
  city: '',
  specialization: '',
  price: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setField: (state, action: PayloadAction<{ field: keyof UserState; value: string }>) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { setField } = userSlice.actions;
export default userSlice.reducer;
