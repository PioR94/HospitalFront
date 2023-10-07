import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../types/redux/user-state';
import { SearchState } from '../types/redux/search-state';

const initialState: SearchState = {
  city: '',
  specialization: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setSpecialization: (state, action: PayloadAction<string>) => {
      state.specialization = action.payload;
    },
  },
});

export const { setCity, setSpecialization } = searchSlice.actions;
export default searchSlice.reducer;
