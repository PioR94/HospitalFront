import React, { SyntheticEvent, useState } from 'react';
import { OneVisit } from '../OneVisit/OneVisit';
import './VisitPatient.css';
import { baseUrlPatient, sendAndReceiveData } from '../../../api';

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

    sendAndReceiveData(props.idPt, baseUrlPatient, 'visits').then((r) => {
      const dataVisits = r.map((one: Visit) => <OneVisit date={one.date} idDr={one.idDr} />);
      setList(dataVisits);
    });

    return setOn((perv: boolean) => !perv);
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
