import React, {useEffect, useState} from "react";
import { Term } from "types";
import './Hour.css'


export const Hour = (props: Term) => {

    const [active, setActive] = useState(false);


    const term: Term = {
        id: props.id,
        hour: props.hour,
        dayOfWeek: props.dayOfWeek,
        numberDay: props.numberDay,
        month: props.month,
        year: props.year,
        idDr: props.idDr,
        loginDr: props.loginDr,
        nameDr: props.nameDr,
        lastNameDr: props.lastNameDr,
    };

    const termId = props.id;


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
        active ? setActive(false) : setActive(true);
    }
    (async () => {
        await fetch('http://localhost:3001/term/term-id', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                termId,
            })
        })
            .then(res => res.json())
            .then(data => {
                setActive(data);
            })
    })();

    const changeClassName = () => {
        return active ? "_hour-div-active" : "_hour-div"
    }

    return <>
        <div onClick={addTerm} className={changeClassName()}>
                {props.hour}
        </div>
    </>
}
