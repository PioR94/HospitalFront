import React from 'react';
import 'primeicons/primeicons.css';
import './UserPanel.css';
import { Avatar } from 'primereact/avatar';

export const UserPanel = () => {
  return (
    <>
      <div className="bg-panel">
        <div className="wrap-panel">
          <div className="sidebar">
            <div className="sidebar-icon-div" style={{ fontSize: 20 }}>
              <i className="pi pi-home icon"></i>
              <span className="span-icon">Główna</span>
            </div>
            <div className="sidebar-icon-div">
              <i className="pi pi-search icon"></i>
              <span className="span-icon">Szukaj</span>
            </div>
            <div className=" sidebar-icon-div">
              <i className="pi pi-calendar icon"></i>
              <span className="span-icon">Wizyty</span>
            </div>
            <div className="sidebar-icon-div">
              <i className="pi pi-clock icon"></i>
              <span className="span-icon">Terminarz</span>
            </div>
            <div className="sidebar-icon-div">
              <i className="pi pi-cog icon"></i>
              <span className="span-icon">Ustawienia</span>
            </div>
          </div>
          <div className="container-navbar-surface">
            <div className="navbar">
              <i className="pi pi-inbox icon icon-navbar"></i>
              <i className="pi pi-bell icon icon-navbar"></i>
              <Avatar icon="pi pi-user avatar" style={{ backgroundColor: '#9c27b0', color: '#ffffff', marginRight: 50 }} shape="circle" />
            </div>
            <div className="surface"></div>
          </div>
        </div>
      </div>
    </>
  );
};
