import React from "react";
import "./Confirm.css";
import { Btn } from "../Btn/Btn";
import ReactDOM from "react-dom";

interface Props {
  message: string;
  clickNo: any;
  clickYes: any;
  hour: string;
  numberDay: string;
  month: string;
  year: string;
}

export const Confirm = (props: Props) => {
  return ReactDOM.createPortal(
    <div className="confirm-bg">
      <div className="confirm">
        <p className="confirm-date">
          {`${props.numberDay} ${props.month} ${props.year}r. godz. ${props.hour}`}{" "}
        </p>
        <p className="confirm-message">{props.message}</p>
        <Btn text="Tak" class="yes" onClick={props.clickYes} />
        <Btn text="Nie" class="no" onClick={props.clickNo} />
      </div>
    </div>,
    document.body
  );
};
