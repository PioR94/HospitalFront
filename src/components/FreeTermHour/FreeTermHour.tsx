import React from "react";
import {FreeTerm} from "types";
import './FreeTermHour.css'


export const FreeTermHour = (props: FreeTerm) => {


    const bookTerm = () => {

    }


    return <>
        <div onClick={bookTerm}  className="free-term-hour">
            {props.hour}
        </div>
    </>
}