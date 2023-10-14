import React from 'react';
import './AccountPatient.css';
import { Link } from 'react-router-dom';

export const AccountPatient = () => {
  const token = localStorage.getItem('token');

  return (
    <div className="bg-patient-account">
      <header className="headerAccountPatient">
        <h2 className="h2AccountPatient">Login</h2>
      </header>
    </div>
  );
};
