import React, { useEffect, useState } from 'react';
import './AccountDoctor.css';
import { Week } from '../../organisms/Week/Week';
import { baseUrlDoctor, sendToken } from '../../../api';
import { UserPanel } from '../UserPanel/UserPanel';

export const AccountDoctor = () => {
  const token = sessionStorage.getItem('token');
  const [dataDr, setDataDr] = useState({
    idDr: '',
    loginDr: '',
    nameDr: '',
    lastNameDr: '',
  });

  useEffect(() => {
    sendToken(token, baseUrlDoctor, 'get-doctor').then((r) => {
      setDataDr({
        idDr: r.id,
        loginDr: r.login,
        nameDr: r.name,
        lastNameDr: r.lastName,
      });
    });
  }, []);

  return (
    <div className="bgAccountDoctor">
      <UserPanel id={dataDr.idDr}></UserPanel>
    </div>
  );
};
