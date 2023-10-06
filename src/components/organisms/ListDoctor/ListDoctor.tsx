import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { OneDoctor } from '../OneDoctor/OneDoctor';
import './ListDoctor.css';
import { baseUrlPatient, baseUrlSpecialization, downloadData, sendAndReceiveData, sendToken } from '../../../api';
import { getToken } from '../../../utils/variables';
import { AutoComplete, AutoCompleteChangeEvent, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import { Dropdown } from 'primereact/dropdown';


interface DataDr {
  idDr: string;
  nameDr: string;
  lastNameDr: string;
  specialization: string;
  address: string;
}
const libs = ['places'];

export const ListDoctor = () => {
  const [list, setList] = useState([]);
  const [idPt, setIdPt] = useState('');
  const inputRef = useRef<any>(null);
  const [suggestedCities, setSuggestedCities] = useState<string[]>([]);
  const [inputText, setInputText] = useState('');
  const [inputActive, setInputActive] = useState(false);
  const [specializations, setSpecializations] = useState([]);
  const [form, setForm] = useState({
    city: '',
    specialization: '',
  });

  useEffect(() => {
    getDoctors();
  }, []);

  useEffect(() => {
    sendToken(getToken, baseUrlPatient, 'find-doctor').then((r) => setIdPt(r.idPt));
    console.log(idPt);
  }, [idPt]);

  const getDoctors = async () => {
    downloadData(baseUrlPatient).then((r) => {
      const dataDr = r.map((one: DataDr) => (
        <li className="list-doctor-li" key={one.idDr}>
          <OneDoctor
            idDr={one.idDr}
            name={one.nameDr}
            lastName={one.lastNameDr}
            specialization={one.specialization}
            idPt={idPt}
            address={one.address}
          />
        </li>
      ));
      setList(dataDr);
    });
  };

  useEffect(() => {
    sendAndReceiveData(inputText, baseUrlPatient, 'google-api').then((r) => {
      setSuggestedCities(r);
      console.log(suggestedCities);
    });
  }, [inputText, inputActive]);

  useEffect(() => {
    downloadData(baseUrlSpecialization).then((r) => {
      setSpecializations(r);
    });
  }, []);

  const updateForm = (key: string, value: any) => {
    setForm((form) => ({
      ...form,
      [key]: value,
    }));
  };

  const sendForm = async (e: SyntheticEvent) => {
    e.preventDefault();
    if ((form.city.length || form.specialization.length) < 0) {
      // sendAndReceiveData(form, baseUrlPatient);
    }
  };

  return (
    <div className="list-doctor-wrap">
      <header className="list-doctor-header">
        <form onSubmit={sendForm} className="container-search">
          <AutoComplete
            value={form.city}
            suggestions={suggestedCities}
            completeMethod={(e: AutoCompleteCompleteEvent) => {
              setInputText(e.query);
            }}
            onChange={(e: AutoCompleteChangeEvent) => updateForm('city', e.target.value)}
            minLength={3}
            placeholder="Wyszukaj miasto"
            style={{ alignSelf: 'stretch' }}
          />
          <Dropdown
            value={form.specialization}
            options={specializations}
            onChange={(e) => updateForm('specialization', e.target.value)}
            placeholder="Wybierz specjalizację"
            style={{ display: 'flex', alignItems: 'center', alignSelf: 'stretch', boxSizing: 'content-box', width: 200 }}
          />
        </form>
      </header>
      <ul className="list-doctor-ul">{list}</ul>
    </div>
  );
};
