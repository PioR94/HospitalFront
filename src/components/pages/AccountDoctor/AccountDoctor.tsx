import React, { useEffect, useState } from 'react';
import './AccountDoctor.css';
import { Week } from '../../organisms/Week/Week';
import { baseUrlDoctor, sendToken } from '../../../api';

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
      console.log(r);
    });
  }, []);

  return (
    <div className="bgAccountDoctor">
      <header className="headerAccountDoctor"></header>

      <Week idDr={dataDr.idDr} loginDr={dataDr.loginDr} nameDr={dataDr.nameDr} lastNameDr={dataDr.lastNameDr} />
    </div>
  );
};
