import React, { useEffect, useState } from 'react';
import './Hour.css';
import { baseUrlTerm, sendAndReceiveData, sendData } from '../../../api';
import { changeClass } from '../../../utils/functions/function';

import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { toggleHour } from '../../../redux/schedule-slice';
import { isEqual } from 'lodash';
import { ScheduleHour } from '../../../types/terms/term';

export const Hour = (props: ScheduleHour) => {
  const [active, setActive] = useState(false);
  const dispatch = useAppDispatch();
  const reduxHours = useAppSelector((state: any) => state.schedule.hours);

  const term: ScheduleHour = {
    day: props.day,
    idDr: props.idDr,
    hour: props.hour,
  };

  const addTerm = () => {
    dispatch(toggleHour(term));
  };

  useEffect(() => {
    console.log(props.className);
  }, []);

  return (
    <>
      <div onClick={addTerm} className={props.className}>
        {props.hour}
      </div>
    </>
  );
};
