import React from 'react';
import { Visit } from '../../../types/visits/visit';
import './OneVisit.css';
import { changeClass } from '../../../utils/functions/function';

export const OneVisit = ({
  id,
  userId,
  name,
  lastName,
  numberDay,
  month,
  year,
  hour,
  price,
  status,
}: Visit) => {
  return (
    <>
      <div className={`one-visit ${changeClass(status === 'paid', 'green', 'pink')}`}>
        <section className="section-name">
          <div className="one-visit-name-icon">
            <i className="pi pi-file file-icon"></i>
            <span className="span-full-name">
              {name} {lastName}
            </span>
          </div>
          <span className="one-visit-date">
            {numberDay} {month} {year}, {hour}
          </span>
        </section>
        <section className="section-paid">
          <div
            className={`div-status ${changeClass(
              status === 'paid',
              'green-status',
              'pink-status',
            )}`}
          >
            {status}
          </div>
          <div className="div-price">
            <span className="span-price">{price} </span>
            <span className="denomination">ZŁ</span>
          </div>
        </section>
      </div>
    </>
  );
};
