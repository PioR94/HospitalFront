import { useQuery } from 'react-query';
import { baseUrlSchedule, baseUrlTerm, sendAndReceiveData } from '../../../api';
import { ScheduleHour } from '../../../types/terms/term';
import { mergeArrays } from '../../../utils/functions/merge-arrays';

interface FetchTermsResult {
  sortedArray: ScheduleHour[];
}

export const useFetchTerms = (dayOfWeek: string, numberDay: string, idDr: string, month: string, year: string) => {
  const dayData = {
    dayOfWeek,
    idDr,
  };

  const termData = {
    idDr,
    numberDay,
    month,
    year,
  };

  return useQuery<FetchTermsResult>(['fetchTerms', dayOfWeek, numberDay, month, year, idDr], async () => {
    const fetchFreeTerms = sendAndReceiveData(dayData, baseUrlSchedule, 'free-terms');
    const fetchReservationTerms = sendAndReceiveData(termData, baseUrlTerm, 'terms');

    const [freeTermsData, reservationTermsData] = await Promise.all([fetchFreeTerms, fetchReservationTerms]);
    console.log(freeTermsData);
    const modifiedFreeTerms = freeTermsData.map((item: ScheduleHour) => ({
      ...item,
      id: item.hour + numberDay + month + year + idDr,
      className: 'free-term-hour',
    }));

    const modifiedReservationTerms = reservationTermsData.map((item: ScheduleHour) => ({
      ...item,
      className: 'book-term-hour',
    }));

    const mergeArray = mergeArrays(modifiedFreeTerms, modifiedReservationTerms);

    const sortedArray = mergeArray.sort((a: ScheduleHour, b: ScheduleHour) => (a.hour > b.hour ? 1 : -1));

    return { sortedArray };
  });
};
