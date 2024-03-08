import React from 'react';
import './LoginUser.css';
import { Role } from '../../types/role/role';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { useLoginUser } from './useLoginUser';

export const LoginUser = ({ role }: Role) => {
  const { clickRegister, onSubmit, register, handleSubmit } = useLoginUser(role);

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
