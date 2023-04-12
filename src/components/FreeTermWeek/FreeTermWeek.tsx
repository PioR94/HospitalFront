import React, {useEffect, useRef, useState} from "react";
import {Day} from "../Day/Day";
import {FreeTermDay} from "../FreeTermDay/FreeTermDay";
import './FreeTermWeek.css'
import {Confirm} from "../Confirm/Confirm";

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
    })
    const [height, setHeight] = useState(0);
    let refElements: any[] = [];

    useEffect(() => {

        getMaxHeight(refElements[count.zero], refElements[count.one], refElements[count.two], refElements[count.three])
        console.log(refElements[count.zero], refElements[count.one], refElements[count.two], refElements[count.three])
    })


    const date = new Date();
    const dayOfWeek = date.getDay();
    const month = date.getMonth();
    const numberDay = date.getUTCDate();
    const year = date.getFullYear();

    const getDayName = (day: number) => {
        if (day === 0) {
            return 'Nie.';
        } else if (day === 1) {
            return 'Pon.';
        } else if (day === 2) {
            return 'Wt.';
        } else if (day === 3) {
            return 'Śr.';
        } else if (day === 4) {
            return 'Czw.';
        } else if (day === 5) {
            return 'Pią.';
        } else if (day === 6) {
            return 'Sob.';
        }
    }

    const getMonthName = (month: number) => {
        if (month === 0) {
            return 'Sty';
        } else if (month === 1) {
            return 'Lut';
        } else if (month === 2) {
            return 'Mrz';
        } else if (month === 3) {
            return 'Kw';
        } else if (month === 4) {
            return 'Maj';
        } else if (month === 5) {
            return 'Cz';
        } else if (month === 6) {
            return 'Lip';
        } else if (month === 7) {
            return 'Sier';
        } else if (month === 8) {
            return 'Wrz';
        } else if (month === 9) {
            return 'Paź';
        } else if (month === 10) {
            return 'Lis';
        } else if (month === 11) {
            return 'Gr';
        }
    }

    const renderDays = (dayOfWeek: number, month: number, numberDay: number, year: number) => {
        const days = [];
        for (let i = 0; i < 28; i++) {
            days[i] =
                <div>
                    <FreeTermDay dayOfWeek={`${getDayName(dayOfWeek)}`} numberDay={numberDay.toString()}
                                 month={`${getMonthName(month)}`} year={year.toString()} idDr={props.idDr}
                                 sendRef={addHeight}/>
                </div>

            dayOfWeek++;
            numberDay++;

            if (dayOfWeek === 7) dayOfWeek = 0;

            if ((month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) && (numberDay === 32)) {
                numberDay = 1;
                month++;

            }
            if ((month === 3 || month === 5 || month === 8 || month === 10) && (numberDay === 31)) {
                numberDay = 1;
                month++;
            }

            if ((year % 4 === 0) && (month === 1) && (numberDay === 30)) {
                numberDay = 1;
                month++;
            }

            if ((year % 4 !== 0) && (month === 1) && (numberDay === 29)) {
                numberDay = 1;
                month++;
            }

            if (month === 12) month = 0;
        }

        return days;
    }

    const getMaxHeight = (i1: number, i2: number, i3: number, i4: number) => {
        let arr: number[] = [i1, i2, i3, i4];
        const biggest: number = Math.max(...arr);
        setHeight(biggest);
    }

    const addHeight = (ref: number): void => {
        refElements.push(ref);
    }

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
            })
        }
    }
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
            })
        }
    }


    const changeMoveLeft = (): string => {
        return (positionX === 0) ? 'move-left-none' : 'move-left';
    }
    const changeMoveRight = (): string => {
        return (positionX < -1995) ? 'move-right-none' : 'move-right';
    }


    return <>
        <div className={changeMoveLeft()} onClick={moveLeft}> {"<"}

        </div>
        <div className={changeMoveRight()} onClick={moveRight}> {">"}
        </div>

        <div className="container-free-term-week">

            <div className="free-term-week" style={{
                translate: positionX,
                height: height + 15,
            }
            }>


                {
                    renderDays(dayOfWeek, month, numberDay, year)
                }

            </div>
        </div>
    </>
}
