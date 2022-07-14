import React, {SyntheticEvent, useEffect, useState} from 'react';
import {Btn} from "../Btn/Btn";


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
        return <h2>Uploading</h2>;
    }

    if (login) {
        return <>
            <h2>Dodano pomyślnie</h2>
            <a href="/doctor">Zaloguj się</a>
        </>
    }

    if (err) {
        return<>
            <h2>Login lub hasło są zajęte</h2>
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

           }


           finally {
               setLoading(false);
           }
    };





    return <>
        <form action="" onSubmit={sendForm}>
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
    </>
}