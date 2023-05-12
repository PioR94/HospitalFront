import React, { useState } from "react";
import { FreeTerm } from "types";
import "./FreeTermHour.css";
import { Confirm } from "../../molecules/Confirm/Confirm";

export const FreeTermHour = (props: FreeTerm) => {
  const [display, setDisplay] = useState(false);
  const [free, setFree] = useState(false);

  const id: string = props.id;

  const bookTerm = async () => {
    await fetch("http://localhost:3001/term/book-term", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });

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
