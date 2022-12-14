import React from  "react"
import {Day} from "../Day/Day";
import './Week.css'

interface Props {
    idDr: string,
    loginDr: string,
    nameDr: string;
    lastNameDr: string;
}

export const Week = (props: Props) => {

    const date = new Date();
    const dayOfWeek = date.getDay();
    const month = date.getMonth();
    const numberDay = date.getUTCDate();
    const year = date.getFullYear();

    const getDayName = (day: number) => {
        if (day === 0) {
            return 'Niedziela';
        } else if (day === 1) {
            return 'Poniedziałek';
        } else if (day === 2) {
            return 'Wtorek';
        } else if (day === 3) {
            return 'Środa';
        } else if (day === 4) {
            return 'Czwartek';
        } else if (day === 5) {
            return 'Piątek';
        } else if (day === 6) {
            return 'Sobota';
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
                <Day dayOfWeek={getDayName(dayOfWeek)} month={getMonthName(month)} numberDay={numberDay.toString()} year={year} idDr={props.idDr} loginDr={props.loginDr} nameDr={props.nameDr} lastNameDr={props.lastNameDr}/>

            dayOfWeek++;
            numberDay++;

            if (dayOfWeek === 7) dayOfWeek = 0;

            if ((month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) && (numberDay === 32)) {
                numberDay = 1;
                month++;

            }
            if((month === 3 || month === 5 || month === 8 || month === 10) && (numberDay === 31)) {
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
    return <>

        <div className="_divWeek">

            {renderDays(dayOfWeek, month, numberDay, year)}

        </div>
    </>
}