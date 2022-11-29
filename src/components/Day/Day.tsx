import React from 'react';
import {Hour} from "../Hour/Hour";
import "./Day.css"


interface Props {
   dayOfWeek: any;
   numberDay: string;
   month: any;
}

export const Day = (props: Props) => {

    return <>
        <div className="_divDay">
        <div className="_div-date"><p>{props.dayOfWeek} {props.numberDay} {props.month}</p></div>
        <Hour hour="6:00"/>
        <Hour hour="6:15"/>
        <Hour hour="6:30"/>
        <Hour hour="6:45"/>
        <Hour hour="7:00"/>
        <Hour hour="7:15"/>
        <Hour hour="7:30"/>
        <Hour hour="7:45"/>
        <Hour hour="8:00"/>
        <Hour hour="8:15"/>
        <Hour hour="8:30"/>
        <Hour hour="8:45"/>
        <Hour hour="9:00"/>
        <Hour hour="9:15"/>
        <Hour hour="9:30"/>
        <Hour hour="9:45"/>
        <Hour hour="10:00"/>
        <Hour hour="10:15"/>
        <Hour hour="10:30"/>
        <Hour hour="10:45"/>
        <Hour hour="11:00"/>
        <Hour hour="11:15"/>
        <Hour hour="11:30"/>
        <Hour hour="11:45"/>
        <Hour hour="12:00"/>
        <Hour hour="12:15"/>
        <Hour hour="12:30"/>
        <Hour hour="12:45"/>
        <Hour hour="13:00"/>
        <Hour hour="13:15"/>
        <Hour hour="13:30"/>
        <Hour hour="13:45"/>
        <Hour hour="14:00"/>
        <Hour hour="14:15"/>
        <Hour hour="14:30"/>
        <Hour hour="14:45"/>
        <Hour hour="15:00"/>
        <Hour hour="15:15"/>
        <Hour hour="15:30"/>
        <Hour hour="15:45"/>
        <Hour hour="16:00"/>
        <Hour hour="16:15"/>
        <Hour hour="16:30"/>
        <Hour hour="16:45"/>
        <Hour hour="17:00"/>
        <Hour hour="17:15"/>
        <Hour hour="17:30"/>
        <Hour hour="17:45"/>
        <Hour hour="18:00"/>
        <Hour hour="18:15"/>
        <Hour hour="18:30"/>
        <Hour hour="18:45"/>
        <Hour hour="19:00"/>
        <Hour hour="19:15"/>
        <Hour hour="19:30"/>
        <Hour hour="19:45"/>
        <Hour hour="20:00"/>
        <Hour hour="20:15"/>
        <Hour hour="20:30"/>
        <Hour hour="20:45"/>
        </div>
    </>

}