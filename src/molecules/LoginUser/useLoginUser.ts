import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { InputsLog } from '../../types/hook-form/inputs';
import { sendAndReceiveData } from '../../api';
import { chooseValue } from '../../utils/functions/choose-value';

export const useLoginUser = (role: string) => {
  const url = chooseValue(role) || '';

  const navigate = useNavigate();

  const [token, setToken] = useState('');

  const defaultValues = {
    login: role === 'patient' ? 'Jan123' : 'abittner',
    password: '12345678',
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputsLog>({
    defaultValues,
  });

  const clickRegister = () => navigate(`../${role}/add`);

  const onSubmit: SubmitHandler<InputsLog> = (data: InputsLog, event: BaseSyntheticEvent | undefined) => {
    event?.preventDefault();

    sendAndReceiveData(data, url, 'log').then((data) => {
      setToken(data.token);
    });
  };

  useEffect(() => {
    if (token) {
      sessionStorage.setItem('token', token);
      if (role === 'patient') {
        sessionStorage.setItem('role', 'patient');
        navigate('../patient');
      } else if (role === 'doctor') {
        sessionStorage.setItem('role', 'doctor');
        navigate('../doctor/panel');
      }
    }
  }, [token]);

  return { clickRegister, onSubmit, register, handleSubmit };
};
