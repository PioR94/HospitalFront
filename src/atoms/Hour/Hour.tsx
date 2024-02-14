import React from 'react';
import './Hour.css';
import { useAppDispatch } from '../../hooks/common/redux';
import { toggleHour } from '../../redux/schedule-slice';
import { ScheduleHour } from '../../types/terms/term';

export const Hour = ({ day, idDr, hour, className }: ScheduleHour) => {
  const dispatch = useAppDispatch();

  const term: ScheduleHour = {
    day,
    idDr,
    hour,
  };

  const addTerm = () => {
    dispatch(toggleHour(term));
  };

  return (
    <>
      <div onClick={addTerm} className={className}>
        {hour}
      </div>
    </>
  );
};
