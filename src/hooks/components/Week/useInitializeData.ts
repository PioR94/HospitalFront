import { useEffect } from 'react';
import { baseUrlSchedule, sendAndReceiveData } from '../../../api';
import { addReduxHours } from '../../../redux/schedule-slice';
import { useAppDispatch, useAppSelector } from '../../common/redux';
import { RootState } from '../../../redux/store';

export const useInitializeData = (idDr: string) => {
  const reduxHours = useAppSelector((state: RootState) => state.schedule.hours);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (idDr && reduxHours.length === 0) {
      sendAndReceiveData(idDr, baseUrlSchedule, 'hours').then((r) => {
        dispatch(addReduxHours(r));
      });
    }
  }, []);
};
