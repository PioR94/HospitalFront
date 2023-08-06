import React, { useEffect, useState } from 'react';
import { OneDoctor } from '../OneDoctor/OneDoctor';
import './ListDoctor.css';
import { baseUrlPatient, downloadData, sendToken } from '../../../api';
import { getToken } from '../../../utils/variables';

interface DataDr {
  idDr: string;
  nameDr: string;
  lastNameDr: string;
  specialization: string;
  address: string;
}

export const ListDoctor = () => {
  const [list, setList] = useState([]);
  const [idPt, setIdPt] = useState('');

  useEffect(() => {
    getDoctors();
  });

  useEffect(() => {
    sendToken(getToken, baseUrlPatient, 'find-doctor').then((r) => setIdPt(r.idPt));
    console.log(idPt);
  }, [idPt]);

  const getDoctors = async () => {
    downloadData(baseUrlPatient).then((r) => {
      const dataDr = r.map((one: DataDr) => (
        <li className="listAllLi">
          <OneDoctor key={one.idDr} idDr={one.idDr} name={one.nameDr} lastName={one.lastNameDr} specialization={one.specialization} idPt={idPt} address={one.address} />
        </li>
      ));
      setList(dataDr);
    });
  };

  return <>{list}</>;
};
