import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { OneDoctor } from '../OneDoctor/OneDoctor';
import './ListDoctor.css';
import { baseUrlPatient, baseUrlSpecialization, downloadData, sendAndReceiveData, sendToken } from '../../../api';
import { getToken } from '../../../utils/variables';
import { AutoComplete, AutoCompleteChangeEvent, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import { Dropdown } from 'primereact/dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { setCity, setSpecialization } from '../../../redux/search-slice';

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
  const dispatch = useDispatch();
  const city = useSelector((state: any) => state.search.city);
  const [form, setForm] = useState({
    city: '',
    specialization: '',
  });
  const dataSessionStorage = {
    city: sessionStorage.getItem('city'),
    specialization: sessionStorage.getItem('specialization'),
  };

  useEffect(() => {
    getDoctors();
  }, [dataSessionStorage.city, dataSessionStorage.specialization]);

  useEffect(() => {
    sendToken(getToken, baseUrlPatient, 'get-id').then((r) => setIdPt(r.idPt));
  }, [idPt]);

  const getDoctors = async () => {
    sendAndReceiveData(dataSessionStorage, baseUrlPatient, 'find-doctor').then((r) => {
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
    if ((form.city.length || form.specialization.length) > 0) {
      sessionStorage.setItem('city', form.city);
      sessionStorage.setItem('specialization', form.specialization);
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
            style={{ display: 'flex', alignItems: 'center', alignSelf: 'stretch', boxSizing: 'content-box', width: 220 }}
          />
          <button>aa</button>
        </form>
      </header>
      <ul className="list-doctor-ul">{list}</ul>
    </div>
  );
};
