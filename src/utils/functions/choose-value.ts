import { baseUrlDoctor, baseUrlPatient } from '../../api';

export const chooseValue = (value: string) => {
  if (value === 'doctor') {
    return baseUrlDoctor;
  } else if (value === 'patient') {
    return baseUrlPatient;
  }
};
