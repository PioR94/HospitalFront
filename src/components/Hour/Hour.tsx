import React from "react";
import { Term } from "types";
import './Hour.css'


export const Hour = (props: Omit<Term, 'id'>) => {

    const term: Omit<Term, 'id'> = {
        hour: props.hour,
        dayOfWeek: props.dayOfWeek,
        numberDay: props.numberDay,
        month: props.month,
        year: props.year,
        idDr: props.idDr,
        loginDr: props.loginDr,
        nameDr: props.nameDr,
        lastNameDr: props.lastNameDr,
    }


    const addTerm = async () => {

        await fetch('http://localhost:3001/term/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...term,
            })
        })
    }

    return <>
        <div onClick={addTerm} className="_hour-div">

                <p>{props.hour}</p>

        </div>
    </>
}