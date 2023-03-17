import React, {SyntheticEvent, useEffect, useState} from 'react';
import {Btn} from "../Btn/Btn";
import "./CreateDoctorForm.css"


export const CreateDoctorForm = () => {

    const [loading, setLoading] = useState(false);
    const [login, setLogin] = useState('');
    const [err, setErr] = useState(false);


    const [form, setForm] = useState({
        login: '',
        password: '',
        mail: '',
        name: '',
        lastName: '',
        address: '',
        specialization: '',
    });

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    };

    if (loading) {
        return <div className="bg">
            <h2 className="infCreate">Uploading</h2>
        </div>
    }

    if (login) {
        return <div className="bg">
            <h2 className="infCreate">Konto zostało poprawnie utworzone</h2>
            <a href="/doctor" className="log">Zaloguj się</a>
        </div>
    }

    if (err) {
        return <>
            <div className="bg">
                <h2 className="infCreate">Login lub email są zajęte</h2>
            </div>
        </>
    }


    const sendForm = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(true);

        try {

            const res = await fetch('http://localhost:3001/doctor/ad', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                }),
            });

            const data = await res.json();

            setLogin(data.login);

        } catch {
            setErr(true);

            setTimeout(() => {
                setErr(false);
            }, 3000)

        } finally {
            setLoading(false);
        }
    };


    return <div className="bg">
        <form action="" onSubmit={sendForm} className="formRegister">
            <h2>Rejestracja</h2>
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
            <p>
                <label>
                    Email: <br/>
                    <input
                        type="email"
                        name="mail"
                        value={form.mail}
                        onChange={e => updateForm('mail', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Imie: <br/>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={e => updateForm('name', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Nazwisko: <br/>
                    <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={e => updateForm('lastName', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Adres: <br/>
                    <input
                        type="text"
                        name="address"
                        value={form.address}
                        onChange={e => updateForm('address', e.target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    Specjalizacja: <br/>
                    <input
                        type="text"
                        name="specialization"
                        value={form.specialization}
                        onChange={e => updateForm('specialization', e.target.value)}
                    />
                </label>
            </p>

            <button>Wyslij</button>

        </form>
    </div>

}