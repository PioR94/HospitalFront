import React, { useEffect, useState } from 'react';
import { FreeTermHour } from '../../atoms/FreeTermHour/FreeTermHour';
import './FreeTermDay.css';
import { baseUrlSchedule, baseUrlTerm, sendAndReceiveData } from '../../../api';
import { ScheduleHour } from '../../../types/terms/term';
import { mergeArrays } from '../../../utils/functions/merge-arrays';
import { StringNullableChain } from 'lodash';

interface Props {
  dayOfWeek: string;
  numberDay: string;
  month: string;
  year: string;
  idDr: string;
  nameDr: string;
  lastNameDr: string;
}

export const FreeTermDay = (props: Props) => {
  const [terms, setTerms] = useState<React.ReactNode[]>([]);

  const dayData = {
    dayOfWeek: props.dayOfWeek,
    idDr: props.idDr,
  };

  const termData = {
    idDr: props.idDr,
    numberDay: props.numberDay,
    month: props.month,
    year: props.year,
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchFreeTerms = sendAndReceiveData(dayData, baseUrlSchedule, 'free-terms');
      const fetchReservationTerms = sendAndReceiveData(termData, baseUrlTerm, 'terms');

      const [freeTermsData, reservationTermsData] = await Promise.all([fetchFreeTerms, fetchReservationTerms]);

      const modifiedFreeTerms = freeTermsData.map((item: ScheduleHour) => ({
        ...item,
        id: item.hour + props.numberDay + props.month + props.year + props.idDr,
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
          idDr={props.idDr}
          hour={term.hour}
          dayOfWeek={props.dayOfWeek}
          numberDay={props.numberDay}
          month={props.month}
          year={props.year}
          className={term.className}
          key={term.id}
          nameDr={props.nameDr}
          lastNameDr={props.lastNameDr}
        />
      ));

      setTerms(r);
    };

    fetchData();
  }, [props.idDr]);

  return (
    <>
      <div className="free-term-day">
        <div className="ftd-div-date">
          <div className="div-dayOfWeek">{props.dayOfWeek}</div>
          <div className="div-number-month">
            {props.numberDay} {props.month}
          </div>
        </div>
        {terms}
      </div>
    </>
  );
};
