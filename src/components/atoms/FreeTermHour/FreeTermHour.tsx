import React, { useState } from "react";
import { FreeTerm } from "types";
import "./FreeTermHour.css";
import { Confirm } from "../../molecules/Confirm/Confirm";
import { baseUrlTerm, sendData } from "../../../api";

export const FreeTermHour = (props: FreeTerm) => {
  const [display, setDisplay] = useState(false);
  const [free, setFree] = useState(false);
  const [reservation, setReservation] = useState(props.reservation);

  const id: string = props.id;

  const bookTerm = async () => {
    sendData(id, baseUrlTerm, "book-term");
    setDisplay(false);
    setFree(true);
    setReservation(1);
  };

  const changeClass = () =>
    reservation === 1 || free ? "book-term-hour" : "free-term-hour";

  const displayWindow = () => (display ? setDisplay(false) : setDisplay(true));

  const displayConfirm = () =>
    display && reservation === 0 ? (
      <Confirm
        message="Czy chcesz zarezerwować ten termin?"
        clickNo={offDisplay}
        clickYes={bookTerm}
        hour={props.hour}
        numberDay={props.numberDay}
        month={props.month}
        year={props.year}
      />
    ) : (
      false
    );

  const offDisplay = () => setDisplay(false);

  return (
    <>
      <div onClick={displayWindow} className={changeClass()}>
        {props.hour}
      </div>
      {displayConfirm()}
    </>
  );
};
