import React from 'react';
import {VisitsDoctor} from "../VisitsDoctor/VisitsDoctor";

interface Props {
    idDr: string,
    loginDr: string,
}

export const AccountDoctor = (props: Props) => {

    return <>
        <h2> Konto: {props.loginDr}</h2>
        <VisitsDoctor idDr={props.idDr}/>
    </>
}