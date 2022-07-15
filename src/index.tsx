import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {CreatePatientForm} from "./components/CreatePatientForm/CreatePatientForm";
import {CreateDoctorForm} from "./components/CreateDoctorForm/CreateDoctorForm";
import {LoginPatient} from "./components/LoginPatient/LoginPatient";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
