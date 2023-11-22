import React, { useEffect, useRef, useState } from 'react';

import { FreeTermHour } from '../../atoms/FreeTermHour/FreeTermHour';
import './FreeTermDay.css';
import { baseUrlTerm, sendAndReceiveData } from '../../../api';
import { FreeTerm } from '../../../types/terms/term';


interface Props {
  dayOfWeek: string;
  numberDay: string;
  month: string;
  year: string;
  idDr: string;
}

export const FreeTermDay = (props: Props) => {
  const [freeTerms, setFreeTerms] = useState([]);

  const dayData = {
    numberDay: props.numberDay,
    month: props.month,
    year: props.year,
    idDr: props.idDr,
  };

  useEffect(() => {
    sendAndReceiveData(dayData, baseUrlTerm, 'free-terms').then((data) => {
      const r = data.map((term: FreeTerm) => (
        <FreeTermHour id={term.id} hour={term.hour} numberDay={term.numberDay} month={term.month} year={term.year} reservation={term.reservation} key={term.id} />
      ));
      setFreeTerms(r);
    });
  }, []);

  return (
    <>
      <div className="free-term-day">
        <div className="ftd-div-date">
          <div className="div-dayOfWeek">{props.dayOfWeek}</div>
          <div className="div-number-month">
            {props.numberDay} {props.month}
          </div>
        </div>
        {freeTerms}
      </div>
    </>
  );
};
