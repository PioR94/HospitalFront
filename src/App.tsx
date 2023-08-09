import React from 'react';
import './App.css';
import { CreateDoctorForm } from './components/molecules/CreateDoctorForm/CreateDoctorForm';
import { Route, Routes } from 'react-router-dom';
import { CreatePatientForm } from './components/molecules/CreatePatientForm/CreatePatientForm';
import { BrowserRouter } from 'react-router-dom';
import { MainComponent } from './components/pages/MainComponent/MainComponent';
import { LoginPatient } from './components/molecules/LoginPatient/LoginPatient';
import { LoginDoctor } from './components/molecules/LoginDoctor/LoginDoctor';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { ListDoctor } from './components/organisms/ListDoctor/ListDoctor';
import RequireLogin from './utils/RequireLogin';
import { AccountPatient } from './components/pages/AccountPatient/AccountPatient';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="patient/ad" element={<CreatePatientForm />} />
          <Route path="patient/log" element={<LoginPatient />} />
          <Route path="doctor/ad" element={<CreateDoctorForm />} />
          <Route path="doctor" element={<LoginDoctor />} />
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
        </Routes>
      </BrowserRouter>
    </>
  );
}
