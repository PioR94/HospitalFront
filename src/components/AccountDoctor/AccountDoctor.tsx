import React from 'react';
import {VisitsDoctor} from "../VisitsDoctor/VisitsDoctor";
import "./AccountDoctor.css";

interface Props {
    idDr: string,
    loginDr: string,
}

export const AccountDoctor = (props: Props) => {

    return <div className="bgAccountDoctor">
        <header className="headerAccountDoctor">
        <h2 className="h2AccountDoctor">{props.loginDr}</h2>
        <VisitsDoctor idDr={props.idDr}/>
        </header>
    </div>
}