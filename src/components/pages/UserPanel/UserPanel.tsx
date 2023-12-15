import React, { useState } from 'react';
import 'primeicons/primeicons.css';
import './UserPanel.css';
import { Avatar } from 'primereact/avatar';
import { useNavigate } from 'react-router-dom';
import { Week } from '../../organisms/Week/Week';
import { Visits } from '../../molecules/Visits/Visits';

interface Props {
  id: string;
}

export const UserPanel = (props: Props) => {
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState<string>('visits');

  return (
    <>
      <div className="bg-panel">
        <div className="wrap-panel">
          <div className="sidebar">
            <div className="sidebar-icon-div" style={{ fontSize: 20 }}>
              <i className="pi pi-home icon" onClick={() => navigate('../patient')}></i>
              <span className="span-icon">Główna</span>
            </div>
            <div className="sidebar-icon-div">
              <i className="pi pi-search icon" onClick={() => navigate('../find-doctor')}></i>
              <span className="span-icon">Szukaj</span>
            </div>
            <div className=" sidebar-icon-div" onClick={() => setActiveComponent('visits')}>
              <i className="pi pi-calendar icon"></i>
              <span className="span-icon">Wizyty</span>
            </div>
            <div className="sidebar-icon-div" onClick={() => setActiveComponent('week')}>
              <i className="pi pi-clock icon"></i>
              <span className="span-icon">Terminarz</span>
            </div>
            <div className="sidebar-icon-div">
              <i className="pi pi-user icon"></i>
              <span className="span-icon">Profil</span>
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
              <Avatar
                icon="pi pi-user avatar"
                style={{ backgroundColor: '#9c27b0', color: '#ffffff', marginRight: 50 }}
                shape="circle"
              />
            </div>
            <div className="surface">
              {activeComponent === 'week' && <Week idDr={props.id} />}
              {activeComponent === 'visits' && <Visits />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
