import React from 'react';
import './App.css';
import {} from 'types';
import { CreateDoctorForm } from './components/molecules/CreateDoctorForm/CreateDoctorForm';
import { Link, Route, Routes } from 'react-router-dom';
import { CreatePatientForm } from './components/molecules/CreatePatientForm/CreatePatientForm';
import { BrowserRouter } from 'react-router-dom';
import { MainComponent } from './components/pages/MainComponent/MainComponent';
import { LoginPatient } from './components/molecules/LoginPatient/LoginPatient';
import { LoginDoctor } from './components/molecules/LoginDoctor/LoginDoctor';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="patient/ad" element={<CreatePatientForm />} />
          <Route path="patient" element={<LoginPatient />} />
          <Route path="doctor/ad" element={<CreateDoctorForm />} />
          <Route path="doctor" element={<LoginDoctor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
