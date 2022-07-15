import React from "react";
import "./OneVisit.css"

interface Props {
    date: string;
    idPt?: string;
    idDr?: string;
}

export const OneVisit = (props: Props) => {


   return props.idPt ?
       <div className="oneVisit">
        <p>Termin {props.date} <br/>Pacjent id: {props.idPt}</p>
           <hr/>
       </div>
       :
       <div className="oneVisit">
           <p>Termin {props.date} <br/>Dr id: {props.idDr}</p>
           <hr/>
       </div>
}