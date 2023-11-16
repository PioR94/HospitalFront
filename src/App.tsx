import React from 'react';
import './App.css';
import { CreateUserForm } from './components/molecules/CreateUserForm/CreateUserForm';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { MainComponent } from './components/pages/MainComponent/MainComponent';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { ListDoctor } from './components/organisms/ListDoctor/ListDoctor';
import RequireLogin from './utils/RequireLogin';
import { AccountPatient } from './components/pages/AccountPatient/AccountPatient';
import { LoginUser } from './components/molecules/LoginUser/LoginUser';
import { AccountDoctor } from './components/pages/AccountDoctor/AccountDoctor';
import { UserPanel } from './components/pages/UserPanel/UserPanel';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="patient/ad" element={<CreateUserForm role={'patient'} />} />
          <Route path="patient/log" element={<LoginUser role={'patient'} />} />
          <Route path="patient/panel" element={<UserPanel />} />
          <Route path="doctor/ad" element={<CreateUserForm role={'doctor'} />} />
          <Route path="doctor/log" element={<LoginUser role={'doctor'} />} />
          <Route
            path="find-doctor"
            element={
              <RequireLogin>
                <ListDoctor />
              </RequireLogin>
            }
          />
          <Route
            path="patient"
            element={
              <RequireLogin>
                <AccountPatient />
              </RequireLogin>
            }
          />
          <Route
            path="doctor"
            element={
              <RequireLogin>
                <AccountDoctor />
              </RequireLogin>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
