import React from 'react';
import {Hour} from "../Hour/Hour";
import "./Day.css"


interface Props {
   dayOfWeek: any;
   numberDay: string;
   month: any;
   year: number;
}

export const Day = (props: Props) => {

    return <>
        <div className="_divDay">
        <div className="_div-date"><p>{props.dayOfWeek} {props.numberDay} {props.month}</p></div>
        <Hour hour="6:00" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="6:15" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="6:30" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="6:45" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="7:00" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="7:15" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="7:30" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="7:45" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="8:00" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="8:15" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="8:30" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="8:45" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="9:00" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="9:15" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="9:30" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="9:45" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="10:00" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="10:15" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="10:30" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="10:45" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="11:00" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="11:15" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="11:30" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="11:45" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="12:00" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="12:15" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="12:30" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="12:45" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="13:00" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="13:15" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="13:30" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="13:45" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="14:00" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="14:15" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="14:30" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="14:45" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="15:00" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="15:15" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="15:30" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="15:45" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="16:00" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="16:15" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="16:30" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="16:45" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="17:00" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="17:15" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="17:30" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="17:45" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="18:00" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="18:15" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="18:30" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="18:45" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="19:00" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="19:15" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="19:30" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="19:45" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="20:00" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="20:15" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="20:30" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        <Hour hour="20:45" dayOfWeek={props.dayOfWeek} numberDay={props.numberDay} month={props.month}/>
        </div>
    </>

}