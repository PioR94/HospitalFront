import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { OneDoctor } from '../OneDoctor/OneDoctor';
import './ListDoctor.css';
import { baseUrlDoctor, baseUrlPatient, baseUrlSpecialization, downloadData, sendAndReceiveData, sendToken } from '../../../api';
import { getToken } from '../../../utils/variables';
import { AutoComplete, AutoCompleteChangeEvent, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import { Dropdown } from 'primereact/dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { setCity, setSpecialization } from '../../../redux/search-slice';
import { Button } from 'primereact/button';

interface DataDr {
  idDr: string;
  nameDr: string;
  lastNameDr: string;
  specialization: string;
  street: string;
}
const libs = ['places'];

export const ListDoctor = () => {
  const [list, setList] = useState([]);
  const [idPt, setIdPt] = useState('');
  const inputRef = useRef<any>(null);
  const [suggestedCities, setSuggestedCities] = useState<string[]>([]);
  const [inputText, setInputText] = useState('');
  const [inputActive, setInputActive] = useState(false);
  const [specializations, setSpecializations] = useState<string[]>([]);
  const dispatch = useDispatch();
  const cityReduxValue = useSelector((state: any) => state.search.city);
  const specializationReduxValue = useSelector((state: any) => state.search.specialization);
  const citySessionValue = sessionStorage.getItem('city');
  const specializationSessionValue = sessionStorage.getItem('specialization');

  useEffect(() => {
    if (!cityReduxValue && !specializationReduxValue) {
      getDoctors(citySessionValue, specializationSessionValue);
    }
  }, []);

  useEffect(() => {
    sendToken(getToken, baseUrlPatient, 'get-id').then((r) => setIdPt(r.idPt));
  }, [idPt]);

  const getDoctors = async (city: string | null, specialization: string | null) => {
    const dataSearch = {
      city,
      specialization,
    };
    sendAndReceiveData(dataSearch, baseUrlDoctor, 'find-doctors').then((r) => {
      console.log(r);
      const dataDr = r.map((one: DataDr) => (
        <li className="list-doctor-li" key={one.idDr}>
          <OneDoctor
            idDr={one.idDr}
            name={one.nameDr}
            lastName={one.lastNameDr}
            specialization={one.specialization}
            idPt={idPt}
            street={one.street}
          />
        </li>
      ));
      setList(dataDr);
    });
  };

  useEffect(() => {
    sendAndReceiveData(inputText, baseUrlPatient, 'google-api').then((r) => {
      setSuggestedCities(r);
    });
  }, [inputText, inputActive]);

  useEffect(() => {
    downloadData(baseUrlSpecialization).then((r) => {
      console.log(r);
      setSpecializations(['', ...r]);
    });
  }, []);

  const sendForm = async (e: SyntheticEvent) => {
    e.preventDefault();

    getDoctors(cityReduxValue, specializationReduxValue);
    sessionStorage.setItem('city', cityReduxValue);
    sessionStorage.setItem('specialization', specializationReduxValue);
  };

  return (
    <div className="list-doctor-wrap">
      <header className="list-doctor-header">
        <form onSubmit={sendForm} className="container-search">
          <AutoComplete
            value={cityReduxValue}
            suggestions={suggestedCities}
            completeMethod={(e: AutoCompleteCompleteEvent) => {
              setInputText(e.query);
            }}
            onChange={(e: AutoCompleteChangeEvent) => dispatch(setCity(e.target.value))}
            minLength={3}
            placeholder="Wyszukaj miasto"
            style={{ alignSelf: 'stretch' }}
          />
          <Dropdown
            value={specializationReduxValue}
            options={specializations}
            onChange={(e) => dispatch(setSpecialization(e.target.value))}
            placeholder="Wybierz specjalizację"
            style={{ display: 'flex', alignItems: 'center', alignSelf: 'stretch', boxSizing: 'content-box', width: 220 }}
          />
          <Button icon="pi pi-search" rounded outlined aria-label="Search" className={'button-search'} />
        </form>
      </header>
      <ul className="list-doctor-ul">{list}</ul>
    </div>
  );
};
