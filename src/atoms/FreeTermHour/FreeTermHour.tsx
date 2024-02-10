import React, { useState } from 'react';
import './FreeTermHour.css';
import { Modal } from '../../molecules/Modal/Modal';
import { baseUrlPayment, sendAndReceiveData } from '../../api';
import { Term } from '../../types/terms/term';
import { useAppSelector } from '../../hooks/redux';
import { loadStripe } from '@stripe/stripe-js';

const STRIPE_PUBLIC_KEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY as string;
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

export const FreeTermHour = ({ id, dayOfWeek, hour, numberDay, month, year, idDr, nameDr, lastNameDr, className, price }: Term) => {
  const [display, setDisplay] = useState(false);

  const [classNameState, setClassNameState] = useState(className);

  const { idUser, name, lastName } = useAppSelector((state) => state.user);

  const dataTerm: Term = {
    id,
    hour,
    dayOfWeek,
    numberDay,
    month,
    year,
    idDr,
    idPt: idUser,
    nameDr,
    lastNameDr,
    namePt: name,
    lastNamePt: lastName,
    price,
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
