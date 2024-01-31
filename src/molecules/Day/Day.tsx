import React, { useMemo } from 'react';
import { Hour } from '../../atoms/Hour/Hour';
import './Day.css';
import { addMinutes, format } from 'date-fns';
import { ScheduleHour } from '../../types/terms/term';
import { DayProps } from '../../types/props/props';

export const Day = ({ day, idDr, hours }: DayProps) => {
  const getClass = (hour: string) => {
    const foundHour = hours.find((hourObj: ScheduleHour) => hourObj.hour === hour);
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

      hours.push(<Hour hour={formattedTime} day={day} idDr={idDr} className={getClass(formattedTime)} key={formattedTime} />);
      currentTime = addMinutes(currentTime, intervalMinutes);
    }

    return hours;
  }, [idDr, hours]);

  return (
    <>
      <div className="_divDay">
        <div className="_div-date">
          <div>{day}</div>
        </div>
        {renderHours}
      </div>
    </>
  );
};
