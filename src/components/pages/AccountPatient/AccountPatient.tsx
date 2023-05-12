import React from "react";
import { ListDoctor } from "../../organisms/ListDoctor/ListDoctor";
import { VisitsPatient } from "../../molecules/VisitPatient/VisitPatient";
import "./AccountPatient.css";

interface Props {
  idPt: string;
  loginPt: string;
}

export const AccountPatient = (props: Props) => {
  return (
    <div className="bg">
      <header className="headerAccountPatient">
        <h2 className="h2AccountPatient">{props.loginPt}</h2>
        <ListDoctor idPt={props.idPt} />
        <VisitsPatient idPt={props.idPt} />
      </header>
    </div>
  );
};
