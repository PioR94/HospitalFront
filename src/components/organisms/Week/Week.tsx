import React, { useEffect, useState } from 'react';
import { Day } from '../../molecules/Day/Day';
import './Week.css';
import { changeClass, getDayName, getMonthName } from '../../../utils/functions/function';
import {
  initialDayOfWeek,
  initialMonth,
  initialNumberDay,
  initialYear,
} from '../../../utils/get-date';
import { renderDaysLogic } from '../../../utils/functions/render-days-logic';
import { useAppSelector } from '../../../hooks/redux';

interface Props {
  idDr: string;
}

export const Week = (props: Props) => {
  const hou = useAppSelector((state: any) => state.schedule.hours);

  useEffect(() => {
    console.log(hou);
  }, [hou]);

  const renderDays = (day: number) => {
    const days = [];

    for (let i = 0; i < 7; i++) {
      days[i] = <Day day={`${getDayName(i)}`} idDr={props.idDr} />;
    }
    return days;
  };

  return (
    <>
      <div className="container-week">
        <div className="_divWeek">{renderDays(0)}</div>
      </div>
    </>
  );
};
