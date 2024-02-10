import React, { useEffect, useState } from 'react';
import { FreeTermHour } from '../../atoms/FreeTermHour/FreeTermHour';
import './FreeTermDay.css';
import { baseUrlSchedule, baseUrlTerm, sendAndReceiveData } from '../../api';
import { ScheduleHour } from '../../types/terms/term';
import { mergeArrays } from '../../utils/functions/merge-arrays';
import { FreeTermDayProps } from '../../types/props/props';

export const FreeTermDay = ({ dayOfWeek, numberDay, month, year, idDr, nameDr, lastNameDr, price }: FreeTermDayProps) => {
  const [terms, setTerms] = useState<React.ReactNode[]>([]);

  const dayData = {
    dayOfWeek,
    idDr,
  };

  const termData = {
    idDr,
    numberDay,
    month,
    year,
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchFreeTerms = sendAndReceiveData(dayData, baseUrlSchedule, 'free-terms');
      const fetchReservationTerms = sendAndReceiveData(termData, baseUrlTerm, 'terms');

      const [freeTermsData, reservationTermsData] = await Promise.all([fetchFreeTerms, fetchReservationTerms]);

      const modifiedFreeTerms = freeTermsData.map((item: ScheduleHour) => ({
        ...item,
        id: item.hour + numberDay + month + year + idDr,
        className: 'free-term-hour',
      }));

      const modifiedReservationTerms = reservationTermsData.map((item: ScheduleHour) => ({
        ...item,
        className: 'book-term-hour',
      }));

      const mergeArray = mergeArrays(modifiedFreeTerms, modifiedReservationTerms);

      const sortedArray = mergeArray.sort((a: ScheduleHour, b: ScheduleHour) => (a.hour > b.hour ? 1 : -1));

      const r = sortedArray.map((term: ScheduleHour) => (
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

      setTerms(r);
    };

    fetchData();
  }, [idDr]);

  return (
    <>
      <div className="free-term-day">
        <div className="ftd-div-date">
          <div className="div-day-of-week">{dayOfWeek}</div>
          <div className="div-number-month">
            {numberDay} {month}
          </div>
        </div>
        {terms}
      </div>
    </>
  );
};
