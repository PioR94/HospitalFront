import { baseUrlSpecialization, downloadData } from '../api';
import { useQuery } from 'react-query';

export const useSpecializations = () => {
  const specializationsQuery = useQuery('specializations', () => downloadData(baseUrlSpecialization), {
    select: (data) => ['', ...data],
  });

  return { specializations: specializationsQuery.data };
};
