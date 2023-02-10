import React from "react";
import { FreeTerm } from "types";
import './FreeTermHour.css'


export const FreeTermHour = (props: FreeTerm) => {



    return <>
        <div className="free-term-hour">
           {props.hour}
        </div>
    </>
}