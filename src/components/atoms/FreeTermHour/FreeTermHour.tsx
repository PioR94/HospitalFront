import React, { useEffect, useState } from 'react';
import './FreeTermHour.css';
import { Modal } from '../../molecules/Modal/Modal';
import { baseUrlTerm, sendData } from '../../../api';
import { changeClass } from '../../../utils/functions/function';
import { useSelector } from 'react-redux';
import { Term } from '../../../types/terms/term';
import { useAppSelector } from '../../../hooks/redux';
import { selectId, selectLastName, selectName } from '../../../redux/selectors';

export const FreeTermHour = ({ id, dayOfWeek, hour, numberDay, month, year, idDr, nameDr, lastNameDr, className }: Term) => {
  const [display, setDisplay] = useState(false);
  const [free, setFree] = useState(false);
  const [classNameState, setClassNameState] = useState(className);
  const idPt = useAppSelector(selectId);
  const namePt = useAppSelector(selectName);
  const lastNamePt = useAppSelector(selectLastName);
  const dataTerm: Term = {
    id,
    hour,
    dayOfWeek,
    numberDay,
    month,
    year,
    idDr,
    idPt,
    nameDr,
    lastNameDr,
    namePt,
    lastNamePt,
  };

  const bookTerm = async () => {
    console.log(dataTerm);
    sendData(dataTerm, baseUrlTerm, 'add');
    setDisplay(false);
    setFree(true);
    setClassNameState('book-term-hour');
  };

  return (
    <>
      <div onClick={() => setDisplay((prev) => !prev)} className={classNameState}>
        {hour}
      </div>
      {display && classNameState === 'free-term-hour' ? (
        <Modal
          message="Czy chcesz zarezerwować ten termin?"
          clickNo={() => setDisplay(false)}
          clickYes={bookTerm}
          hour={hour}
          numberDay={numberDay}
          month={month}
          year={year}
        />
      ) : null}
    </>
  );
};
