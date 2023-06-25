import React from 'react';
import { Link } from 'react-router-dom';
import './MainComponent.css';

export const MainComponent = () => {
  return (
    <>
      <div className="main-bg">
        <div className="logo" />
        <header className="main-header"></header>

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
