import React, { useEffect, useMemo } from 'react';
import { Day } from '../../molecules/Day/Day';
import './Week.css';
import { getDayName } from '../../utils/functions/function';
import { baseUrlSchedule, updateData } from '../../api';
import { Button } from 'primereact/button';
import { WeekProps } from '../../types/props/props';
import { useAvailableHours } from '../../hooks/components/Week/useAvailableHours';
import { useInitializeData } from '../../hooks/components/Week/useInitializeData';
import { useAppSelector } from '../../hooks/common/redux';
import { RootState } from '../../redux/store';

export const Week = ({ idDr }: WeekProps) => {
  const reduxHours = useAppSelector((state: RootState) => state.schedule.hours);

  const { getAvailableHoursDay } = useAvailableHours();
  useInitializeData(idDr);

  const daysList = useMemo(() => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      days[i] = <Day day={`${getDayName(i)}`} idDr={idDr} hours={getAvailableHoursDay(i)} key={`${getDayName(i)}`} />;
    }
    return days;
  }, [idDr, getAvailableHoursDay]);

  useEffect(() => {
    console.log(reduxHours.length);
  }, [reduxHours]);
  return (
    <div className="container-week">
      <Button
        label="Zapisz"
        icon="pi pi-check"
        iconPos="right"
        onClick={() => updateData({ idDr, newSchedule: reduxHours }, baseUrlSchedule, 'update')}
        className="button-week"
      />
      <div className="div-week">{daysList}</div>
    </div>
  );
};
