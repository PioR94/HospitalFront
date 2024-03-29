export interface Term {
  id: string;
  hour: string;
  dayOfWeek: string;
  numberDay: string;
  month: string;
  year: string;
  idDr: string;
  idPt?: string;
  nameDr: string;
  lastNameDr: string;
  namePt?: string;
  lastNamePt?: string;
  className?: string;
  price?: string;
  status?: string;
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

export interface VisitTable {
  id: string;
  name: string;
  lastName: string;
  date: string;
  price: string;
  status: string;
}
