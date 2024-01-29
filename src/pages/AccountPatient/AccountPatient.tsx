import React, { SyntheticEvent, useEffect, useState } from 'react';
import './AccountPatient.css';
import { Link, useNavigate } from 'react-router-dom';
import { AutoComplete, AutoCompleteChangeEvent, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

import { baseUrlPatient, baseUrlSpecialization, downloadData, sendAndReceiveData } from '../../api';
import { updateCity, updateSpecialization } from '../../redux/search-slice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

export const AccountPatient = () => {
  const token = localStorage.getItem('token');
  const dispatch = useAppDispatch();
  const cityReduxValue = useAppSelector((state: any) => state.search.city);
  const specializationReduxValue = useAppSelector((state: any) => state.search.specialization);
  const [suggestedCities, setSuggestedCities] = useState<string[]>([]);
  const [specializations, setSpecializations] = useState<string[]>([]);
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    sendAndReceiveData(inputText, baseUrlPatient, 'google-api').then((r) => {
      setSuggestedCities(r);
    });
  }, [inputText]);
  useEffect(() => {
    downloadData(baseUrlSpecialization).then((r) => {
      setSpecializations(['', ...r]);
    });
  }, []);

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    sessionStorage.setItem('city', cityReduxValue);
    sessionStorage.setItem('specialization', specializationReduxValue);
    navigate('../find-doctor');
  };

  return (
    <div className="container-patient-account">
      <header className="header-patient-account">
        <img src="logo-white.svg" alt="logo" className="logo-white" />

        <div className="div-menu">
          <Button label="Moje konto" text raised style={{ color: 'white', fontSize: 25 }} onClick={() => navigate('../patient/panel')} />
        </div>
      </header>
      <div className="wrapp-search-img">
        <div className="div-search">
          <h2 className="h2-patient-account">Znajdź lekarza i umów wizytę</h2>
          <h3 className="h3-patient-account">Szukaj wśród lekarzy</h3>
          <form onSubmit={onSubmit} className="form-search">
            <AutoComplete
              value={cityReduxValue}
              suggestions={suggestedCities}
              completeMethod={(e: AutoCompleteCompleteEvent) => {
                setInputText(e.query);
              }}
              onChange={(e: AutoCompleteChangeEvent) => dispatch(updateCity(e.target.value))}
              minLength={3}
              placeholder="Wyszukaj miasto"
              style={{ alignSelf: 'stretch', flexGrow: 1, marginRight: 10, marginBottom: 10 }}
            />
            <Dropdown
              value={specializationReduxValue}
              options={specializations}
              onChange={(e) => dispatch(updateSpecialization(e.target.value))}
              placeholder="Wybierz specjalizację"
              style={{
                display: 'flex',
                alignItems: 'center',
                flexGrow: 1,
                alignSelf: 'stretch',
                boxSizing: 'content-box',
                marginRight: 10,
                marginBottom: 10,
              }}
            />
            <Button label="Szukaj" severity="info" raised />
          </form>
        </div>
        <img className="img-doctors" src="doctors3.svg" alt="patient" />
      </div>
    </div>
  );
};
