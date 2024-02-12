import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { OneDoctor } from '../OneDoctor/OneDoctor';
import './ListDoctor.css';
import { AutoComplete, AutoCompleteChangeEvent, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import { Dropdown } from 'primereact/dropdown';
import { useDispatch } from 'react-redux';
import { updateCity, updateSpecialization } from '../../redux/search-slice';
import { Button } from 'primereact/button';
import { MyMap } from '../MyMap/MyMap';
import { useNavigate } from 'react-router-dom';
import { Doctor } from '../../types/users/user';
import { Card } from 'primereact/card';
import { useGetUserData } from '../../hooks/common/useGetUserData';
import { useAppSelector } from '../../hooks/common/redux';
import { useDoctorsData } from '../../hooks/components/ListDoctor/useDoctorsData';
import { useCitySuggestions } from '../../hooks/components/ListDoctor/useCitySuggestions';
import { useSpecializations } from '../../hooks/common/useSpecializations';
import { useDoctorRefs } from '../../hooks/components/ListDoctor/useDoctorRefs';

const libs = ['places'];

export const ListDoctor = () => {
  useGetUserData();

  const [list, setList] = useState<JSX.Element[]>([]);

  const [modalList, setModalList] = useState<JSX.Element[]>([]);

  const [modalActive, setModalActive] = useState<boolean>(false);

  const [inputText, setInputText] = useState('');

  const [invisible, setInvisible] = useState<boolean>(false);

  const dispatch = useDispatch();

  const { city, specialization } = useAppSelector((state) => state.search);

  const [activeDoctorId, setActiveDoctorId] = useState<string | null>(null);

  const navigate = useNavigate(); 

  const { dataDoctors, fetchDoctors } = useDoctorsData();

  const citySuggestions = useCitySuggestions(inputText);

  const specializations = useSpecializations();
  
  const doctorRefs = useDoctorRefs(dataDoctors);

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

  const sendForm = async (e: SyntheticEvent) => {
    e.preventDefault();
    fetchDoctors(city, specialization);
  };

  return (
    <div className="list-doctor-wrap">
      <header className="list-doctor-header">
        <img src="logo-white.svg" alt="logo" className="logo-list" />
        <form onSubmit={sendForm} className="container-search">
          <i className="pi pi-sort-alt arrow-visible" onClick={() => setInvisible((perv) => !perv)} />
          <div className="input-wrapp">
            <AutoComplete
              value={city}
              suggestions={citySuggestions}
              completeMethod={(e: AutoCompleteCompleteEvent) => {
                setInputText(e.query);
              }}
              onChange={(e: AutoCompleteChangeEvent) => dispatch(updateCity(e.target.value))}
              minLength={3}
              placeholder="Wyszukaj miasto"
              style={{ alignSelf: 'stretch', marginRight: '5px' }}
              className={`input-find-doctor ${!invisible && 'input-invisible'}`}
            />
            <Dropdown
              value={specialization}
              options={specializations}
              onChange={(e) => dispatch(updateSpecialization(e.target.value))}
              placeholder="Specializacja"
              style={{
                display: 'flex',
                alignItems: 'center',
                alignSelf: 'stretch',
                boxSizing: 'content-box',
              }}
              className={`input-find-doctor ${invisible && 'input-invisible'}`}
            />
          </div>

          <Button icon="pi pi-search" rounded outlined aria-label="Search" className={'button-search'} />
        </form>
        <Button text rounded style={{ color: 'white' }} onClick={() => navigate('../patient/panel')}>
          <i className="pi pi-user icon-user" />
        </Button>
      </header>
      {dataDoctors.length === 0 && (
        <div className="message">
          <Card title={<span style={{ fontSize: '40px' }}>Ooops!</span>} style={{}}>
            <p style={{ fontSize: '24px' }}>Nie znaleziono wyników dla podanych kryteriów.</p>
          </Card>
        </div>
      )}

      <div className={!modalActive ? 'container-list-map' : 'modal-container-list-map'}>
        <div className={!modalActive ? 'wrapp-ul-map' : 'modal-wrapp-ul-map'}>
          <ul className={!modalActive ? 'doctor-ul' : 'modal-doctor-ul'}>{!modalActive ? list : modalList}</ul>
          {dataDoctors.length > 0 && (
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
          )}
        </div>
      </div>
    </div>
  );
};
