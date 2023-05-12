import React, { SyntheticEvent, useState } from "react";
import { OneVisit } from "../OneVisit/OneVisit";
import "./VisitPatient.css";

interface Props {
  idPt: string;
}

interface Visit {
  idV: string;
  date: string;
  idPt: string;
  idDr: string;
}

export const VisitsPatient = (props: Props) => {
  const [list, setList] = useState([]);
  const [on, setOn] = useState(false);

  const listAll = async (e: SyntheticEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3001/patient/visits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        patientId: props.idPt,
      }),
    });

    const data = await res.json();

    const dataVisits = data.map((one: Visit) => (
      <OneVisit date={one.date} idDr={one.idDr} />
    ));

    setList(dataVisits);

    return on ? setOn(false) : setOn(true);
  };

  return (
    <>
      <button className="buttonListAllPatient" onClick={listAll}>
        Wizyty
      </button>
      {on && <ul>{list}</ul>}
    </>
  );
};
