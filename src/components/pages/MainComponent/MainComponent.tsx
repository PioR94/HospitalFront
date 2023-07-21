import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainComponent.css';
import { Btn } from '../../atoms/Btn/Btn';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { baseUrlDoctor, baseUrlPatient } from '../../../api';
import { Option } from '../../../types/options/option';

export const MainComponent = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const options = [
    {
      name: 'doktor',
      link1: `http://localhost:3000/doctor/ad`,
      link2: `http://localhost:3000/doctor/login`,
    },
    {
      name: 'pacjent',
      link1: `http://localhost:3000/patient/ad`,
      link2: `http://localhost:3000/patient/login`,
    },
  ];

  const handleOptionChange = (e: { value: Option }) => {
    setSelectedOption(e.value);
    if (e.value) {
      window.location.href = e.value.link1;
    }
  };

  return (
    <>
      <div className="main-bg">
        <div className="logo" />
        <header className="main-header">
          <Dropdown onChange={handleOptionChange} options={options} optionLabel="name" placeholder="Rejestracja" className="check-register" />
          <Dropdown
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.value)}
            options={options}
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
