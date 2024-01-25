import React, { useEffect, useState } from 'react';
import './FreeTermHour.css';
import { Modal } from '../../molecules/Modal/Modal';
import { baseUrlPayment, baseUrlTerm, sendAndReceiveData, sendData } from '../../../api';
import { changeClass } from '../../../utils/functions/function';
import { useSelector } from 'react-redux';
import { Term } from '../../../types/terms/term';
import { useAppSelector } from '../../../hooks/redux';
import { selectId, selectLastName, selectName } from '../../../redux/selectors';
import { loadStripe } from '@stripe/stripe-js';

const STRIPE_PUBLIC_KEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY as string;
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

export const FreeTermHour = ({ id, dayOfWeek, hour, numberDay, month, year, idDr, nameDr, lastNameDr, className, price }: Term) => {
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
    price,
  };


  const bookTerm = async () => {
    console.log(dataTerm);
    sendData(dataTerm, baseUrlTerm, 'add');
    setDisplay(false);
    setFree(true);
    setClassNameState('book-term-hour');
  };

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    if (stripe === null) {
      console.error('Stripe has not been initialized');
      return;
    }
    sessionStorage.setItem('data-term', JSON.stringify(dataTerm));
    const session = await sendAndReceiveData(price, baseUrlPayment, 'create-checkout-session');

    await stripe.redirectToCheckout({ sessionId: session.id });
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
          clickYes={handleCheckout}
          hour={hour}
          numberDay={numberDay}
          month={month}
          year={year}
        />
      ) : null}
    </>
  );
};
