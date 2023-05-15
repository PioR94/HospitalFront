import React, { useState } from "react";
import { FreeTerm } from "types";
import "./FreeTermHour.css";
import { Confirm } from "../../molecules/Confirm/Confirm";
import { sendData } from "../../../api";

export const FreeTermHour = (props: FreeTerm) => {
  const [display, setDisplay] = useState(false);
  const [free, setFree] = useState(false);

  const id: string = props.id;

  const bookTerm = () => {
    sendData(id, "http://localhost:3001/term/book-term");
    setDisplay(false);
    setFree(true);
  };

  const changeClass = () =>
    props.reservation === 1 || free ? "book-term-hour" : "free-term-hour";

  const displayWindow = () => (display ? setDisplay(false) : setDisplay(true));

  const displayConfirm = () =>
    display && props.reservation === 0 ? (
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
