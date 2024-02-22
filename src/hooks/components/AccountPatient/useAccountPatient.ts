import { SyntheticEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../common/redux';
import { useNavigate } from 'react-router-dom';
import { baseUrlPatient, baseUrlSpecialization, downloadData, sendAndReceiveData } from '../../../api';
import { useQuery } from 'react-query';

export const useAccountPatient = () => {
  const dispatch = useAppDispatch();

  const { city, specialization } = useAppSelector((state) => state.search);

  const navigate = useNavigate();

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    sessionStorage.setItem('city', city);

    sessionStorage.setItem('specialization', specialization);

    navigate('../find-doctor');
  };

  return { onSubmit, city, specialization, dispatch, navigate };
};
