import { addDays, isLeapYear, isLastDayOfMonth } from 'date-fns';

export const renderDaysLogic = (dayOfWeek: number, month: number, numberDay: number, year: number) => {
  const isLeap = isLeapYear(new Date(year, month, numberDay));
  const lastDayOfMonth = isLastDayOfMonth(new Date(year, month, numberDay));
  const nextDate = lastDayOfMonth ? addDays(new Date(year, month + 1, 1), 1) : addDays(new Date(year, month, numberDay), 1);

  return {
    _dayOfWeek: dayOfWeek >= 7 ? dayOfWeek % 7 : dayOfWeek,
    _month: nextDate.getMonth(),
    _numberDay: nextDate.getDate(),
  };
};
