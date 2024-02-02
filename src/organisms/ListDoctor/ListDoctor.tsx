import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { OneDoctor } from '../OneDoctor/OneDoctor';
import './ListDoctor.css';
import { baseUrlDoctor, baseUrlPatient, baseUrlSpecialization, downloadData, sendAndReceiveData, sendToken } from '../../api';
import { AutoComplete, AutoCompleteChangeEvent, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import { Dropdown } from 'primereact/dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { updateCity, updateSpecialization } from '../../redux/search-slice';
import { Button } from 'primereact/button';
import { MyMap } from '../MyMap/MyMap';
import { useNavigate } from 'react-router-dom';
import { Doctor } from '../../types/users/user';

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
  const [invisible, setInvisible] = useState<boolean>(false);
  const dispatch = useDispatch();
  const cityReduxValue = useSelector((state: any) => state.search.city);
  const specializationReduxValue = useSelector((state: any) => state.search.specialization);
  const citySessionValue = sessionStorage.getItem('city');
  const specializationSessionValue = sessionStorage.getItem('specialization');
  const [activeDoctorId, setActiveDoctorId] = useState<string | null>(null);
  const doctorRefs = useRef<(HTMLLIElement | null)[]>([]);
  const navigate = useNavigate();

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
      const firstList = dataDoctors.map((doctor: Doctor) => (
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
      const secoundList = dataDoctors.map((doctor: Doctor, index: number) => (
        <li
          className="list-doctor-li modal-data"
          key={doctor.idDr}
          ref={(el) => (doctorRefs.current[index] = el)}
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
        <img src="logo-white.svg" alt="logo" className="logo-list" />
        <form onSubmit={sendForm} className="container-search">
          <i className="pi pi-sort-alt arrow-visible" onClick={() => setInvisible((perv) => !perv)} />
          <div className="input-wrapp">
            <AutoComplete
              value={cityReduxValue}
              suggestions={suggestedCities}
              completeMethod={(e: AutoCompleteCompleteEvent) => {
                setInputText(e.query);
              }}
              onChange={(e: AutoCompleteChangeEvent) => dispatch(updateCity(e.target.value))}
              minLength={3}
              placeholder="Wyszukaj miasto"
              style={{ alignSelf: 'stretch', marginRight: '5px', flex: 1 }}
              className={`${!invisible && 'input-invisible'}`}
            />
            <Dropdown
              value={specializationReduxValue}
              options={specializations}
              onChange={(e) => dispatch(updateSpecialization(e.target.value))}
              placeholder="Specializacja"
              style={{
                display: 'flex',
                alignItems: 'center',
                alignSelf: 'stretch',
                boxSizing: 'content-box',
                marginRight: '5px',
                flex: 1,
              }}
              className={`${invisible && 'input-invisible'}`}
            />
          </div>

          <Button icon="pi pi-search" rounded outlined aria-label="Search" className={'button-search'} />
        </form>
        <Button text rounded style={{ color: 'white' }} onClick={() => navigate('../patient/panel')}>
          <i className="pi pi-user icon-user" />
        </Button>
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
