import { ScheduleHour } from '../../types/terms/term';

export const getClassForHour = (hour: string, hours: ScheduleHour[]) => {
  const foundHour = hours.find((hourObj: ScheduleHour) => hourObj.hour === hour);

  return foundHour ? 'hour-div-active' : 'hour-div';
};
