import { useEffect } from 'react';
import { baseUrlSchedule, sendAndReceiveData } from '../../../api';
import { addReduxHours } from '../../../redux/schedule-slice';
import { useAppDispatch } from '../../common/redux';

export const useInitializeData = (idDr: string) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (idDr) {
      sendAndReceiveData(idDr, baseUrlSchedule, 'hours').then((r) => {
        dispatch(addReduxHours(r));
      });
    }
  }, [idDr, dispatch]);
};
