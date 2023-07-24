import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainComponent.css';
import { Btn } from '../../atoms/Btn/Btn';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { baseUrlDoctor, baseUrlPatient } from '../../../api';
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
      link2: `http://localhost:3000/doctor`,
    },
    {
      name: 'pacjent',
      link2: `http://localhost:3000/patient`,
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
      <div className="main-bg">
        <div className="logo" />
        <header className="main-header">
          <Dropdown onChange={handleOptionChange1} options={options1} optionLabel="name" placeholder="Rejestracja" className="check-register" />
          <Dropdown onChange={handleOptionChange2} options={options2} optionLabel="name" placeholder="Zaloguj" className="check-logout" />
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
