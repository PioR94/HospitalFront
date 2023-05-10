import React from "react";
import "./App.css";
import {} from "types";
import { CreateDoctorForm } from "./components/CreateDoctorForm/CreateDoctorForm";
import { Link, Route, Routes } from "react-router-dom";
import { CreatePatientForm } from "./components/CreatePatientForm/CreatePatientForm";
import { BrowserRouter } from "react-router-dom";
import { MainComponent } from "./components/MainComponent/MainComponent";
import { LoginPatient } from "./components/LoginPatient/LoginPatient";
import { LoginDoctor } from "./components/LoginDoctor/LoginDoctor";

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
