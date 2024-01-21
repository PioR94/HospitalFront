import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { OneDoctor } from '../OneDoctor/OneDoctor';
import './ListDoctor.css';
import { baseUrlDoctor, baseUrlPatient, baseUrlSpecialization, downloadData, sendAndReceiveData, sendToken } from '../../../api';
import { getToken } from '../../../utils/variables';
import { AutoComplete, AutoCompleteChangeEvent, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import { Dropdown } from 'primereact/dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { updateCity, updateSpecialization } from '../../../redux/search-slice';
import { Button } from 'primereact/button';
import { MyMap } from '../MyMap/MyMap';

export interface DataDr {
  idDr: string;
  nameDr: string;
  lastNameDr: string;
  specialization: string;
  street: string;
  city: string;
  price: string;
  latitude: number;
  longitude: number;
}
const libs = ['places'];

export const ListDoctor = () => {
  const [dataDoctors, setDataDoctors] = useState([]);
  const [list, setList] = useState<JSX.Element[]>([]);
  const [modalList, setModalList] = useState<JSX.Element[]>([]);
  const [modalActive, setModalActive] = useState<boolean>(false);
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
  const [activeDoctorId, setActiveDoctorId] = useState<string | null>(null);
  const doctorRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (!cityReduxValue && !specializationReduxValue) {
      getDoctors(citySessionValue, specializationSessionValue);
    } else {
      getDoctors(cityReduxValue, specializationReduxValue);
    }
  }, []);

  const getDoctors = async (city: string | null, specialization: string | null) => {
    const dataSearch = {
      city,
      specialization,
    };
    sendAndReceiveData(dataSearch, baseUrlDoctor, 'find-doctors').then((r) => {
      setDataDoctors(r);
    });
  };

  useEffect(() => {
    if (!modalActive) {
      const firstList = dataDoctors.map((doctor: DataDr) => (
        <li className="list-doctor-li" key={doctor.idDr}>
          <OneDoctor
            idDr={doctor.idDr}
            nameDr={doctor.nameDr}
            lastNameDr={doctor.lastNameDr}
            specialization={doctor.specialization}
            street={doctor.street}
            city={doctor.city}
            price={doctor.price}
          />
        </li>
      ));
      setList(firstList);
      console.log(list);
    }
    if (modalActive) {
      const secoundList = dataDoctors.map((doctor: DataDr, index: number) => (
        <li
          className="list-doctor-li"
          key={doctor.idDr}
          ref={(el) => (doctorRefs.current[index] = el)} // Przypisanie referencji
          onMouseEnter={() => setActiveDoctorId(doctor.idDr)}
          onMouseLeave={() => setActiveDoctorId(null)}
        >
          <OneDoctor {...doctor} alwaysInvisible={true} />
        </li>
      ));
      setModalList(secoundList);
    }
  }, [modalActive, dataDoctors]);

  useEffect(() => {
    sendAndReceiveData(inputText, baseUrlPatient, 'google-api').then((r) => {
      console.log(r);
      setSuggestedCities(r);
    });
  }, [inputText, inputActive]);

  useEffect(() => {
    downloadData(baseUrlSpecialization).then((r) => {
      setSpecializations(['', ...r]);
    });
  }, []);

  useEffect(() => {
    doctorRefs.current = doctorRefs.current.slice(0, dataDoctors.length);
  }, [dataDoctors]);
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
            onChange={(e: AutoCompleteChangeEvent) => dispatch(updateCity(e.target.value))}
            minLength={3}
            placeholder="Wyszukaj miasto"
            style={{ alignSelf: 'stretch' }}
          />
          <Dropdown
            value={specializationReduxValue}
            options={specializations}
            onChange={(e) => dispatch(updateSpecialization(e.target.value))}
            placeholder="Wybierz specjalizację"
            style={{
              display: 'flex',
              alignItems: 'center',
              alignSelf: 'stretch',
              boxSizing: 'content-box',
              width: 220,
            }}
          />
          <Button icon="pi pi-search" rounded outlined aria-label="Search" className={'button-search'} />
        </form>
      </header>

      <div className={!modalActive ? 'container-list-map' : 'modal-container-list-map'}>
        <div className={!modalActive ? 'wrapp-ul-map' : 'modal-wrapp-ul-map'}>
          <ul className={!modalActive ? 'doctor-ul' : 'modal-doctor-ul'}>{!modalActive ? list : modalList}</ul>
          <div className={!modalActive ? 'map-container' : 'modal-map-container'}>
            <MyMap
              doctors={dataDoctors}
              activeDoctorId={activeDoctorId}
              onMarkerEnter={setActiveDoctorId}
              onMarkerLeave={() => setActiveDoctorId(null)}
              doctorRefs={doctorRefs}
            >
              {!modalActive ? (
                <div className="overlay" onClick={() => setModalActive(true)}>
                  <i className="pi pi-arrows-alt arrow-alt"></i>
                </div>
              ) : (
                <i className="pi pi-times x-map" onClick={() => setModalActive(false)}></i>
              )}
            </MyMap>
          </div>
        </div>
      </div>
    </div>
  );
};
