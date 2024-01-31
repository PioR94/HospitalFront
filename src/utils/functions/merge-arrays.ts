import { ScheduleHour } from '../../types/terms/term';

export function mergeArrays(arr1: ScheduleHour[], arr2: ScheduleHour[]): ScheduleHour[] {
  const map = new Map();

  arr1.forEach((item) => {
    map.set(item.id, item);
  });

  arr2.forEach((item) => {
    map.set(item.id, item);
  });

  const mergedArray = Array.from(map.values());

  return mergedArray;
}
