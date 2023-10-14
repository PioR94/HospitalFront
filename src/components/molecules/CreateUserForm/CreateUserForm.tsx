import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import './CreateUserForm.css';
import { baseUrlDoctor, baseUrlSpecialization, downloadData, sendAndReceiveData } from '../../../api';
import { Messages } from 'primereact/messages';
import { createValidation, MESS_OK, showInfoMessage } from '../../../utils/functions/create-validation';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { InputMask } from 'primereact/inputmask';
import { Role } from '../../../types/role/role';
import { chooseValue } from '../../../utils/functions/choose-value';

export const CreateUserForm = (props: Role) => {
  const [message, setMessage] = useState({
    id: 0,
    message: '',
  });
  const [specializations, setSpecializations] = useState([]);
  const msgs = useRef<Messages>(null);
  const url = chooseValue(props.role) || '';

  useEffect(() => {
    if (message.message === MESS_OK) {
      sendAndReceiveData(form, url, 'ad').then((r) => {
        console.log(r);
        if (r.login) {
          setMessage({
            id: Date.now(),
            message: MESS_OK,
          });
          showInfoMessage(msgs, 'success', 'Ok', message.message);
        }
      });
    } else if (message.message && message.message !== MESS_OK) {
      showInfoMessage(msgs, 'error', 'Błąd', message.message);
    }
    console.log(props.role);
    console.log(chooseValue(props.role));
  }, [message]);

  const [form, setForm] = useState({
    login: '',
    password: '',
    mail: '',
    name: '',
    lastName: '',
    street: '',
    code: '',
    city: '',
    specialization: undefined,
  });
  useEffect(() => {
    downloadData(baseUrlSpecialization).then((r) => {
      setSpecializations(r);
    });
  }, []);

  const updateForm = (key: string, value: any) => {
    setForm((form) => ({
      ...form,
      [key]: value,
    }));
  };

  const sendForm = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(form);

    setMessage({
      message: createValidation(form.login, form.password, form.name, form.lastName, form.street, form.code, form.city, form.specialization),
      id: Date.now(),
    });
  };

  return (
    <>
      <div className="cc">
        <form onSubmit={sendForm} className="formRegister">
          <h2>Rejestracja</h2>
          <div className="card flex justify-content-center">
            <label htmlFor="login">Login</label>
            <InputText type="text" id="login" value={form.login} onChange={(e) => updateForm('login', e.target.value)} />{' '}
          </div>
          <div>
            <label htmlFor="password">Hasło</label>
            <Password type="password" id="password" value={form.password} onChange={(e) => updateForm('password', e.target.value)} toggleMask />
          </div>
          <div>
            <label htmlFor="mail">Email</label>

            <InputText type="email" id="mail" value={form.mail} onChange={(e) => updateForm('mail', e.target.value)} />
          </div>
          <div>
            <label htmlFor="">Imię</label>

            <InputText type="text" id="name" value={form.name} onChange={(e) => updateForm('name', e.target.value)} />
          </div>
          <div>
            <label htmlFor="lastName">Nazwisko</label>

            <InputText type="text" id="lastName" value={form.lastName} onChange={(e) => updateForm('lastName', e.target.value)} />
          </div>
          <div>
            <label htmlFor="street">Ulica</label>
            <InputText type="text" id="street" value={form.street} onChange={(e) => updateForm('street', e.target.value)} />
          </div>
          <div>
            <label htmlFor="code">Kod pocztowy</label>
            <InputMask
              type="text"
              id="code"
              value={form.code}
              onChange={(e) => updateForm('code', e.target.value)}
              mask="99-999"
              placeholder="__-___"
            />
          </div>
          <div>
            <label htmlFor="city">Miasto</label>
            <InputText type="text" id="city" value={form.city} onChange={(e) => updateForm('city', e.target.value)} />
          </div>
          {props.role === 'doctor' ? (
            <div>
              <label htmlFor="specialization">Specializacja</label>
              <Dropdown
                value={form.specialization}
                onChange={(e) => updateForm('specialization', e.target.value)}
                options={specializations}
                placeholder="Wybierz specjalizację"
                className="w-full md:w-14rem"
                id="specialization"
              />
            </div>
          ) : null}

          <button className="formRegister-button">Wyslij</button>
        </form>
        <Messages className="messages" ref={msgs} />
      </div>
    </>
  );
};
