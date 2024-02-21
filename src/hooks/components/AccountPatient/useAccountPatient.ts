import { SyntheticEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../common/redux';
import { useNavigate } from 'react-router-dom';
import { baseUrlPatient, baseUrlSpecialization, downloadData, sendAndReceiveData } from '../../../api';

export const useAccountPatient = () => {
  const dispatch = useAppDispatch();

  const { city, specialization } = useAppSelector((state) => state.search);

  const [suggestedCities, setSuggestedCities] = useState<string[]>([]);

  const [specializations, setSpecializations] = useState<string[]>([]);

  const [inputText, setInputText] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    sendAndReceiveData(inputText, baseUrlPatient, 'google-api').then((r) => {
      setSuggestedCities(r);
    });
  }, [inputText]);

  useEffect(() => {
    downloadData(baseUrlSpecialization).then((r) => {
      setSpecializations(['', ...r]);
    });
  }, []);

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    sessionStorage.setItem('city', city);

    sessionStorage.setItem('specialization', specialization);

    navigate('../find-doctor');
  };

  return {onSubmit, city, specialization, suggestedCities, specializations, dispatch, navigate, setInputText }
};
