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

    const [wrap, setWrap] = useState(false);


    const changeClassWrap = (): string => {
        return wrap ? 'wrap-free-term-week-down' : 'wrap-free-term-week';
    }

    const scroll = (): void => {
        wrap ? setWrap(false) : setWrap(true);
    }

    const changeClassArrow = (): string => {
        return wrap ? 'arrow-up' : 'arrow-down';
    }

    return <div className="divVisit">
        <div className="image"/>
        <div className="pDr">
            <p>lek. {props.name} {props.lastName} </p>
            <p>{props.specialization}</p>
        </div>
        <hr/>
        <div>
            <div className={changeClassWrap()}>
                <FreeTermWeek idDr={props.idDr}/>
            </div>
            <div className={changeClassArrow()} onClick={scroll}>🡫</div>
        </div>


    </div>


}