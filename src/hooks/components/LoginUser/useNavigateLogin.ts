import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useNavigateLogin = (role: string, token: string) => {
  const navigate = useNavigate();

  const clickRegister = () => {
    if (role === 'doctor') {
      navigate('../doctor/add');
    } else if (role === 'patient') {
      navigate('../patient/add');
    }
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

    console.log(token);
  }, [token]);

  return { clickRegister };
};
