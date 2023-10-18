import React, { useState } from 'react';
import { Day } from '../../molecules/Day/Day';
import './Week.css';
import { changeClass, getDayName, getMonthName } from '../../../utils/functions/function';
import { initialDayOfWeek, initialMonth, initialNumberDay, initialYear } from '../../../utils/get-date';
import { renderDaysLogic } from '../../../utils/functions/render-days-logic';

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
    for (let i = 0; i < 7; i++) {
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

      const dateDay = renderDaysLogic(dayOfWeek, month, numberDay, year);
      dayOfWeek = dateDay._dayOfWeek;
      numberDay = dateDay._numberDay;
      month = dateDay._month;
    }
    return days;
  };

  const moveRight = (): void => {};

  const moveLeft = (): void => {};

  return (
    <>
      <div className="a">
        <div
          className="_divWeek"
          style={{
            translate: positionX,
          }}
        >
          {renderDays(initialDayOfWeek, initialMonth, initialNumberDay, initialYear)}
        </div>
      </div>
    </>
  );
};
