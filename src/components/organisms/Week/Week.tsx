import React, { useEffect, useState } from 'react';
import { Day } from '../../molecules/Day/Day';
import './Week.css';
import { getDayName, getMonthName } from '../../../utils/functions/function';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { Button } from 'primereact/button';
import { baseUrlSchedule, sendAndReceiveData, updateData } from '../../../api';
import { AvailableHours, ScheduleHour } from '../../../types/terms/term';
import { addReduxHours } from '../../../redux/schedule-slice';
import { DaysOfWeek } from '../../../utils/enum';

interface Props {
  idDr: string;
}

export const Week = (props: Props) => {
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
    idDr: props.idDr,
    newSchedule: reduxHours,
  };

  const getAvailableHoursDay = (dayIndex: DaysOfWeek) => {
    const dayKey = DaysOfWeek[dayIndex];
    return availableHours[dayKey as keyof AvailableHours];
  };

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      days[i] = <Day day={`${getDayName(i)}`} idDr={props.idDr} hours={getAvailableHoursDay(i)} />;
    }
    return days;
  };

  useEffect(() => {
    props.idDr &&
      sendAndReceiveData(props.idDr, baseUrlSchedule, 'hours').then((r) => {
        dispatch(addReduxHours(r));
      });
  }, [props.idDr]);

  useEffect(() => {
    if (reduxHours) {
      setAvailableHours({
        Sunday: reduxHours.filter((hour: ScheduleHour) => hour.day === 'Niedziela'),
        Monday: reduxHours.filter((hour: ScheduleHour) => hour.day === 'Poniedziałek'),
        Tuesday: reduxHours.filter((hour: ScheduleHour) => hour.day === 'Wtorek'),
        Wednesday: reduxHours.filter((hour: ScheduleHour) => hour.day === 'Środa'),
        Thursday: reduxHours.filter((hour: ScheduleHour) => hour.day === 'Czwartek'),
        Friday: reduxHours.filter((hour: ScheduleHour) => hour.day === 'Piątek'),
        Saturday: reduxHours.filter((hour: ScheduleHour) => hour.day === 'Sobota'),
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
        <div className="_divWeek">{renderDays()}</div>
      </div>
    </>
  );
};
