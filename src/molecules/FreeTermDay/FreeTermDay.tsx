import React, { useEffect, useState } from 'react';
import { FreeTermHour } from '../../atoms/FreeTermHour/FreeTermHour';
import './FreeTermDay.css';
import { ScheduleHour } from '../../types/terms/term';
import { FreeTermDayProps } from '../../types/props/props';
import { useFetchTerms } from './useFetchTerms';

export const FreeTermDay = ({ dayOfWeek, numberDay, month, year, idDr, nameDr, lastNameDr, price }: FreeTermDayProps) => {
  const [terms, setTerms] = useState<JSX.Element[] | undefined>([]);

  const { data } = useFetchTerms(dayOfWeek, numberDay, idDr, month, year);

  useEffect(() => {
    const freeTermHours = data?.sortedArray.map((term: ScheduleHour) => (
      <FreeTermHour
        id={term.id || ''}
        idDr={idDr}
        hour={term.hour}
        dayOfWeek={dayOfWeek}
        numberDay={numberDay}
        month={month}
        year={year}
        className={term.className}
        key={term.id}
        nameDr={nameDr}
        lastNameDr={lastNameDr}
        price={price}
      />
    ));

    setTerms(freeTermHours);
  }, [data]);

  return (
    <div className="free-term-day">
      <div className="ftd-div-date">
        <div className="div-day-of-week">{dayOfWeek}</div>
        <div className="div-number-month">
          {numberDay} {month}
        </div>
      </div>
      {terms}
    </div>
  );
};
