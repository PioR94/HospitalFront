import React, { useEffect, useState } from 'react';
import { FreeTerm } from 'types';
import './FreeTermHour.css';
import { Confirm } from '../../molecules/Confirm/Confirm';
import { baseUrlTerm, sendData } from '../../../api';
import { changeClass } from '../../../utils/functions/function';
import { useSelector } from 'react-redux';
import { selectActiveLogin, selectUserId } from '../../../redux/selectors';

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

  const displayWindow = () => (display ? setDisplay(false) : setDisplay(true));
  const displayConfirm = () =>
    display && reservation === 0 ? (
      <Confirm message="Czy chcesz zarezerwować ten termin?" clickNo={offDisplay} clickYes={bookTerm} hour={props.hour} numberDay={props.numberDay} month={props.month} year={props.year} />
    ) : (
      false
    );

  const offDisplay = () => setDisplay(false);

  return (
    <>
      <div onClick={displayWindow} className={changeClass(reservation === 1, 'book-term-hour', 'free-term-hour')}>
        {props.hour}
      </div>
      {displayConfirm()}
    </>
  );
};
