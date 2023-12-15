import React from 'react';
import { OneVisit } from '../OneVisit/OneVisit';
import './Visits.css';

export const Visits = () => {
  return (
    <>
      <div className="div-list">
        <OneVisit
          id="sssss"
          userId="sssssq"
          name="John"
          lastName="Willson"
          numberDay="10"
          month="Styczeń"
          year="2022"
          hour="6:00"
          price="250.00"
          status="paid"
        />
        <OneVisit
          id="sssss"
          userId="sssssq"
          name="John"
          lastName="Willson"
          numberDay="10"
          month="Styczeń"
          year="2022"
          hour="7:00"
          price="250.00"
          status="unpaid"
        />
        <OneVisit
          id="sssss"
          userId="sssssq"
          name="John"
          lastName="Willson"
          numberDay="10"
          month="Styczeń"
          year="2022"
          hour="8:00"
          price="250.00"
          status="paid"
        />
        <OneVisit
          id="sssss"
          userId="sssssq"
          name="John"
          lastName="Willson"
          numberDay="10"
          month="Styczeń"
          year="2022"
          hour="10:00"
          price="250.00"
          status="unpaid"
        />
      </div>
    </>
  );
};
