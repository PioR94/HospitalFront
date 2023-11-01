import React, { useEffect, useState } from 'react';
import './Hour.css';
import { baseUrlTerm, sendAndReceiveData, sendData } from '../../../api';
import { Term } from 'types';
import { changeClass } from '../../../utils/functions/function';

export const Hour = (props: Term) => {
  const [active, setActive] = useState(false);

  const term: Term = {
    id: props.id,
    hour: props.hour,
    dayOfWeek: props.dayOfWeek,
    numberDay: props.numberDay,
    month: props.month,
    year: props.year,
    idDr: props.idDr,
    loginDr: props.loginDr,
    nameDr: props.nameDr,
    lastNameDr: props.lastNameDr,
  };

  const termId: string = props.id;

  useEffect(() => {
    sendAndReceiveData(termId, baseUrlTerm, 'term-id').then((r) => {
      setActive(r);
    });
  }, [props.loginDr]);

  const addTerm = () => {
    sendData(term, baseUrlTerm, 'add');
    setActive((perv) => !perv);
  };

  return (
    <>
      <div onClick={addTerm} className={changeClass(active, '_hour-div-active', '_hour-div')}>
        {props.hour}
      </div>
    </>
  );
};
