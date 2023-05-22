import React, { useState } from "react";
import "./OneDoctor.css";
import { FreeTermWeek } from "../FreeTermWeek/FreeTermWeek";
import { MdLocationOn } from "react-icons/md";
import { changeClass } from "../../../utils/function";

interface Props {
  idDr: string;
  idPt: string;
  name: string;
  lastName: string;
  specialization: string;
  address: string;
}

export const OneDoctor = (props: Props) => {
  const [wrap, setWrap] = useState(false);

  const scroll = (): void => {
    wrap ? setWrap(false) : setWrap(true);
  };

  return (
    <>
      <div className="divVisit">
        <div className="image" />
        <div className="pDr">
          <p>
            lek. {props.name} {props.lastName}{" "}
          </p>
          <p>{props.specialization}</p>
        </div>
        <div className="address">
          <div id="adres">Adres</div>
          <MdLocationOn size={20} />
          <p className="p-address">{props.address}</p>
        </div>
        <hr />
        <div>
          <div
            className={changeClass(
              wrap,
              "wrap-free-term-week-down",
              "wrap-free-term-week"
            )}
          >
            <FreeTermWeek idDr={props.idDr} />
          </div>
          <div
            className={changeClass(wrap, "arrow-up", "arrow-down")}
            onClick={scroll}
          >
            🡫
          </div>
        </div>
      </div>
    </>
  );
};
