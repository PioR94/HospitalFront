import React from 'react';
import {Hour} from "../Hour/Hour";
import "./Day.css";


interface Props {
    dayOfWeek: string;
    numberDay: string;
    month: string;
    year: string;
    idDr: string,
    loginDr: string;
    nameDr: string;
    lastNameDr: string;
}

export const Day = (props: Props) => {


    const renderHours = () => {


        const hours = [];
        let hour: number = 6;
        let minutes: number = 0;
        let zero: string = '';
        for (let i = 0; i < 60; i++) {

            if (minutes === 0) zero = '0'

            hours[i] =
                <Hour id={`${hour}${minutes}${props.numberDay}${props.month}${props.year}${props.loginDr}`}
                      hour={`${hour}:${minutes}${zero}`} dayOfWeek={props.dayOfWeek} numberDay={props.numberDay}
                      month={props.month} year={props.year} idDr={props.idDr} loginDr={props.loginDr}
                      nameDr={props.nameDr} lastNameDr={props.lastNameDr}/>

            zero = '';
            minutes += 15;

            if (minutes === 60) {
                hour++;
                minutes = 0;
            }

        }
        return hours;

    }


    return <>

        <div className="_divDay">
            <div className="_div-date">
                <div>{props.dayOfWeek}</div>
                <div>{props.numberDay}</div>
                <div>{props.month}</div>
            </div>
            {renderHours()}
        </div>

    </>

}