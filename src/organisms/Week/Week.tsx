import React, { useEffect, useState } from 'react';
import { Day } from '../../molecules/Day/Day';
import './Week.css';
import { getDayName } from '../../utils/functions/function';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Button } from 'primereact/button';
import { baseUrlSchedule, sendAndReceiveData, updateData } from '../../api';
import { AvailableHours, ScheduleHour } from '../../types/terms/term';
import { addReduxHours } from '../../redux/schedule-slice';
import { DaysOfWeek } from '../../utils/enum';
import { WeekProps } from '../../types/props/props';

export const Week = ({ idDr }: WeekProps) => {
  const dispatch = useAppDispatch();
  const reduxHours = useAppSelector((state: any) => state.schedule.hours);
  const [availableHours, setAvailableHours] = useState<AvailableHours>({
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
  });

  const data = {
    idDr,
    newSchedule: reduxHours,
  };

  const getAvailableHoursDay = (dayIndex: DaysOfWeek) => {
    const dayKey = DaysOfWeek[dayIndex];
    return availableHours[dayKey as keyof AvailableHours];
  };

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      days[i] = <Day day={`${getDayName(i)}`} idDr={idDr} hours={getAvailableHoursDay(i)} />;
    }
    return days;
  };

  useEffect(() => {
    idDr &&
      sendAndReceiveData(idDr, baseUrlSchedule, 'hours').then((r) => {
        dispatch(addReduxHours(r));
      });
  }, [idDr]);

  useEffect(() => {
    if (reduxHours) {
      setAvailableHours({
        Sunday: reduxHours.filter((hour: ScheduleHour) => hour.day === 'Niedz'),
        Monday: reduxHours.filter((hour: ScheduleHour) => hour.day === 'Pon'),
        Tuesday: reduxHours.filter((hour: ScheduleHour) => hour.day === 'Wt'),
        Wednesday: reduxHours.filter((hour: ScheduleHour) => hour.day === 'Śr'),
        Thursday: reduxHours.filter((hour: ScheduleHour) => hour.day === 'Czw'),
        Friday: reduxHours.filter((hour: ScheduleHour) => hour.day === 'Pt'),
        Saturday: reduxHours.filter((hour: ScheduleHour) => hour.day === 'Sob'),
      });
    }
  }, [reduxHours]);

  return (
    <>
      <div className="container-week">
        <Button
          label="Zapisz"
          icon="pi pi-check"
          iconPos="right"
          onClick={() => updateData(data, baseUrlSchedule, 'update')}
          className="button-week"
        />
        <div className="div-week">{renderDays()}</div>
      </div>
    </>
  );
};
