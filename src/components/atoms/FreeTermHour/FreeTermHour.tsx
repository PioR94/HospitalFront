import React, { useEffect, useState } from 'react';
import './FreeTermHour.css';
import { Modal } from '../../molecules/Modal/Modal';
import { baseUrlTerm, sendData } from '../../../api';
import { changeClass } from '../../../utils/functions/function';
import { useSelector } from 'react-redux';
import { selectUserId } from '../../../redux/selectors';
import { Term } from '../../../types/terms/term';

export const FreeTermHour = ({
  id,
  dayOfWeek,
  hour,
  numberDay,
  month,
  year,
  idDr,
  className,
}: Term) => {
  const [display, setDisplay] = useState(false);
  const [free, setFree] = useState(false);
  const [classNameState, setClassNameState] = useState(className);
  const userActiveId = useSelector(selectUserId);

  const dataId = {
    id,
    hour,
    dayOfWeek,
    numberDay,
    month,
    year,
    idDr,
    idPt: 'ss',
  };

  const bookTerm = async () => {
    console.log(dataId);
    sendData(dataId, baseUrlTerm, 'add');
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
