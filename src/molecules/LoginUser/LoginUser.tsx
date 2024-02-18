import React, { BaseSyntheticEvent, SyntheticEvent, useEffect, useState } from 'react';
import './LoginUser.css';
import { sendAndReceiveData } from '../../api';
import { Role } from '../../types/role/role';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { chooseValue } from '../../utils/functions/choose-value';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InputsLog } from '../../types/hook-form/inputs';
import { useNavigateLogin } from '../../hooks/components/LoginUser/useNavigateLogin';

export const LoginUser = ({ role }: Role) => {
  const url = chooseValue(role) || '';

  const [token, setToken] = useState('');

  const { clickRegister } = useNavigateLogin(role, token);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputsLog>();

  const onSubmit: SubmitHandler<InputsLog> = (data: InputsLog, event: BaseSyntheticEvent | undefined) => {
    event?.preventDefault();

    sendAndReceiveData(data, url, 'log').then((data) => {
      setToken(data.token);
    });
  };

  return (
    <div className="login-user-container">
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)} className="form-login">
          <div className="wrapp-input-label">
            <label htmlFor="login-user">Login</label>
            <InputText type="text" id="login-user" {...register('login')} />{' '}
          </div>
          <div className="wrapp-input-label">
            <label htmlFor="password-user">Hasło</label>
            <InputText type="password" id="password-user" {...register('password')} />
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
