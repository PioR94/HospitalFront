import React from 'react';
import { VisitsDoctor } from '../../molecules/VisitsDoctor/VisitsDoctor';
import './AccountDoctor.css';
import { Week } from '../../organisms/Week/Week';

interface Props {
  idDr: string;
  loginDr: string;
  nameDr: string;
  lastNameDr: string;
}

export const AccountDoctor = (props: Props) => {
  return (
    <div className="bgAccountDoctor">
      <header className="headerAccountDoctor">
        <h2 className="h2AccountDoctor">{props.loginDr}</h2>
        <VisitsDoctor idDr={props.idDr} />
      </header>

      <Week idDr={props.idDr} loginDr={props.loginDr} nameDr={props.nameDr} lastNameDr={props.lastNameDr} />
    </div>
  );
};
