import React, {useEffect, useState} from 'react';
import { Patient } from 'types';
import {LoginPatient} from "../LoginPatient/LoginPatient";
import {ListDoctor} from "../ListDoctor/ListDoctor";
import {VisitsPatient} from "../VisitPatient/VisitPatient";


interface Props {
    idPt: string;
    loginPt: string;
}

export const AccountPatient = (props: Props) => {


    return <>
        <h2> Konto: {props.loginPt}</h2>
        <ListDoctor idPt={props.idPt}/>
        <VisitsPatient idPt={props.idPt}/>

    </>
}