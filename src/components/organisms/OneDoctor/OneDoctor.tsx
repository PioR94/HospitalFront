import React, { useEffect, useState } from 'react';
import './OneDoctor.css';
import { FreeTermWeek } from '../FreeTermWeek/FreeTermWeek';
import { MdLocationOn } from 'react-icons/md';
import { changeClass } from '../../../utils/functions/function';
import { Avatar } from 'primereact/avatar';
import { Rating } from 'primereact/rating';
import StarRatings from 'react-star-ratings';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';

interface Props {
  idDr: string;
  nameDr: string;
  lastNameDr: string;
  specialization: string;
  street: string;
  city: string;
  price: string;
  alwaysInvisible?: boolean;
}

export const OneDoctor = (props: Props) => {
  const [wrap, setWrap] = useState(false);
  const [calendarVisible, setCalendarVisible] = useState(false);

  const scroll = (): void => {
    wrap ? setWrap(false) : setWrap(true);
  };

  const sectionDataClass = `${props.alwaysInvisible ? 'modal-one-doctor-section-data' : 'one-doctor-section-data'} ${
    props.alwaysInvisible ? calendarVisible && 'hidden' : calendarVisible && 'invisible'
  }`;
  const sectionCalendarClass = `${props.alwaysInvisible ? 'modal-one-doctor-section-calendar' : 'one-doctor-section-calendar'} ${
    props.alwaysInvisible ? !calendarVisible && 'hidden' : !calendarVisible && 'invisible'
  }`;

  return (
    <>
      <div className={props.alwaysInvisible ? 'modal-one-doctor-wrap' : 'one-doctor-wrap'}>
        <section className={sectionDataClass}>
          <div className="avatar-name-star">
            <Avatar icon="pi pi-user" size="xlarge" style={{ transform: 'scale(1.3)' }} />
            <div className="name-specialization">
              <span className="span-name">
                lek. {props.nameDr} {props.lastNameDr}
              </span>
              <span className="span-specialization">{props.specialization}</span>

              <StarRatings rating={4.5} starRatedColor="darkcyan" numberOfStars={5} starDimension="25px" starSpacing="3px" />
            </div>
          </div>
          <div className="address-price-div">
            <div className="address">
              <i className="pi pi-map-marker i-one"></i>
              <p className="p-address">
                {props.street}, {props.city}
              </p>
            </div>
            <div className="price-div">
              <i className="pi pi-money-bill i-one"></i>

              <p className="p-service">Konsultacja:</p>
              <p>{props.price ? `${props.price}zł` : 'Brak ceny'}</p>
            </div>
            <button onClick={() => setCalendarVisible(true)} className={`button-visible ${props.alwaysInvisible && 'visible'}`}>
              Terminy
            </button>
          </div>
        </section>

        <section className={sectionCalendarClass}>
          <i className={`pi pi-times x-visible ${props.alwaysInvisible && 'visible'} `} onClick={() => setCalendarVisible(false)}></i>
          <div className={changeClass(wrap, 'wrap-free-term-week-down', 'wrap-free-term-week')}>
            <FreeTermWeek idDr={props.idDr} nameDr={props.nameDr} lastNameDr={props.lastNameDr} price={props.price} />
          </div>
          <div className="arrow" onClick={scroll}>
            {wrap ? (
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
    </>
  );
};
