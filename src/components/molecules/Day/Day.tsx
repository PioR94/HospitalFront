import React, { useEffect, useMemo } from 'react';
import { Hour } from '../../atoms/Hour/Hour';
import './Day.css';
import { addMinutes, format } from 'date-fns';
import { ScheduleHour } from '../../../types/terms/term';

interface Props {
  day: string;
  idDr: string;
  hours: ScheduleHour[];
}

export const Day = (props: Props) => {
  const getClass = (hour: string) => {
    const foundHour = props.hours.find((hourObj: ScheduleHour) => hourObj.hour === hour);
    console.log(foundHour);
    return foundHour ? '_hour-div-active' : '_hour-div';
  };

  const renderHours = useMemo(() => {
    const startHour = 6;
    const endHour = 21;
    const intervalMinutes = 15;
    const hours = [];

    let currentTime = new Date();
    currentTime.setHours(startHour, 0, 0, 0);

    while (currentTime.getHours() < endHour) {
      const formattedTime = format(currentTime, 'HH:mm');

      hours.push(
        <Hour
          key={formattedTime}
          hour={formattedTime}
          day={props.day}
          idDr={props.idDr}
          className={getClass(formattedTime)}
        />,
      );
      currentTime = addMinutes(currentTime, intervalMinutes);
    }

    return hours;
  }, [props.idDr, props.hours]);

  return (
    <>
      <div className="_divDay">
        <div className="_div-date">
          <div>{props.day}</div>
        </div>
        {renderHours}
      </div>
    </>
  );
};
