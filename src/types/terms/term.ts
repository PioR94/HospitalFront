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

export interface ScheduleHour {
  id?: string;
  idDr: string;
  day: string;
  hour: string;
  className?: string;
}

export interface AvailableHours {
  Sunday: ScheduleHour[];
  Monday: ScheduleHour[];
  Tuesday: ScheduleHour[];
  Wednesday: ScheduleHour[];
  Thursday: ScheduleHour[];
  Friday: ScheduleHour[];
  Saturday: ScheduleHour[];
}
