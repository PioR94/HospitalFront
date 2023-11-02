import React from 'react';
import './AccountPatient.css';
import { Link } from 'react-router-dom';

export const AccountPatient = () => {
  const token = localStorage.getItem('token');

  return (
    <div className="bg-patient-account">
      <img className="img-doctors" src="doctors3.svg" alt="patient" />
    </div>
  );
};
