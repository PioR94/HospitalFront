import { baseUrlDoctor, baseUrlPatient } from '../../api';

export const chooseValue = (value: string | null) => {
  if (value === 'doctor') {
    return baseUrlDoctor;
  } else if (value === 'patient') {
    return baseUrlPatient;
  }
};
