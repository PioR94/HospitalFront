import { baseUrlSchedule, sendAndReceiveData } from '../../api';
import { addReduxHours } from '../../redux/schedule-slice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { RootState } from '../../redux/store';
import { useQuery } from 'react-query';

export const useInitializeData = (idDr: string) => {
  const dispatch = useAppDispatch();
  const reduxHours = useAppSelector((state: RootState) => state.schedule.hours);

  const fetchHours = async () => {
    if (reduxHours.length === 0) {
      const data = await sendAndReceiveData(idDr, baseUrlSchedule, 'hours');

      return data;
    }
  };

  useQuery(['hours', idDr], fetchHours, {
    enabled: !!idDr,
    onSuccess: (data) => {
      dispatch(addReduxHours(data));
    },
  });
};
