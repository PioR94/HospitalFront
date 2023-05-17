import React, { SyntheticEvent, useState } from "react";
import { OneVisit } from "../OneVisit/OneVisit";
import "./VisitDoctor.css";
import { sendAndReceiveData } from "../../../api";

interface Props {
  idDr: string;
}

interface Visit {
  idV: string;
  date: string;
  idPt: string;
}

export const VisitsDoctor = (props: Props) => {
  const [list, setList] = useState([]);
  const [on, setOn] = useState(false);

  const listAll = async (e: SyntheticEvent) => {
    e.preventDefault();

    sendAndReceiveData(props.idDr, "http://localhost:3001/doctor/visits").then(
      (r) => {
        const dataVisits = r.map((one: Visit) => (
          <OneVisit date={one.date} idPt={one.idPt} />
        ));
        setList(dataVisits);
      }
    );

    return on ? setOn(false) : setOn(true);
  };

  return (
    <>
      <button className="buttonListAllDoctor" onClick={listAll}>
        Wizyty
      </button>
      {on && <ul>{list}</ul>}
    </>
  );
};
