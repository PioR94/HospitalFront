import React, { SyntheticEvent, useEffect, useState } from 'react';
import './LoginUser.css';
import { sendAndReceiveData } from '../../../api';
import { useNavigate } from 'react-router-dom';
import { Role } from '../../../types/role/role';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { chooseValue } from '../../../utils/functions/choose-value';

export const LoginUser = (props: Role) => {
  const url = chooseValue(props.role) || '';

  const [form, setForm] = useState({
    login: '',
    password: '',
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
      if (props.role === 'patient') {
        navigate('../patient');
      } else if (props.role === 'doctor') {
        navigate('../doctor');
      }
    }

    console.log(token);
  }, [token]);

  const sendForm = async (e: SyntheticEvent) => {
    e.preventDefault();

    sendAndReceiveData(form, url, 'log').then((data) => {
      setToken(data.token);
    });
  };

  const clickRegister = () => {
    if (props.role === 'doctor') {
      navigate('../doctor/ad');
    } else if (props.role === 'patient') {
      navigate('../patient/ad');
    }
  };

  return (
    <div className="login-user-container">
      <div className="form-container">
        <form onSubmit={sendForm} className="form-login">
          <div className="wrap-input-label">
            <label htmlFor="login-user">Login</label>
            <InputText type="text" id="login-user" value={form.login} onChange={(e) => updateForm('login', e.target.value)} />{' '}
          </div>
          <div className="wrap-input-label">
            <label htmlFor="password-user">Hasło</label>
            <InputText type="password" id="password-user" value={form.password} onChange={(e) => updateForm('password', e.target.value)} />
          </div>
          <Button label="Zaloguj" icon="pi pi-user" />
        </form>
        <Divider layout="vertical" className="divider-vertical">
          <b>OR</b>
        </Divider>
        <Divider layout="horizontal" className="divider-horizontal" align="center">
          <b>OR</b>
        </Divider>
        <div className="signup-container">
          <Button label="Rejestracja" icon="pi pi-user-plus" severity="success" onClick={clickRegister} />
        </div>
      </div>
    </div>
  );
};
