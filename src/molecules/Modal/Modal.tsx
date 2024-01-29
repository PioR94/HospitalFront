import React from 'react';
import './Modal.css';
import ReactDOM from 'react-dom';
import { Button } from 'primereact/button';
import { ModalProps } from '../../types/props/props';

export const Modal = ({ message, clickNo, clickYes, hour, numberDay, month, year }: ModalProps) => {
  return ReactDOM.createPortal(
    <div className="confirm-bg">
      <div className="confirm">
        <p className="confirm-message">{message}</p>
        <p className="confirm-date">{`${numberDay} ${month} ${year}r. godz. ${hour}`} </p>
        <div className="container-button">
          <Button className="yes" onClick={clickYes} icon="pi pi-check" rounded severity="success" />
          <Button className="no" onClick={clickNo} icon="pi pi-times" rounded severity="danger" />
        </div>
      </div>
    </div>,
    document.body,
  );
};
