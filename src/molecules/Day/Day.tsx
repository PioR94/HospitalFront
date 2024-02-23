import React, { useMemo } from 'react';
import { Hour } from '../../atoms/Hour/Hour';
import './Day.css';
import { addMinutes, format } from 'date-fns';
import { DayProps } from '../../types/props/props';
import { getClassForHour } from '../../utils/functions/get-class-for-hour';

export const Day = ({ day, idDr, hours }: DayProps) => {
  const renderHours = useMemo(() => {
    const startHour = 6;
    const endHour = 21;
    const intervalMinutes = 15;
    const hoursToRender = [];

    let currentTime = new Date();

    currentTime.setHours(startHour, 0, 0, 0);

    while (currentTime.getHours() < endHour) {
      const formattedTime = format(currentTime, 'HH:mm');

      hoursToRender.push(<Hour hour={formattedTime} day={day} idDr={idDr} className={getClassForHour(formattedTime, hours)} key={formattedTime} />);
      currentTime = addMinutes(currentTime, intervalMinutes);
    }

    return hoursToRender;
  }, [idDr, hours]);

  return (
    <div className="div-day">
      <div className="div-date">
        <div>{day}</div>
      </div>
      {renderHours}
    </div>
  );
};
