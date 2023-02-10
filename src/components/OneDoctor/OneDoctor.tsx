import React, {useState} from 'react';
import './OneDoctor.css'
import {Btn} from "../Btn/Btn";
import {FreeTermHour} from "../FreeTermHour/FreeTermHour";
import {FreeTermDay} from "../FreeTermDay/FreeTermDay";


interface Props {
    idDr: string;
    idPt: string;
    name: string;
    lastName: string;
    specialization: string;



}

export const OneDoctor = (props: Props) => {

    const [on, setOn] = useState(false);



 const onClick = () => {
     setOn(true);
     if(on) setOn(false);
    }




return on ? <div className="divVisit">
        <p className="pDr">Dr {props.name} {props.lastName} spec. {props.specialization}  </p> <button className="btnDr" onClick={onClick}>Wróć</button>
        <FreeTermDay numberDay={'6'} month={'Lut'} year={'2023'} idDr={'f21779ec-b1bd-4a2c-afbc-7f614a75a19d'}/>

         <hr className="hrVisit"/>
    </div>

          : <div className="divDr">
        <p className="pDr">Dr {props.name} {props.lastName} spec. {props.specialization} </p> <button className="btnDr" onClick={onClick}>Zarezerwuj wizytę</button>
        <hr/>

    </div>

}