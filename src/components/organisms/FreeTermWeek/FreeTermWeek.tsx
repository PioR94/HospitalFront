import React, { useEffect, useState } from 'react';
import { FreeTermDay } from '../../molecules/FreeTermDay/FreeTermDay';
import './FreeTermWeek.css';
import { changeClass, getDayName, getMonthName } from '../../../utils/functions/function';
import { dayOfWeek, month, numberDay, year } from '../../../utils/get-date';
import { renderDaysLogic } from '../../../utils/functions/render-days-logic';

interface Props {
  idDr: string;
}

export const FreeTermWeek = (props: Props) => {
  const [positionX, setPositionX] = useState(0);
  const [count, setCount] = useState({
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
  });
  const [height, setHeight] = useState(0);
  let refElements: any[] = [];

  useEffect(() => {
    getMaxHeight(refElements[count.zero], refElements[count.one], refElements[count.two], refElements[count.three]);
  });

  const renderDays = (dayOfWeek: number, month: number, numberDay: number, year: number) => {
    const days = [];
    for (let i = 0; i < 28; i++) {
      days[i] = (
        <div>
          <FreeTermDay
            dayOfWeek={`${getDayName(dayOfWeek)}`}
            numberDay={numberDay.toString()}
            month={`${getMonthName(month)}`}
            year={year.toString()}
            idDr={props.idDr}
            sendRef={addHeight}
          />
        </div>
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

  const getMaxHeight = (i1: number, i2: number, i3: number, i4: number) => {
    let arr: number[] = [i1, i2, i3, i4];
    const biggest: number = Math.max(...arr);
    setHeight(biggest);
  };

  const addHeight = (ref: number): void => {
    refElements.push(ref);
  };

  const moveLeft = (): void => {
    if (positionX < 0) {
      setPositionX(positionX + 360);
    }
    if (count.zero > 0) {
      setCount({
        zero: count.zero - 4,
        one: count.one - 4,
        two: count.two - 4,
        three: count.three - 4,
      });
    }
  };
  const moveRight = (): void => {
    if (positionX > -1995) {
      setPositionX(positionX - 360);
    }
    if (count.zero < 28) {
      setCount({
        zero: count.zero + 4,
        one: count.one + 4,
        two: count.two + 4,
        three: count.three + 4,
      });
    }
  };

  return (
    <>
      <div className={changeClass(positionX === 0, 'move-left-none', 'move-left')} onClick={moveLeft}>
        {' '}
        {'<'}
      </div>
      <div className={changeClass(positionX < -1995, 'move-right-none', 'move-right')} onClick={moveRight}>
        {' '}
        {'>'}
      </div>

      <div className="container-free-term-week">
        <div
          className="free-term-week"
          style={{
            translate: positionX,
            height: height + 15,
          }}
        >
          {renderDays(dayOfWeek, month, numberDay, year)}
        </div>
      </div>
    </>
  );
};
