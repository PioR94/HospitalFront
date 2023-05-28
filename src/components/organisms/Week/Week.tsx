import React, { useState } from 'react';
import { Day } from '../../molecules/Day/Day';
import './Week.css';
import { changeClass, getDayName, getMonthName } from '../../../utils/functions/function';
import { dayOfWeek, month, numberDay, year } from '../../../utils/get-date';

interface Props {
  idDr: string;
  loginDr: string;
  nameDr: string;
  lastNameDr: string;
}

export const Week = (props: Props) => {
  const [positionX, setPositionX] = useState(0);

  const renderDays = (dayOfWeek: number, month: number, numberDay: number, year: number) => {
    const days = [];
    for (let i = 0; i < 28; i++) {
      days[i] = (
        <Day
          dayOfWeek={`${getDayName(dayOfWeek)}`}
          month={`${getMonthName(month)}`}
          numberDay={numberDay.toString()}
          year={year.toString()}
          idDr={props.idDr}
          loginDr={props.loginDr}
          nameDr={props.nameDr}
          lastNameDr={props.lastNameDr}
        />
      );

      dayOfWeek++;
      numberDay++;

      if (dayOfWeek === 7) dayOfWeek = 0;

      if ((month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) && numberDay === 32) {
        numberDay = 1;
        month++;
      }
      if ((month === 3 || month === 5 || month === 8 || month === 10) && numberDay === 31) {
        numberDay = 1;
        month++;
      }

      if (year % 4 === 0 && month === 1 && numberDay === 30) {
        numberDay = 1;
        month++;
      }

      if (year % 4 !== 0 && month === 1 && numberDay === 29) {
        numberDay = 1;
        month++;
      }

      if (month === 12) month = 0;
    }
    return days;
  };

  const moveRight = (): void => {
    if (positionX > -1995) {
      setPositionX(positionX - 665);
    }
  };

  const moveLeft = (): void => {
    if (positionX < 0) {
      setPositionX(positionX + 665);
    }
  };

  return (
    <>
      <div className="a">
        <div
          className="_divWeek"
          style={{
            translate: positionX,
          }}
        >
          {renderDays(dayOfWeek, month, numberDay, year)}
        </div>
      </div>
      <div className={changeClass(positionX === -1995, '_moveRightNone', '_moveRight')} onClick={moveRight}>
        {' '}
        ⇨
      </div>

      <div className={changeClass(positionX === 0, '_moveLeftNone', '_moveLeft')} onClick={moveLeft}>
        {' '}
        ⇦
      </div>
    </>
  );
};
