import React, {SyntheticEvent, useEffect, useState} from "react";
import {OneVisit} from "../OneVisit/OneVisit";
import "./VisitDoctor.css"


interface Props {
    idDr: string
}

interface Visit {
    idV: string;
    date: string;
    idPt: string;
}


export const VisitsDoctor = (props: Props) => {


    const [list, setList] = useState([]);
    const [on, setOn] = useState(false);


    const listAll = async (e: SyntheticEvent) => {

        e.preventDefault();

        const res = await fetch('http://localhost:3001/doctor/visits', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                doctorId: props.idDr,
            }),
        });

        const data = await res.json();

        const dataVisits = data.map((one: Visit) =>
            <OneVisit date={one.date} idPt={one.idPt}/>
        )

        setList(dataVisits)

        return on ? setOn(false) : setOn(true);
    }


    return <>
        <button className="buttonListAllDoctor" onClick={listAll}>Wizyty</button>
        {on && <ul>{list}</ul>}
    </>

}