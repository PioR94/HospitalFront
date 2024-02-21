import { useState, useEffect, SyntheticEvent } from 'react';
import { baseUrlDoctor, sendAndReceiveData } from '../../../api';
import { useAppSelector } from '../../common/redux';

export const useDoctorsData = () => {
  const [dataDoctors, setDataDoctors] = useState([]);

  const [activeDoctorId, setActiveDoctorId] = useState<string | null>(null);

  const { city, specialization } = useAppSelector((state) => state.search);

  const defaultCity = sessionStorage.getItem('city') || null;

  const defaultSpecialization = sessionStorage.getItem('specialization') || null;

  const fetchDoctors = async (city = defaultCity, specialization = defaultSpecialization) => {
    if (city !== null) sessionStorage.setItem('city', city);

    if (specialization !== null) sessionStorage.setItem('specialization', specialization);

    try {
      const dataSearch = { city, specialization };

      const doctors = await sendAndReceiveData(dataSearch, baseUrlDoctor, 'find-doctors');

      setDataDoctors(doctors);
    } catch (error) {
      console.error('Error fetching doctors data:', error);
      setDataDoctors([]);
    }
  };

  const sendForm = async (e: SyntheticEvent) => {
    e.preventDefault();
    fetchDoctors(city, specialization);
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return { dataDoctors, sendForm, activeDoctorId, setActiveDoctorId };
};
