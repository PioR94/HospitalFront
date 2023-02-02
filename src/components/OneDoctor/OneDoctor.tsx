import React, {useState} from 'react';
import './OneDoctor.css'
import {Btn} from "../Btn/Btn";


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
       
         <hr className="hrVisit"/>
    </div>

          : <div className="divDr">
        <p className="pDr">Dr {props.name} {props.lastName} spec. {props.specialization} </p> <button className="btnDr" onClick={onClick}>Zarezerwuj wizytę</button>
        <hr/>
    </div>

}