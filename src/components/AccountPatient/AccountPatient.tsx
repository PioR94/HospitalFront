import React, {useEffect, useState} from 'react';
import { Patient } from 'types';
import {LoginPatient} from "../LoginPatient/LoginPatient";
import {ListDoctor} from "../ListDoctor/ListDoctor";
import {VisitsPatient} from "../VisitPatient/VisitPatient";
import "./AccountPatient.css";
import {Hour} from "../Hour/Hour";
import {Day} from "../Day/Day";
import {Week} from "../Week/Week";
import {FreeTermDay} from "../FreeTermDay/FreeTermDay";
import {FreeTermHour} from "../FreeTermHour/FreeTermHour";

interface Props {
    idPt: string;
    loginPt: string;
}

export const AccountPatient = (props: Props) => {




    return <div className="bg">
        <header className="headerAccountPatient">
        <h2 className="h2AccountPatient">{props.loginPt}</h2>
        <ListDoctor idPt={props.idPt}/>
        <VisitsPatient idPt={props.idPt}/>
        </header>


    </div>
}