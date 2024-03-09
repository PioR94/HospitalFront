import React, { useEffect, useMemo, useState } from 'react';
import { FreeTermDay } from '../../molecules/FreeTermDay/FreeTermDay';
import './FreeTermWeek.css';
import { getDayName, getMonthName } from '../../utils/functions/get-day-month-name';
import { addDays } from 'date-fns';
import { FreeTermWeekProps } from '../../types/props/props';
import { changeClass } from '../../utils/functions/change-class';
import { useMoveArrows } from './useMoveArrows';

export const FreeTermWeek = ({ idDr, nameDr, lastNameDr, price }: FreeTermWeekProps) => {
  const { counter, initialDate, moveRight, moveLeft } = useMoveArrows();

  const renderDays = useMemo(() => {
    const days = [];

    let nextDate = initialDate;

    for (let i = 0; i < 3; i++) {
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
            nameDr={nameDr}
            lastNameDr={lastNameDr}
            price={price}
          />
        </div>
      );

      nextDate = addDays(nextDate, 1);
    }
    return days;
  }, [initialDate]);

  return (
    <div className="free-term-week">
      <div className={changeClass(counter === 0, 'move-left-none', 'move-left')} onClick={moveLeft}>
        <i className="pi pi-angle-left" />
      </div>
      {renderDays}

      <div className={changeClass(counter === 20, 'move-right-none', 'move-right')} onClick={moveRight}>
        <i className="pi pi-angle-right" />
      </div>
    </div>
  );
};
