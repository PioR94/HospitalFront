export type InputsLog = {
  login: string;
  password: string;
};

export type InputsAddForm = {
  login: string;
  mail: string;
  password: string;
  repeatPassword: string;
  name: string;
  lastName: string;
  street: string;
  code: string;
  city: string;
  specialization?: string;
};
