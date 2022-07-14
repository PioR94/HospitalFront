import React from 'react';
import { Link } from 'react-router-dom';
import {Header} from "../Header/Header";


export const MainComponent = () => {

return <>
   <h2>Jestem</h2>
   <Link to="patient">Pacjentem</Link> <br/>
   <Link to="doctor">Lekarzem</Link>

</>

}