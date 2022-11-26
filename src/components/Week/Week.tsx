import React from  "react"
import {Day} from "../Day/Day";
import './Week.css'



export const Week = () => {

    const date = new Date();
    const dayName = date.getDay();

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

    const renderDays = (day: number) => {
        const tab = [];
        for (let i = 0; i < 20; i++) {
          tab[i] = <Day dayOfTheWeek={getDayName(day)} month="1" number="1"/>
            day++;
            if (day === 7) day = 0;
        }
        return tab;
    }
    return <>

        <div className="_divWeek">

            {renderDays(dayName)}

        </div>
    </>
}