import React from 'react';
import './Modal.css';
import { Btn } from '../../atoms/Btn/Btn';
import ReactDOM from 'react-dom';
import { Button } from 'primereact/button';

interface Props {
  message: string;
  clickNo: any;
  clickYes: any;
  hour: string;
  numberDay: string;
  month: string;
  year: string;
}

export const Modal = (props: Props) => {
  return ReactDOM.createPortal(
    <div className="confirm-bg">
      <div className="confirm">
        <p className="confirm-message">{props.message}</p>
        <p className="confirm-date">{`${props.numberDay} ${props.month} ${props.year}r. godz. ${props.hour}`} </p>
        <div className="container-button">
          <Button className="yes" onClick={props.clickYes} icon="pi pi-check" rounded severity="success" />
          <Button className="no" onClick={props.clickNo} icon="pi pi-times" rounded severity="danger" />
        </div>
      </div>
    </div>,
    document.body,
  );
};
