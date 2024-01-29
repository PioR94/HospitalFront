import React from 'react';
import './App.css';
import { CreateUserForm } from './molecules/CreateUserForm/CreateUserForm';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { MainComponent } from './pages/MainComponent/MainComponent';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { ListDoctor } from './organisms/ListDoctor/ListDoctor';
import RequireLogin from './utils/RequireLogin';
import { AccountPatient } from './pages/AccountPatient/AccountPatient';
import { LoginUser } from './molecules/LoginUser/LoginUser';
import { UserPanel } from './pages/UserPanel/UserPanel';
import { GetUserData } from './atoms/GetUserData/GetUserData';
import { SuccessPayment } from './molecules/SuccessPayment/SuccessPayment';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GetUserData />
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="patient/add" element={<CreateUserForm role={'patient'} />} />
          <Route path="patient/log" element={<LoginUser role={'patient'} />} />
          <Route
            path="patient/panel"
            element={
              <RequireLogin requiredRole="patient">
                <UserPanel role={'patient'} />
              </RequireLogin>
            }
          />
          <Route
            path="doctor/panel"
            element={
              <RequireLogin requiredRole="doctor">
                <UserPanel role={'doctor'} />
              </RequireLogin>
            }
          />
          <Route path="doctor/add" element={<CreateUserForm role={'doctor'} />} />
          <Route path="doctor/log" element={<LoginUser role={'doctor'} />} />
          <Route
            path="find-doctor"
            element={
              <RequireLogin requiredRole="patient">
                <ListDoctor />
              </RequireLogin>
            }
          />
          <Route
            path="patient"
            element={
              <RequireLogin requiredRole="patient">
                <AccountPatient />
              </RequireLogin>
            }
          />
          <Route path="success" element={<SuccessPayment />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
