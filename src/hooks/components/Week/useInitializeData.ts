
import { baseUrlSchedule, sendAndReceiveData } from '../../../api';
import { addReduxHours } from '../../../redux/schedule-slice';
import { useAppDispatch, useAppSelector } from '../../common/redux';
import { RootState } from '../../../redux/store';
import { useQuery } from 'react-query';

export const useInitializeData = (idDr: string) => {
  const reduxHours = useAppSelector((state: RootState) => state.schedule.hours);
  const dispatch = useAppDispatch();

  const fetchHours = async () => {
    const data = await sendAndReceiveData(idDr, baseUrlSchedule, 'hours');

    dispatch(addReduxHours(data));

    return data;
  };

  const { data, isLoading, isError } = useQuery(['hours', idDr], fetchHours, {
    enabled: !!idDr && reduxHours.length === 0,
  });

  return { data, isLoading, isError };
};
