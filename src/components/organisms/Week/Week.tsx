import React, { useEffect, useState } from 'react';
import { Day } from '../../molecules/Day/Day';
import './Week.css';
import { getDayName, getMonthName } from '../../../utils/functions/function';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { Button } from 'primereact/button';
import { baseUrlSchedule, sendAndReceiveData, updateData } from '../../../api';

import { Schedule } from '../../../types/terms/term';
import { addReduxHours } from '../../../redux/schedule-slice';

interface Props {
  idDr: string;
}

export const Week = (props: Props) => {
  const dispatch = useAppDispatch();
  const reduxHours = useAppSelector((state: any) => state.schedule.hours);

  useEffect(() => {
    props.idDr &&
      sendAndReceiveData(props.idDr, baseUrlSchedule, 'hours').then((r) =>
        dispatch(addReduxHours(r)),
      );

      console.log(reduxHours);
  }, [props.idDr]);

  const data = {
    idDr: props.idDr,
    newSchedule: reduxHours,
  };

  const renderDays = (day: number) => {
    const days = [];

    for (let i = 0; i < 7; i++) {
      days[i] = <Day day={`${getDayName(i)}`} idDr={props.idDr} />;
    }
    return days;
  };

  const save = () => {
    updateData(data, baseUrlSchedule, 'update');
  };

  return (
    <>
      <div className="container-week">
        <Button label="Zapisz" severity="success" onClick={save} />
        <div className="_divWeek">{renderDays(0)}</div>
      </div>
    </>
  );
};
