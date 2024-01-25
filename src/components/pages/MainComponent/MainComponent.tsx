import React, { useState } from 'react';
import './MainComponent.css';
import { Dropdown } from 'primereact/dropdown';
import { Option } from '../../../types/options/option';

export const MainComponent = () => {
  const [selectedOption1, setSelectedOption1] = useState<Option | null>(null);
  const [selectedOption2, setSelectedOption2] = useState<Option | null>(null);

  const options1 = [
    {
      name: 'doktor',
      link1: `http://localhost:3000/doctor/ad`,
    },
    {
      name: 'pacjent',
      link1: `http://localhost:3000/patient/ad`,
    },
  ];

  const options2 = [
    {
      name: 'doktor',
      link2: `http://localhost:3000/doctor/log`,
    },
    {
      name: 'pacjent',
      link2: `http://localhost:3000/patient/log`,
    },
  ];

  const handleOptionChange1 = (e: { value: Option }) => {
    setSelectedOption1(e.value);
    if (e.value) {
      window.location.href = e.value.link1;
    }
  };

  const handleOptionChange2 = (e: { value: Option }) => {
    setSelectedOption2(e.value);
    if (e.value) {
      window.location.href = e.value.link2;
    }
  };

  return (
    <>
      <div className="main-container">
        <header className="main-header">
          <img src="logo-black.svg" alt="logo" className="new-logo" />

          <div className="dropdowns">
            <Dropdown onChange={handleOptionChange1} options={options1} optionLabel="name" placeholder="Rejestracja" className="check-register" />
            <Dropdown onChange={handleOptionChange2} options={options2} optionLabel="name" placeholder="Zaloguj" className="check-logout" />
          </div>
        </header>
        <div className="slogan-png-container">
          <div className="slogan">
            <h2 className="slogan-h2 slogan-h2-up ">Opieka Zdrowotna Online </h2>
            <h2 className="slogan-h2 slogan-h2-down">Proste Umawianie </h2>
            <h2 className="slogan-h2 slogan-h2-third">Profesjonalizm</h2>
            <h3 className="slogan-h3">Znajdź najlepszego lekarza w Twojej okolicy i umów się na wizytę bez zbędnych kolejek i stresu.</h3>
          </div>
          <div className="png" />
        </div>
      </div>
    </>
  );
};
