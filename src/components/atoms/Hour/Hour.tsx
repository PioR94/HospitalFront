import React, { useEffect, useState } from "react";
import { Term } from "types";
import "./Hour.css";
import { sendAndReceiveData, sendData } from "../../../api";

export const Hour = (props: Term) => {
  const [active, setActive] = useState(false);

  const term: Term = {
    id: props.id,
    hour: props.hour,
    dayOfWeek: props.dayOfWeek,
    numberDay: props.numberDay,
    month: props.month,
    year: props.year,
    idDr: props.idDr,
    loginDr: props.loginDr,
    nameDr: props.nameDr,
    lastNameDr: props.lastNameDr,
  };

  const termId: string = props.id;

  useEffect(() => {
    sendAndReceiveData(termId, "http://localhost:3001/term/term-id").then((r) =>
      setActive(r)
    );
  }, []);

  const addTerm = () => {
    sendData(term, "http://localhost:3001/term/add");
    active ? setActive(false) : setActive(true);
  };

  const changeClassName = () => {
    return active ? "_hour-div-active" : "_hour-div";
  };

  return (
    <>
      <div onClick={addTerm} className={changeClassName()}>
        {props.hour}
      </div>
    </>
  );
};
