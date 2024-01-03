import React, { ReactElement, useEffect, useState } from 'react';
import { OneVisit } from '../OneVisit/OneVisit';
import './Visits.css';
import { useAppSelector } from '../../../hooks/redux';
import { selectId } from '../../../redux/selectors';
import { baseUrlTerm, sendAndReceiveData } from '../../../api';
import { Visit } from '../../../types/visits/visit';

export const Visits = () => {
  const [visits, setVisits] = useState<ReactElement[]>([]);
  const role = sessionStorage.getItem('role');
  const userId = useAppSelector(selectId);

  useEffect(() => {
    sendAndReceiveData(userId, baseUrlTerm, `${role}-terms`).then((r) => {
      const arrOneVisits = r.map((item: Visit) => (
        <OneVisit
          id={item.id}
          name={item.name}
          lastName={item.lastName}
          numberDay={item.numberDay}
          month={item.month}
          year={item.year}
          hour={item.hour}
          price={item.price}
          status={item.status}
        />
      ));
      setVisits(arrOneVisits);
    });
  }, []);

  return (
    <>
      <h2 className="visits-h2">Wizyty</h2>
      <div className="div-list">{visits}</div>
    </>
  );
};
