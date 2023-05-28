export const renderDaysLogic = (dayOfWeek: number, month: number, numberDay: number, year: number) => {
  let _dayOfWeek = dayOfWeek;
  let _month = month;
  let _numberDay = numberDay;

  if (dayOfWeek === 7) _dayOfWeek = 0;

  if ((month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) && numberDay === 32) {
    _numberDay = 1;
    _month++;
  }
  if ((month === 3 || month === 5 || month === 8 || month === 10) && numberDay === 31) {
    _numberDay = 1;
    _month++;
  }

  if (year % 4 === 0 && month === 1 && numberDay === 30) {
    _numberDay = 1;
    _month++;
  }

  if (year % 4 !== 0 && month === 1 && numberDay === 29) {
    _numberDay = 1;
    _month++;
  }

  if (_month === 12) _month = 0;

  return {
    _dayOfWeek,
    _month,
    _numberDay,
  };
};
