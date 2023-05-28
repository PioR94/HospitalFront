import { BsFileEarmarkZip } from 'react-icons/all';
import { Day, Month } from '../enum';

export const changeClass = (logic: any, class1: string, class2: string): string => (logic ? class1 : class2);

export const getDayName = (day: Day) => Day[day];

export const getMonthName = (month: Month) => Month[month];

