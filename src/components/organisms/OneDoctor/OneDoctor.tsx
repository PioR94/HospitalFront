import React, { useEffect, useState } from 'react';
import './OneDoctor.css';
import { FreeTermWeek } from '../FreeTermWeek/FreeTermWeek';
import { MdLocationOn } from 'react-icons/md';
import { changeClass } from '../../../utils/functions/function';
import { Avatar } from 'primereact/avatar';
import { Rating } from 'primereact/rating';
import StarRatings from 'react-star-ratings';

interface Props {
  idDr: string;
  idPt: string;
  name: string;
  lastName: string;
  specialization: string;
  street: string;
}

export const OneDoctor = (props: Props) => {
  const [wrap, setWrap] = useState(false);

  const scroll = (): void => {
    wrap ? setWrap(false) : setWrap(true);
  };

  return (
    <>
      <div className="one-doctor-wrap">
        <section className="one-doctor-section-data">
          <div className="avatar-name-star">
            <Avatar icon="pi pi-user" size="xlarge" />
            <div className="name-specialization">
              <span className="span-name">
                lek. {props.name} {props.lastName}
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

          <div className="address">
            <MdLocationOn size={20} />
            <p className="p-address">{props.street}</p>
          </div>
        </section>

        <section className="one-doctor-section-calendar">
          <div className={changeClass(wrap, 'wrap-free-term-week-down', 'wrap-free-term-week')}>
            <FreeTermWeek idDr={props.idDr} />
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
