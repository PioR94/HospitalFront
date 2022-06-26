import React from 'react';
import logo from './logo.svg';
import './App.css';
import {} from 'types';
import {CreateDoctorForm} from "./components/CreateDoctorForm/CreateDoctorForm";
import {Route, Routes} from "react-router-dom";

export function App() {
  return  <>
    <CreateDoctorForm/>
     {/* <Routes>*/}
     {/*   <Route path="/create" element={<CreateDoctorForm/>}/>*/}

     {/*</Routes>*/}
  </>
}

export default App;
