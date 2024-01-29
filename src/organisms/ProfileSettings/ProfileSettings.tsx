import React, { useEffect, useState } from 'react';
import './ProfileSettings.css';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import { baseUrlSpecialization, downloadData, updateData } from '../../api';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { chooseValue } from '../../utils/functions/choose-value';
import { FormProfileSettings } from '../../types/forms/forms';

const ProfileSettings: React.FC = () => {
  const role = sessionStorage.getItem('role');
  const id = useSelector((state: RootState) => state.user.id);
  const name = useSelector((state: RootState) => state.user.name);
  const lastName = useSelector((state: RootState) => state.user.lastName);
  const street = useSelector((state: RootState) => state.user.street);
  const code = useSelector((state: RootState) => state.user.code);
  const city = useSelector((state: RootState) => state.user.city);
  const specialization = useSelector((state: RootState) => state.user.specialization);
  const price = useSelector((state: RootState) => state.user.price);
  const url = chooseValue(role) || '';
  const [specializations, setSpecializations] = useState([]);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormProfileSettings>({
    defaultValues: {
      name,
      lastName,
      street,
      code,
      city,
      specialization,
      price,
    },
  });

  useEffect(() => {
    downloadData(baseUrlSpecialization).then((r) => {
      setSpecializations(r);
    });
  }, []);

  const onSubmit: SubmitHandler<FormProfileSettings> = (data) => {
    const dataProfile = {
      id,
      ...data,
    };
    console.log(dataProfile);
    updateData(dataProfile, url, 'profile-settings');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="profile-settings">
      <div className="p-fluid">
        <h2 className="profile-h2">Profil</h2>
        <div className="p-field">
          <label htmlFor="name" style={errors.name && { color: 'red' }}>
            Imię
          </label>
          <InputText
            type="text"
            id="name"
            className="profile-input"
            {...register('name', { required: true })}
            style={errors.name && { borderColor: 'red' }}
          />
        </div>
        <div className="p-field">
          <label htmlFor="lastName" style={errors.lastName && { color: 'red' }}>
            Nazwisko
          </label>
          <InputText
            type="text"
            id="lastName"
            className="profile-input"
            {...register('lastName', { required: true })}
            style={errors.lastName && { borderColor: 'red' }}
          />
        </div>
        <div className="p-field">
          <label htmlFor="street" style={errors.street && { color: 'red' }}>
            Ulica
          </label>
          <InputText
            type="text"
            id="street"
            className="profile-input"
            {...register('street', { required: true })}
            style={errors.street && { borderColor: 'red' }}
          />
        </div>

        <div className="p-field">
          <label htmlFor="code" style={errors.code && { color: 'red' }}>
            Kod pocztowy
          </label>
          <InputMask
            type="text"
            id="code"
            className="profile-input"
            mask="99-999"
            placeholder="__-___"
            {...register('code', { required: true })}
            style={errors.code && { borderColor: 'red' }}
          />
        </div>
        <div className="p-field">
          <label htmlFor="city" style={errors.city && { color: 'red' }}>
            Miasto
          </label>
          <InputText
            type="text"
            id="city"
            className="profile-input"
            {...register('city', { required: true })}
            style={errors.city && { borderColor: 'red' }}
          />
        </div>
        {role === 'doctor' ? (
          <div className="p-field">
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
                  className="profile-input"
                  {...register('specialization', { required: true })}
                  style={errors.specialization && { borderColor: 'red', color: 'red' }}
                />
              )}
            />
          </div>
        ) : null}
        {role === 'doctor' && (
          <div className="p-field">
            <label htmlFor="price" style={errors.price && { color: 'red' }}>
              Cena wizyty
            </label>
            <InputText
              type="number"
              id="price"
              min={0}
              className="profile-input"
              {...register('price', { required: true })}
              style={errors.price && { borderColor: 'red' }}
            />
          </div>
        )}
        <Button label="Zapisz " icon="pi pi-check" className="button-profile" style={{ width: 140, margin: 35 }} />
      </div>
    </form>
  );
};

export default ProfileSettings;
