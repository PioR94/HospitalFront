import React from "react";
import {FreeTerm} from "types";
import './FreeTermHour.css'
import {Confirm} from "../Message/Confirm";


export const FreeTermHour = (props: FreeTerm) => {


    const bookTerm = () => {

    }


    return <>
        <div onClick={bookTerm}  className="free-term-hour">
            {props.hour}
            <Confirm message="Czy chcesz zarezerwować ten termin?" />
        </div>
    </>
}