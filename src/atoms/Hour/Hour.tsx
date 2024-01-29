import React, { useEffect, useState } from 'react';
import './Hour.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { toggleHour } from '../../redux/schedule-slice';
import { ScheduleHour } from '../../types/terms/term';

export const Hour = (props: ScheduleHour) => {
  const dispatch = useAppDispatch();

  const term: ScheduleHour = {
    day: props.day,
    idDr: props.idDr,
    hour: props.hour,
  };

  const addTerm = () => {
    dispatch(toggleHour(term));
  };

  return (
    <>
      <div onClick={addTerm} className={props.className}>
        {props.hour}
      </div>
    </>
  );
};
