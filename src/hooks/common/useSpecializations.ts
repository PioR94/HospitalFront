import { useEffect, useState } from 'react';
import { baseUrlSpecialization, downloadData } from '../../api';

export const useSpecializations = () => {
  const [specializations, setSpecializations] = useState([]);

  useEffect(() => {
    downloadData(baseUrlSpecialization).then(setSpecializations);
  }, []);

  return specializations;
};
 