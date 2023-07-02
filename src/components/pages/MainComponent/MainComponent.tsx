import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainComponent.css';
import { Btn } from '../../atoms/Btn/Btn';
import { Dropdown } from 'primereact/dropdown';

export const MainComponent = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
  return (
    <>
      <div className="main-bg">
        <div className="logo" />
        <header className="main-header">
          <Dropdown
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            placeholder="Rejestracja"
            className="check-register"
          />
          <Dropdown
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            placeholder="Zaloguj"
            className="check-logout"
          />
        </header>

        <div className="slogan">
          <h2 className="slogan-h2 slogan-h2-up ">Opieka Zdrowotna Online </h2>
          <h2 className="slogan-h2 slogan-h2-down">Proste Umawianie </h2>
          <h2 className="slogan-h2 slogan-h2-third">Profesjonalizm</h2>
          <h3 className="slogan-h3">Znajdź najlepszego lekarza w Twojej okolicy i umów się na wizytę bez zbędnych kolejek i stresu.</h3>
        </div>
        <div className="png" />
      </div>
    </>
  );
};
