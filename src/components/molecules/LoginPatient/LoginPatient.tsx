import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Btn } from '../../atoms/Btn/Btn';
import { AccountPatient } from '../../pages/AccountPatient/AccountPatient';
import './LoginPatient.css';
import { baseUrlPatient, sendAndReceiveData } from '../../../api';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../../../redux/login-slice';
import { AppState } from '../../../types/redux/app-state';

export const LoginPatient = () => {
  const [form, setForm] = useState({
    login: 'Piotrek123',
    password: '12345678',
  });
  const [logged, setLogged] = useState(false);
  const [id, setId] = useState('');
  const dispatch = useDispatch();
  const userActiveLogin = useSelector((state: AppState) => state.activeLogin);
  const updateForm = (key: string, value: any) => {
    setForm((form) => ({
      ...form,
      [key]: value,
    }));
  };

  useEffect(() => {
    console.log(userActiveLogin);
    console.log(logged);
  });

  const sendForm = async (e: SyntheticEvent) => {
    e.preventDefault();

    sendAndReceiveData(form, baseUrlPatient, 'log').then((data) => {
      setLogged(data.log);
      setId(data.id);
      dispatch(setLogin(data.login));
    });
  };

  const click = async () => {};

  return logged ? (
    <AccountPatient loginPt={userActiveLogin} idPt={id} />
  ) : (
    <div className="bg">
      <form action="" onSubmit={sendForm} className="formLogin">
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
