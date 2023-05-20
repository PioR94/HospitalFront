import React, { useEffect, useState } from "react";
import { Term } from "types";
import "./Hour.css";
import { baseUrlTerm, sendAndReceiveData, sendData } from "../../../api";

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
    sendAndReceiveData(termId, baseUrlTerm, "term-id").then((r) =>
      setActive(r)
    );
  }, []);

  const addTerm = () => {
    sendData(term, baseUrlTerm, "add");
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
