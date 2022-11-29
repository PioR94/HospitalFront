import React, {SyntheticEvent, useEffect, useState} from 'react';
import { Btn } from '../Btn/Btn';
import {AccountPatient} from "../AccountPatient/AccountPatient";
import {AccountDoctor} from "../AccountDoctor/AccountDoctor";
import "./LoginDoctor.css"


export const LoginDoctor = () => {

    const [form, setForm] = useState({
        login: 'michał123',
        password: '12345678',
    });
    const [logged, setLogged] = useState(false)
    const [id, setId] = useState('');
    const [login, setLogin] = useState('')

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    };





    const sendForm = async (e: SyntheticEvent) => {

        e.preventDefault();

        await fetch('http://localhost:3001/doctor/log', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...form,
            }),

        })
            .then(res => res.json())
            .then(data => {
                setLogged(data.log);
                setId(data.id);
                setLogin(data.login)
            });
    }

    const click = async () => {



    }


    return  logged ? <AccountDoctor loginDr={login} idDr={id}/>
                   :   <div className="bg">

        <form action=""  onSubmit={sendForm} className="formLogin">

        <h2>Zaloguj się</h2>
        <p>
            <label>
                Login: <br/>
                <input
                    type="text"
                    name="login"
                    value={form.login}
                    onChange={e => updateForm('login', e.target.value)}
                />
            </label>
        </p>
        <p>
            <label>
                Hasło: <br/>
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={e => updateForm('password', e.target.value)}
                />
            </label>
        </p>
        <Btn text="Zaloguj" onClick={click}/>  <Btn text="Rejestracja" to="ad"/>
    </form>
        </div>



}