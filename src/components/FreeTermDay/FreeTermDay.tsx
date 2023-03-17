import React, {useEffect, useState} from "react";
import {FreeTerm} from "types";
import {FreeTermHour} from "../FreeTermHour/FreeTermHour";
import './FreeTermDay.css'

interface Props {
    dayOfWeek: string;
    numberDay: string;
    month: string;
    year: string;
    idDr: string;
}

let t: FreeTerm[];

export const FreeTermDay = (props: Props) => {

    const [freeTerms, setFreeTerms] = useState([]);

    const dayData = {
        numberDay: props.numberDay,
        month: props.month,
        year: props.year,
        idDr: props.idDr,
    };


    const getTerms = async (): Promise<void> => {

        await fetch('http://localhost:3001/term/free-terms', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({
                    ...dayData
                }),
            },
        )
            .then(res => res.json())
            .then(data => {
                const r = data.map((term: FreeTerm) => <FreeTermHour id={term.id} hour={term.hour}
                                                                     numberDay={term.numberDay} month={term.month}
                                                                     year={term.year} reservation={term.reservation}
                                                                     key={term.id}/>);
                setFreeTerms(r);
            })
    };

    useEffect(() => {
        getTerms();
    }, [])


    const render = (t: any) => {

        return t;
    }


    return <>

        <div className="free-term-day">
            <div className="ftd-div-date">

                <div className="div-dayOfWeek">{props.dayOfWeek}</div>
                <div>{props.numberDay} {props.month}</div>
            </div>
            {render(freeTerms)}
        </div>
    </>
}