import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { CreateUserForm } from './molecules/CreateUserForm/CreateUserForm';
import { MainComponent } from './pages/MainComponent/MainComponent';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { ListDoctor } from './organisms/ListDoctor/ListDoctor';
import RequireLogin from './atoms/RequireLogin';
import { AccountPatient } from './pages/AccountPatient/AccountPatient';
import { LoginUser } from './molecules/LoginUser/LoginUser';
import { UserPanel } from './pages/UserPanel/UserPanel';
import { SuccessPayment } from './molecules/SuccessPayment/SuccessPayment';

export default function App() {
  const router = createBrowserRouter([
    { path: '/', element: <MainComponent /> },
    { path: 'patient/add', element: <CreateUserForm role={'patient'} /> },
    { path: 'patient/log', element: <LoginUser role={'patient'} /> },
    {
      path: 'patient/panel',
      element: (
        <RequireLogin requiredRole="patient">
          <UserPanel role={'patient'} />
        </RequireLogin>
      ),
    },
    {
      path: 'doctor/panel',
      element: (
        <RequireLogin requiredRole="doctor">
          <UserPanel role={'doctor'} />
        </RequireLogin>
      ),
    },
    { path: 'doctor/add', element: <CreateUserForm role={'doctor'} /> },
    { path: 'doctor/log', element: <LoginUser role={'doctor'} /> },
    {
      path: 'find-doctor',
      element: (
        <RequireLogin requiredRole="patient">
          <ListDoctor />
        </RequireLogin>
      ),
    },
    {
      path: 'patient',
      element: (
        <RequireLogin requiredRole="patient">
          <AccountPatient />
        </RequireLogin>
      ),
    },
    { path: 'success', element: <SuccessPayment /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
