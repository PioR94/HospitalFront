import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchState } from '../types/redux/search-state';

const initialState: SearchState = {
  city: '',
  specialization: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    updateSpecialization: (state, action: PayloadAction<string>) => {
      state.specialization = action.payload;
    },
  },
});

export const { updateCity, updateSpecialization } = searchSlice.actions;
export default searchSlice.reducer;
