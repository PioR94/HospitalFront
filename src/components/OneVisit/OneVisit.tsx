import React from "react";


interface Props {
    date: string;
    idPt?: string;
    idDr?: string;
}

export const OneVisit = (props: Props) => {


   return props.idPt ?
       <>
        <p>Termin {props.date} <br/>Pacjent id: {props.idPt}</p>
           <hr/>
       </>
       :
       <>
           <p>Termin {props.date} <br/>Dr id: {props.idDr}</p>
           <hr/>
       </>
}