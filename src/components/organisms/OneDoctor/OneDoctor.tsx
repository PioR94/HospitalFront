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
  idPt: string;
  nameDr: string;
  lastNameDr: string;
  specialization: string;
  street: string;
  city: string;
  price: string;
}

export const OneDoctor = (props: Props) => {
  const [wrap, setWrap] = useState(false);
  const [calendarVisible, setCalendarVisible] = useState(false);

  const scroll = (): void => {
    wrap ? setWrap(false) : setWrap(true);
  };

  return (
    <>
      <div className="one-doctor-wrap">
        <section className={`one-doctor-section-data ${calendarVisible && 'visible'}`}>
          <div className="avatar-name-star">
            <Avatar icon="pi pi-user" size="xlarge" />
            <div className="name-specialization">
              <span className="span-name">
                lek. {props.nameDr} {props.lastNameDr}
              </span>
              <span>{props.specialization}</span>

              <StarRatings
                rating={4.5}
                starRatedColor="darkcyan" // Kolor gwiazdek
                numberOfStars={5} // Liczba gwiazdek
                starDimension="18px" //
                starSpacing="3px" // Odstęp między gwiazdkami
              />
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
            <button onClick={() => setCalendarVisible(true)} className={'button-visible'}>
              Terminy
            </button>
          </div>
        </section>

        <section className={`one-doctor-section-calendar ${!calendarVisible && 'visible'}`}>
          <i className="pi pi-times x-visible" onClick={() => setCalendarVisible(false)}></i>
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
