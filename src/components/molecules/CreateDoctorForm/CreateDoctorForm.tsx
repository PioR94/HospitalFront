import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import './CreateDoctorForm.css';
import { baseUrlDoctor, baseUrlSpecialization, downloadData, sendAndReceiveData } from '../../../api';
import { Messages } from 'primereact/messages';
import { createValidation, MESS_OK, showInfoMessage } from '../../../utils/functions/create-validation';
import { Dropdown } from 'primereact/dropdown';

export const CreateDoctorForm = () => {
  const [message, setMessage] = useState({
    id: 0,
    message: '',
  });
  const [specializations, setSpecializations] = useState([]);
  const msgs = useRef<Messages>(null);

  useEffect(() => {
    if (message.message === MESS_OK) {
      sendAndReceiveData(form, baseUrlDoctor, 'ad').then((r) => {
        if (r.login) {
          setMessage({ id: Date.now(), message: MESS_OK });
          showInfoMessage(msgs, 'success', 'Ok', message.message);
        }
      });
    } else if (message.message && message.message !== MESS_OK) {
      showInfoMessage(msgs, 'error', 'Błąd', message.message);
    }
  }, [message]);

  const [form, setForm] = useState({
    login: '',
    password: '',
    mail: '',
    name: '',
    lastName: '',
    address: '',
    specialization: '',
  });
  useEffect(() => {
    downloadData(baseUrlSpecialization).then((r) => {
      setSpecializations(r);
    });
  }, []);
  useEffect(() => {
    console.log(specializations);
  }, [specializations]);
  const updateForm = (key: string, value: any) => {
    setForm((form) => ({
      ...form,
      [key]: value,
    }));
  };

  const sendForm = async (e: SyntheticEvent) => {
    e.preventDefault();

    setMessage({ message: createValidation(form.login, form.name, form.lastName, form.address, form.password, form.specialization), id: Date.now() });
  };

  return (
    <>
      <div className="cc">
        <form onSubmit={sendForm} className="formRegister">
          <h2>Rejestracja</h2>
          <p>
            <label>
              Login: <br />
              <input type="text" name="login" value={form.login} onChange={(e) => updateForm('login', e.target.value)} />{' '}
            </label>
          </p>
          <p>
            <label>
              Hasło: <br />
              <input type="password" name="password" value={form.password} onChange={(e) => updateForm('password', e.target.value)} />
            </label>
          </p>
          <p>
            <label>
              Email: <br />
              <input type="email" name="mail" value={form.mail} onChange={(e) => updateForm('mail', e.target.value)} />
            </label>
          </p>
          <p>
            <label>
              Imie: <br />
              <input type="text" name="name" value={form.name} onChange={(e) => updateForm('name', e.target.value)} />
            </label>
          </p>
          <p>
            <label>
              Nazwisko: <br />
              <input type="text" name="lastName" value={form.lastName} onChange={(e) => updateForm('lastName', e.target.value)} />
            </label>
          </p>
          <p>
            <label>
              Adres: <br />
              <input type="text" name="address" value={form.address} onChange={(e) => updateForm('address', e.target.value)} />
            </label>
          </p>
          <p>
            <label>
              Specjalizacja: <br />
              <Dropdown
                value={form.specialization}
                onChange={(e) => updateForm('specialization', e.target.value)}
                options={specializations}
                placeholder="Wybierz specjalizację"
                className="w-full md:w-14rem"
              />
            </label>
          </p>
          <button className="formRegister-button">Wyslij</button>
        </form>
        <Messages className="messages" ref={msgs} />
      </div>
    </>
  );
};
