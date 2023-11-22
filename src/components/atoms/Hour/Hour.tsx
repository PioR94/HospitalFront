import React, { useEffect, useState } from 'react';
import './Hour.css';
import { baseUrlTerm, sendAndReceiveData, sendData } from '../../../api';
import { changeClass } from '../../../utils/functions/function';

import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { toggleHour } from '../../../redux/schedule-slice';
import { isEqual } from 'lodash';
import { Schedule } from '../../../types/terms/term';

export const Hour = (props: Schedule) => {
  const [active, setActive] = useState(false);
  const dispatch = useAppDispatch();
  const reduxHours = useAppSelector((state: any) => state.schedule.hours);

  const term: Schedule = {
    day: props.day,
    idDr: props.idDr,
    hour: props.hour,
  };

  const addTerm = () => {
    dispatch(toggleHour(term));
  };

  return (
    <>
      <div onClick={addTerm} className={changeClass(active, '_hour-div-active', '_hour-div')}>
        {props.hour}
      </div>
    </>
  );
};
