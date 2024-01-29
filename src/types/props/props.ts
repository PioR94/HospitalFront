import { ReactNode } from 'react';

import { ScheduleHour } from '../terms/term';
import { Doctor } from '../users/user';

export interface DayProps {
  day: string;
  idDr: string;
  hours: ScheduleHour[];
}

export interface FreeTermDayProps {
  dayOfWeek: string;
  numberDay: string;
  month: string;
  year: string;
  idDr: string;
  nameDr: string;
  lastNameDr: string;
  price: string;
}

export interface ModalProps {
  message: string;
  clickNo: any;
  clickYes: any;
  hour: string;
  numberDay: string;
  month: string;
  year: string;
}

export interface FreeTermWeekProps {
  idDr: string;
  nameDr: string;
  lastNameDr: string;
  price: string;
}

export interface MyMapProps {
  children?: ReactNode;
  doctors: Doctor[];
  activeDoctorId: string | null;
  onMarkerEnter: (id: string) => void;
  onMarkerLeave: () => void;
  doctorRefs: React.MutableRefObject<(HTMLLIElement | null)[]>;
}

export interface OneDoctorProps {
  idDr: string;
  nameDr: string;
  lastNameDr: string;
  specialization: string;
  street: string;
  city: string;
  price: string;
  alwaysInvisible?: boolean;
}

export interface WeekProps {
  idDr: string;
}
