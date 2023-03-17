import React from 'react';
import {Link} from 'react-router-dom';
import "./MainComponent.css"


export const MainComponent = () => {

    return <>
        <div className="bg">
            <div className="center">
                <h2>Jestem</h2>
                <Link to="patient" className="link1">Pacjentem</Link> <br/>
                <Link to="doctor" className="link2">Lekarzem</Link>
            </div>
        </div>
    </>

}