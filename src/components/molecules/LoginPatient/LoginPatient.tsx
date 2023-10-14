import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Btn } from '../../atoms/Btn/Btn';

import './LoginPatient.css';
import { baseUrlPatient, sendAndReceiveData, sendToken } from '../../../api';
import { useNavigate } from 'react-router-dom';

export const LoginPatient = () => {
  const [form, setForm] = useState({
    login: 'Piotrek123',
    password: '12345678',
  });
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  const updateForm = (key: string, value: any) => {
    setForm((form) => ({
      ...form,
      [key]: value,
    }));
  };

  useEffect(() => {
    if (token) {
      sessionStorage.setItem('token', token);
      navigate('../patient');
    }
    console.log(token);

    sendToken(token, baseUrlPatient, 'verify-token');
  }, [token]);

  const sendForm = async (e: SyntheticEvent) => {
    e.preventDefault();

    sendAndReceiveData(form, baseUrlPatient, 'log').then((data) => {
      setToken(data.token);
    });
  };

  const click = async () => {};

  return (
    <div className="bg">
      <form onSubmit={sendForm} className="formLogin">
        <h2>Zaloguj się</h2>
        <p>
          <label>
            Login: <br />
            <input type="text" name="login" value={form.login} onChange={(e) => updateForm('login', e.target.value)} />
          </label>
        </p>
        <p>
          <label>
            Hasło: <br />
            <input type="password" name="password" value={form.password} onChange={(e) => updateForm('password', e.target.value)} />
          </label>
        </p>
        <Btn text="Dalej" onClick={click} class={'go-button'} />
        <Btn text="Rejestracja" to="ad" class={'reg-button'} />
      </form>
    </div>
  );
};
