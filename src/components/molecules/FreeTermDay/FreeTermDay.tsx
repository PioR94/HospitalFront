import React, { useEffect, useRef, useState } from "react";
import { FreeTerm } from "types";
import { FreeTermHour } from "../../atoms/FreeTermHour/FreeTermHour";
import "./FreeTermDay.css";
import { baseUrlTerm, sendAndReceiveData } from "../../../api";

interface Props {
  dayOfWeek: string;
  numberDay: string;
  month: string;
  year: string;
  idDr: string;
  sendRef: any;
}

export const FreeTermDay = (props: Props) => {
  const [freeTerms, setFreeTerms] = useState([]);
  const myRef = useRef<HTMLDivElement>(null);

  const dayData = {
    numberDay: props.numberDay,
    month: props.month,
    year: props.year,
    idDr: props.idDr,
  };

  useEffect(() => {
    sendAndReceiveData(dayData, baseUrlTerm, "free-terms").then((data) => {
      const r = data.map((term: FreeTerm) => (
        <FreeTermHour
          id={term.id}
          hour={term.hour}
          numberDay={term.numberDay}
          month={term.month}
          year={term.year}
          reservation={term.reservation}
          key={term.id}
        />
      ));
      setFreeTerms(r);
    });
  }, []);

  useEffect(() => {
    const height: number = myRef.current?.getBoundingClientRect().height || 0;
    props.sendRef(height);
  });

  const render = (day: any) => {
    return day;
  };

  return (
    <>
      <div ref={myRef} className="free-term-day">
        <div className="ftd-div-date">
          <div className="div-dayOfWeek">{props.dayOfWeek}</div>
          <div>
            {props.numberDay} {props.month}
          </div>
        </div>
        {render(freeTerms)}
      </div>
    </>
  );
};
