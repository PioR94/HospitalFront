import React, { SyntheticEvent, useState } from "react";
import { OneDoctor } from "../OneDoctor/OneDoctor";
import "./ListDoctor.css";
import { dwlData, sendAndReceiveData } from "../../../api";

interface Props {
  idPt: string;
}

interface DataDr {
  idDr: string;
  nameDr: string;
  lastNameDr: string;
  specialization: string;
  address: string;
}

export const ListDoctor = (props: Props) => {
  const [list, setList] = useState([]);
  const [on, setOn] = useState(false);

  const listAll = async (e: SyntheticEvent) => {
    e.preventDefault();

    dwlData("http://localhost:3001/patient").then((r) => {
      const dataDr = r.map((one: DataDr) => (
        <li className="listAllLi">
          <OneDoctor
            key={one.idDr}
            idDr={one.idDr}
            name={one.nameDr}
            lastName={one.lastNameDr}
            specialization={one.specialization}
            idPt={props.idPt}
            address={one.address}
          />
        </li>
      ));
      setList(dataDr);
    });

    return on ? setOn(false) : setOn(true);
  };

  return (
    <>
      <button onClick={listAll} className="listAllButton">
        Lista lekarzy
      </button>
      {on && <ul className="listAllUl">{list}</ul>}
    </>
  );
};
