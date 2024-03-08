import React from 'react';
import './Hour.css';
import { useAppDispatch } from '../../hooks/redux';
import { toggleHour } from '../../redux/schedule-slice';
import { ScheduleHour } from '../../types/terms/term';

export const Hour = ({ day, idDr, hour, className }: ScheduleHour) => {
  const dispatch = useAppDispatch();

  return (
    <div onClick={() => dispatch(toggleHour({ day, idDr, hour }))} className={className}>
      {hour}
    </div>
  );
};
