import React, { useState } from 'react';
import './StartPage.css';
import { Dropdown } from 'primereact/dropdown';
import { useStartPage } from '../../hooks/components/StartPage/useStartPage';

export const StartPage = () => {
  const { handleOptionChange1, handleOptionChange2, options1, options2 } = useStartPage();

  return (
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
  );
};
