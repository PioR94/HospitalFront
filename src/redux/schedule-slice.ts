import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScheduleState } from '../types/redux/schedule-state';
import { ScheduleHour } from '../types/terms/term';

const initialState: ScheduleState = {
  hours: [],
};

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    toggleHour: (state, action: PayloadAction<ScheduleHour>) => {
      const existingHourIndex = state.hours.findIndex(
        (hour) => hour.day === action.payload.day && hour.hour === action.payload.hour,
      );

      if (existingHourIndex !== -1) {
        state.hours.splice(existingHourIndex, 1);
      } else {
        state.hours.push(action.payload);
      }
    },
    addReduxHours: (state, action: PayloadAction<ScheduleHour[]>) => {
      state.hours.push(...action.payload);
    },
  },
});

export const { toggleHour, addReduxHours } = scheduleSlice.actions;
export default scheduleSlice.reducer;
