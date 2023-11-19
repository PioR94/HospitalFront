import React, { useEffect, useState } from 'react';
import './Hour.css';
import { baseUrlTerm, sendAndReceiveData, sendData } from '../../../api';
import { changeClass } from '../../../utils/functions/function';
import { HourProps } from '../../../types/terms';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { toggleHour } from '../../../redux/schedule-slice';

export const Hour = (props: HourProps) => {
  const [active, setActive] = useState(false);
  const dispatch = useAppDispatch();

  const term: HourProps = {
    day: props.day,
    idDr: props.idDr,
    hour: props.hour,
  };

  const addTerm = () => {
    dispatch(toggleHour(term));
    setActive((perv) => !perv);
  };

  return (
    <>
      <div onClick={addTerm} className={changeClass(active, '_hour-div-active', '_hour-div')}>
        {props.hour}
      </div>
    </>
  );
};
