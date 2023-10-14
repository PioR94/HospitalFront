export const MESS_OK = 'Konto zostało poprawnie utworzone';

export const createValidation = (
  login: string,
  password: string,
  name: string,
  lastName: string,
  street: string,
  code: string,
  city: string,
  specialization?: string | null,
) => {
  if (login.length < 3 || login.length > 25) {
    return 'Login musi zawierać się między 3 a 25 znaków';
  } else if (password.length < 8 || password.length > 50) {
    console.log(password);
    return 'Hasło musi zawierać się między 8 a 50 znaków';
  } else if (name.length < 3 || name.length > 25) {
    return 'Imię musi zawierać się między 3 a 25 znaków';
  } else if (lastName.length < 3 || lastName.length > 36) {
    return 'Nazwisko musi zawierać się między 3 a 36 znaków';
  } else if (street.length < 3 || street.length > 50) {
    return 'Ulica musi zawierać się między 3 a 50 znaków';
  } else if (code.length !== 6) {
    return 'Niepoprawny format kodu pocztowego';
  } else if (city.length < 3 || city.length > 50) {
    return 'Miasto musi zawierać się między 3 a 50 znaków';
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
