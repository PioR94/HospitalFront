import React, { useEffect } from 'react';
import { setField } from '../redux/user-slice';
import { sendToken } from '../api';
import { UserState } from '../types/redux/user-state';
import { useAppDispatch } from './redux';
import { chooseValue } from '../utils/functions/choose-value';
import { useNavigate } from 'react-router-dom';

export const useGetUserData = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

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
            console.error(errorMessage);
          });
          if (error.status === 403 || error.status === 404) {
            console.error(error.status);
            sessionStorage.removeItem('token');
            window.dispatchEvent(new Event('token-updated'));
          }
        });
    }
  }, [dispatch, navigate]);
};
