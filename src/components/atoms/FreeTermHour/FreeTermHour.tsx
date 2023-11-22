import React, { useEffect, useState } from 'react';
import './FreeTermHour.css';
import { Modal } from '../../molecules/Modal/Modal';
import { baseUrlTerm, sendData } from '../../../api';
import { changeClass } from '../../../utils/functions/function';
import { useSelector } from 'react-redux';
import { selectUserId } from '../../../redux/selectors';
import { FreeTerm } from '../../../types/terms/term';

export const FreeTermHour = (props: FreeTerm) => {
  const [display, setDisplay] = useState(false);
  const [free, setFree] = useState(false);
  const [reservation, setReservation] = useState(props.reservation);
  const userActiveId = useSelector(selectUserId);

  const termId: string = props.id;
  const dataId = {
    termId,
    userActiveId,
  };

  const bookTerm = async () => {
    sendData(dataId, baseUrlTerm, 'book-term');
    setDisplay(false);
    setFree(true);
    setReservation(1);
  };

  return (
    <>
      <div
        onClick={() => setDisplay((prev) => !prev)}
        className={changeClass(reservation === 1, 'book-term-hour', 'free-term-hour')}
      >
        {props.hour}
      </div>
      {display && reservation === 0 ? (
        <Modal
          message="Czy chcesz zarezerwować ten termin?"
          clickNo={() => setDisplay(false)}
          clickYes={bookTerm}
          hour={props.hour}
          numberDay={props.numberDay}
          month={props.month}
          year={props.year}
        />
      ) : null}
    </>
  );
};
