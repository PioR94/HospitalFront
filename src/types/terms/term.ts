import { Hour } from './../../components/atoms/Hour/Hour';
export interface Term {
  id: string;
  hour: string;
  dayOfWeek: string;
  numberDay: string;
  month: string;
  year: string;
  idDr: string;
  loginDr: string;
  nameDr: string;
  lastNameDr: string;
  reservation?: number;
}

export interface FreeTerm {
  id: string;
  hour: string;
  numberDay: string;
  month: string;
  year: string;
  reservation?: number;
}

export interface Schedule {
  id?: string;
  idDr: string;
  day: string;
  hour: string;
}
