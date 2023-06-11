export const MESS_OK = 'Konto zostało poprawnie utworzone';

export const createValidation = (login: string, name: string, lastName: string, address: string, password: string, specialization?: string) => {
  if (login.length < 3 || login.length > 25) {
    return 'Login musi zawierać się między 3 a 25 znaków';
  } else if (password.length < 8 || password.length > 50) {
    return 'Hasło musi zawierać się między 8 a 50 znaków';
  } else if (name.length < 3 || name.length > 25) {
    return 'Imię musi zawierać się między 3 a 25 znaków';
  } else if (lastName.length < 3 || lastName.length > 36) {
    return 'Nazwisko musi zawierać się między 3 a 36 znaków';
  } else if (address.length < 3 || address.length > 50) {
    return 'Adres musi zawierać się między 3 a 50 znaków';
  } else if (specialization && specialization.length > 25) {
    return 'Nazwa nie może przekraczać 25 znaków';
  } else {
    return MESS_OK;
  }
};

export const showInfoMessage = (msgs: any, severity: string, summary: string, detail: string) => {
  msgs.current?.show({
    severity: severity,
    summary: summary,
    detail: detail,
  });
};
