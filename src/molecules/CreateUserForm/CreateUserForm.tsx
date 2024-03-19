import React, { BaseSyntheticEvent } from 'react';
import './CreateUserForm.css';
import { sendAndReceiveData, sendData } from '../../api';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { Role } from '../../types/role/role';
import { chooseValue } from '../../utils/functions/choose-value';
import { Button } from 'primereact/button';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { InputsAddForm, InputsLog } from '../../types/hook-form/inputs';
import { useSpecializations } from '../../hooks/useSpecializations';
import { useNavigate } from 'react-router-dom';

export const CreateUserForm = ({ role }: Role) => {
  const { specializations } = useSpecializations();

  const navigate = useNavigate();

  const url = chooseValue(role) || '';

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<InputsAddForm>();

  const [password, repeatPassword] = watch(['password', 'repeatPassword']);

  const onSubmit: SubmitHandler<InputsLog> = (data: InputsLog, event: BaseSyntheticEvent | undefined) => {
    event?.preventDefault();

    sendAndReceiveData(data, url, 'add').then((r) => {
      if (r.statusCode === 201) {
        navigate(`../${role}/log`);
      }
    });
  };

  return (
    <div className="container-CUF">
      <form onSubmit={handleSubmit(onSubmit)} className="form-register">
        <h2 id="register-h2">Rejestracja</h2>
        <div className="container-div">
          <div className="container-input">
            <label htmlFor="login" style={errors.login && { color: 'red' }}>
              Login
            </label>
            <InputText type="text" id="login" {...register('login', { required: true })} style={errors.login && { borderColor: 'red' }} />
            {errors.login && <p style={{ color: 'red', fontSize: 12 }}>Pole jest wymagane</p>}
          </div>
          <div className="container-input">
            <label htmlFor="mail" style={errors.mail && { color: 'red' }}>
              Email
            </label>
            <InputText type="email" id="mail" {...register('mail', { required: true })} style={errors.mail && { borderColor: 'red' }} />
            {errors.mail && <p style={{ color: 'red', fontSize: 12 }}>Pole jest wymagane</p>}
          </div>
        </div>
        <div className="container-div">
          <div className="container-input" id="password-div">
            <label htmlFor="password" style={errors.password && { color: 'red' }}>
              Hasło
            </label>
            <InputText
              id="password"
              type="password"
              {...register('password', {
                required: true,
                validate: {
                  checkLength: (value) => value.length >= 8,
                },
              })}
              style={errors.password && { borderColor: 'red' }}
            />
            {errors.password?.type === 'required' && <p style={{ color: 'red', fontSize: 12 }}>Pole jest wymagane</p>}
            {errors.password?.type === 'checkLength' && <p style={{ color: 'red', fontSize: 12 }}>Hasło musi zawierać min 8 znaków</p>}
          </div>
          <div className="container-input" id="password-div">
            <label htmlFor="repeat-password" style={errors.repeatPassword && { color: 'red' }}>
              Powtórz Hasło
            </label>
            <InputText
              id="repeat-password"
              type="password"
              {...register('repeatPassword', {
                required: true,
                validate: {
                  compare: (value) => value === password,
                },
              })}
              style={errors.repeatPassword && { borderColor: 'red' }}
            />
            {errors.repeatPassword?.type === 'required' && <p style={{ color: 'red', fontSize: 12 }}>Pole jest wymagane</p>}
            {errors.repeatPassword?.type === 'compare' && (
              <p style={{ color: 'red', fontSize: 12 }}>Wartość pola jest inna od wartości w polu hasło</p>
            )}
          </div>
        </div>
        <div className="container-div">
          <div className="container-input">
            <label htmlFor="name" style={errors.name && { color: 'red' }}>
              Imię
            </label>
            <InputText type="text" id="name" {...register('name', { required: true })} style={errors.name && { borderColor: 'red' }} />
            {errors.name && <p style={{ color: 'red', fontSize: 12 }}>Pole jest wymagane</p>}
          </div>
          <div className="container-input">
            <label htmlFor="lastName" style={errors.lastName && { color: 'red' }}>
              Nazwisko
            </label>

            <InputText type="text" id="lastName" {...register('lastName', { required: true })} style={errors.lastName && { borderColor: 'red' }} />
            {errors.lastName && <p style={{ color: 'red', fontSize: 12 }}>Pole jest wymagane</p>}
          </div>
        </div>
        <div className="container-div">
          <div className="container-input">
            <label htmlFor="code" style={errors.code && { color: 'red' }}>
              Kod pocztowy
            </label>
            <InputMask
              type="text"
              id="code"
              mask="99-999"
              placeholder="__-___"
              {...register('code', { required: true })}
              style={errors.code && { borderColor: 'red' }}
            />
            {errors.code && <p style={{ color: 'red', fontSize: 12 }}>Pole jest wymagane</p>}
          </div>
          <div className="container-input">
            <label htmlFor="city" style={errors.city && { color: 'red' }}>
              Miasto
            </label>
            <InputText type="text" id="city" {...register('city', { required: true })} style={errors.city && { borderColor: 'red' }} />
            {errors.city && <p style={{ color: 'red', fontSize: 12 }}>Pole jest wymagane</p>}
          </div>
        </div>
        <div className="container-input">
          <label htmlFor="street" style={errors.street && { color: 'red' }}>
            Ulica
          </label>
          <InputText type="text" id="street" {...register('street', { required: true })} style={errors.street && { borderColor: 'red' }} />
          {errors.street && <p style={{ color: 'red', fontSize: 12 }}>Pole jest wymagane</p>}
        </div>

        {role === 'doctor' ? (
          <div className="container-input">
            <label htmlFor="specialization" style={errors.specialization && { color: 'red' }}>
              Specializacja
            </label>
            <Controller
              name="specialization"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Dropdown
                  {...field}
                  options={specializations}
                  placeholder="Wybierz specjalizację"
                  id="specialization"
                  {...register('specialization', { required: true })}
                  style={errors.specialization && { borderColor: 'red', color: 'red' }}
                />
              )}
            />

            {errors.specialization && <p style={{ color: 'red', fontSize: 12 }}>Pole jest wymagane</p>}
          </div>
        ) : null}
        <Button className="send-form" label="Wyślij" icon="pi pi-check" style={{ minHeight: 40 }} />
      </form>
    </div>
  );
};
