import React, { SyntheticEvent, useEffect, useState } from 'react';
import { OneDoctor } from '../OneDoctor/OneDoctor';
import './ListDoctor.css';
import { baseUrlPatient, downloadData } from '../../../api';

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

  useEffect(() => {
    getDoctors();
  });

  const getDoctors = async () => {
    downloadData(baseUrlPatient).then((r) => {
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
  };

  return <>{list}</>;
};
