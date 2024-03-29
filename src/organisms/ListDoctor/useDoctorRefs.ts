import { useEffect, useRef } from 'react';
import { Doctor } from '../../types/users/user';

export const useDoctorRefs = (dataDoctors: Doctor[]) => {
  const doctorRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    doctorRefs.current = doctorRefs.current.slice(0, dataDoctors.length);
  }, [dataDoctors]);

  return doctorRefs;
};
