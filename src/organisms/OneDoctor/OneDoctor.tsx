import React, { useEffect, useState } from 'react';
import './OneDoctor.css';
import { FreeTermWeek } from '../FreeTermWeek/FreeTermWeek';
import { Avatar } from 'primereact/avatar';
import StarRatings from 'react-star-ratings';
import 'primeicons/primeicons.css';
import { OneDoctorProps } from '../../types/props/props';
import { changeClass } from '../../utils/functions/change-class';

export const OneDoctor = ({ idDr, nameDr, lastNameDr, specialization, street, city, price, alwaysInvisible }: OneDoctorProps) => {
  const [wrapp, setWrapp] = useState(false);
  const [calendarVisible, setCalendarVisible] = useState(false);

  const sectionDataClass = `${alwaysInvisible ? 'modal-one-doctor-section-data' : 'one-doctor-section-data'} ${
    alwaysInvisible ? calendarVisible && 'hidden' : calendarVisible && 'invisible'
  }`;

  const sectionCalendarClass = `${alwaysInvisible ? 'modal-one-doctor-section-calendar' : 'one-doctor-section-calendar'} ${
    alwaysInvisible ? !calendarVisible && 'hidden' : !calendarVisible && 'invisible'
  }`;

  return (
    <div className={alwaysInvisible ? 'modal-one-doctor-wrapp' : 'one-doctor-wrapp'}>
      <section className={sectionDataClass}>
        <div className="avatar-name-star">
          <Avatar icon="pi pi-user" size="xlarge" style={{ transform: 'scale(1.3)', minWidth: 65 }} />
          <div className="name-specialization">
            <span className="span-name">
              lek. {nameDr} {lastNameDr}
            </span>
            <span className="span-specialization">{specialization}</span>

            <StarRatings rating={4.5} starRatedColor="darkcyan" numberOfStars={5} starDimension="25px" starSpacing="3px" />
          </div>
        </div>
        <div className="address-price-div">
          <div className="address">
            <i className="pi pi-map-marker i-one"></i>
            <p className="p-address">
              {street}, {city}
            </p>
          </div>
          <div className="price-div">
            <i className="pi pi-money-bill i-one"></i>

            <p className="p-service">Konsultacja:</p>
            <p>{price ? `${price}zł` : 'Brak ceny'}</p>
          </div>
          <button onClick={() => setCalendarVisible(true)} className={`button-visible ${alwaysInvisible && 'visible'}`}>
            Terminy
          </button>
        </div>
      </section>

      <section className={sectionCalendarClass}>
        <i className={`pi pi-times x-visible ${alwaysInvisible && 'visible'} `} onClick={() => setCalendarVisible(false)}></i>
        <div className={changeClass(wrapp, 'wrap-free-term-week-down', 'wrap-free-term-week')}>
          <FreeTermWeek idDr={idDr} nameDr={nameDr} lastNameDr={lastNameDr} price={price} />
        </div>
        <div className="arrow" onClick={() => setWrapp((prev) => !prev)}>
          {wrapp ? (
            <div>
              Pokaż mniej godzin <i className="pi pi-angle-up arrow-up" />{' '}
            </div>
          ) : (
            <div>
              Pokaż więcej godzin <i className="pi pi-angle-down arrow-down" />{' '}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
