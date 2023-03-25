import React, {SyntheticEvent, useState} from 'react';
import {OneDoctor} from "../OneDoctor/OneDoctor";
import "./ListDoctor.css"

interface Props {
    idPt: string,
}

interface DataDr {
    idDr: string,
    nameDr: string,
    lastNameDr: string,
    specialization: string,
    address: string;
}


export const ListDoctor = (props: Props) => {

    const [list, setList] = useState([]);
    const [on, setOn] = useState(false);


    const listAll = async (e: SyntheticEvent) => {

        e.preventDefault();

        const res = await fetch('http://localhost:3001/patient');
        const data = await res.json();

        const dataDr = data.map((one: DataDr) =>
            <li className="listAllLi"><OneDoctor key={one.idDr} idDr={one.idDr} name={one.nameDr}
                                                 lastName={one.lastNameDr} specialization={one.specialization}
                                                 idPt={props.idPt} address={one.address} /></li>
        )

        setList(dataDr);

        return on ? setOn(false) : setOn(true);
    }


    return <>
        <button onClick={listAll} className="listAllButton">Lista lekarzy</button>
        {on && <ul className="listAllUl">{list}</ul>}
    </>


}