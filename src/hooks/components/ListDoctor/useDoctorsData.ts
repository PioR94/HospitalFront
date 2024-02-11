import { useState, useEffect } from 'react';
import { baseUrlDoctor, sendAndReceiveData } from '../../../api';

export const useDoctorsData = () => {
  const [dataDoctors, setDataDoctors] = useState([]);

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
  useEffect(() => {
    fetchDoctors();
  }, []);

  return { dataDoctors, fetchDoctors };
};
