import React, { useEffect, useMemo, useState } from 'react';
import { FreeTermDay } from '../../molecules/FreeTermDay/FreeTermDay';
import './FreeTermWeek.css';
import { changeClass, getDayName, getMonthName } from '../../../utils/functions/function';
import { addDays } from 'date-fns';

interface Props {
  idDr: string;
}

export const FreeTermWeek = ({ idDr }: Props) => {
  const [counter, setCounter] = useState(0);
  const [initialDate, setInitialDate] = useState(new Date());

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  const renderDays = useMemo(() => {
    const days = [];

    let nextDate = initialDate;

    for (let i = 0; i < 4; i++) {
      let dayOfWeek = nextDate.getDay();
      let numberDay = nextDate.getUTCDate();
      let month = nextDate.getMonth();
      let year = nextDate.getFullYear();
      days[i] = (
        <div key={`${year}-${month}-${numberDay}`}>
          <FreeTermDay
            dayOfWeek={`${getDayName(dayOfWeek)}`}
            numberDay={numberDay.toString()}
            month={`${getMonthName(month)}`}
            year={year.toString()}
            idDr={idDr}
          />
        </div>
      );

      nextDate = addDays(nextDate, 1);
    }
    return days;
  }, [initialDate]);

  const moveRight = (): void => {
    if (counter < 50) {
      setInitialDate(addDays(initialDate, 4));
      setCounter(counter + 1);
    }
  };

  const moveLeft = (): void => {
    if (counter > 0) {
      setInitialDate(addDays(initialDate, -4));
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div className="free-term-week">
        <div className={changeClass(counter === 0, 'move-left-none', 'move-left')} onClick={moveLeft}>
          <i className="pi pi-angle-left" />
        </div>
        {renderDays}

        <div className={changeClass(counter === 50, 'move-right-none', 'move-right')} onClick={moveRight}>
          <i className="pi pi-angle-right" />
        </div>
      </div>
    </>
  );
};
