import React, {useState} from 'react';
import './OneDoctor.css'
import {Btn} from "../Btn/Btn";
import {AdVisitForm} from "../AdVisitForm/AdVisitForm";

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




return on ? <>
    <p className="oneDr">Dr {props.name} {props.lastName} spec. {props.specialization} <button onClick={onClick}>Wróć</button> </p>
        <AdVisitForm idDr={props.idDr} idPt={props.idPt}/>
    <hr/>
    </> :
    <>
        <p className="oneDr">Dr {props.name} {props.lastName} spec. {props.specialization} <button onClick={onClick}>Zarezerwuj wizytę</button> </p>
        <hr/>
    </>

}