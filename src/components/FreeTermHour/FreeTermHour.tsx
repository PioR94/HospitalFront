import React, {useState} from "react";
import {FreeTerm} from "types";
import './FreeTermHour.css'
import {Confirm} from "../Confirm/Confirm";


export const FreeTermHour = (props: FreeTerm) => {

    const [display, setDisplay] = useState(false);

    const bookTerm = () => display ? setDisplay(false) : setDisplay(true)


    const displayConfirm = () => display ?
        <Confirm message="Czy chcesz zarezerwować ten termin?" clickNo={offDisplay} hour={props.hour}
                 numberDay={props.numberDay} month={props.month} year={props.year}/> : false;

    const offDisplay = () => setDisplay(false);

    return <>

        <div onClick={bookTerm} className="free-term-hour">
            {props.hour}

        </div>
        {displayConfirm()}
    </>
}