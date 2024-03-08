import { useEffect, useState } from 'react';
import { AvailableHours, ScheduleHour } from '../../types/terms/term';
import { useAppSelector } from '../../hooks/redux';
import { DaysOfWeek } from '../../utils/constants/month-and-day';
import { RootState } from '../../redux/store';

export const useAvailableHours = () => {
  const reduxHours = useAppSelector((state: RootState) => state.schedule.hours);

  const [availableHours, setAvailableHours] = useState<AvailableHours>({
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
  });

  useEffect(() => {
    if (reduxHours) {
      setAvailableHours({
        Sunday: reduxHours.filter((hour: ScheduleHour) => hour.day === 'Niedz'),
        Monday: reduxHours.filter((hour: ScheduleHour) => hour.day === 'Pon'),
        Tuesday: reduxHours.filter((hour: ScheduleHour) => hour.day === 'Wt'),
        Wednesday: reduxHours.filter((hour: ScheduleHour) => hour.day === 'Śr'),
        Thursday: reduxHours.filter((hour: ScheduleHour) => hour.day === 'Czw'),
        Friday: reduxHours.filter((hour: ScheduleHour) => hour.day === 'Pt'),
        Saturday: reduxHours.filter((hour: ScheduleHour) => hour.day === 'Sob'),
      });
    }
  }, [reduxHours]);

  const getAvailableHoursDay = (dayIndex: DaysOfWeek) => {
    const dayKey = DaysOfWeek[dayIndex];
    return availableHours[dayKey as keyof AvailableHours];
  };

  return { getAvailableHoursDay };
};
