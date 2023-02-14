import React, {useState} from 'react';
import './OneDoctor.css'
import {Btn} from "../Btn/Btn";
import {FreeTermHour} from "../FreeTermHour/FreeTermHour";
import {FreeTermDay} from "../FreeTermDay/FreeTermDay";
import {FreeTermWeek} from "../FreeTermWeek/FreeTermWeek";


interface Props {
    idDr: string;
    idPt: string;
    name: string;
    lastName: string;
    specialization: string;


}

export const OneDoctor = (props: Props) => {



    return <div className="divVisit">
            <p className="pDr">Dr {props.name} {props.lastName} spec. {props.specialization}  </p>
            <FreeTermWeek idDr={props.idDr}/>
        </div>



}