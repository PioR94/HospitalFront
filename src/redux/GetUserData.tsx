import React, { useEffect } from 'react';
import { setField } from './user-slice';
import { sendAndReceiveData, sendToken } from '../api';
import { UserState } from '../types/redux/user-state';
import { useAppDispatch } from '../hooks/redux';
import { chooseValue } from '../utils/functions/choose-value';
import { useNavigate } from 'react-router-dom';

export const GetUserData: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem('token') || '';
    const role = sessionStorage.getItem('role') || '';
    const url = chooseValue(role) || '';

    if (token) {
      sendToken(token, url, 'get-user')
        .then((userData: UserState) => {
          console.log(userData);
          (Object.keys(userData) as Array<keyof UserState>).forEach((key) => {
            dispatch(setField({ field: key, value: userData[key] }));
          });
        })
        .catch((error: Response) => {
          error.text().then((errorMessage: string) => {
            console.log(errorMessage);
          });
          if (error.status === 403 || error.status === 404) {
            sessionStorage.removeItem('token');
            window.dispatchEvent(new Event('token-updated'));
          }
        });
    }
  }, [dispatch]);

  return null;
};
