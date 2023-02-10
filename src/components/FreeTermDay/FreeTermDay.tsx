import React, {useEffect, useState} from "react";
import { FreeTerm } from "types";
import {FreeTermHour} from "../FreeTermHour/FreeTermHour";



interface Props {
    numberDay: string;
    month: string;
    year: string;
    idDr: string;
}

let t: FreeTerm[];

export const FreeTermDay = (props: Props) => {

const [free, setFree] = useState([]);

    const dayData = {
        numberDay: props.numberDay,
        month: props.month,
        year: props.year,
        idDr: props.idDr,
    };
    let controller = new AbortController();

    const getTerms = async() => {

        await fetch('http://localhost:3001/term/free-terms', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                ...dayData
            }),
            signal: controller.signal,
        },
        )
            .then(res => res.json())
            .then(data => {
                const r = data.map((term: FreeTerm) => <FreeTermHour id={term.id} hour={term.hour} numberDay={term.numberDay} month={term.month} year={term.year} reservation={term.reservation} key={term.id} />);
              setFree(r);
            })
    };

    useEffect(() => {
        getTerms();
    }, [])


   const render = (t: any) => {

       return t;
   }

   // const t =


    // const render = (terms: any) => {
    //      const test = terms.map((term: FreeTerm) => <FreeTermHour id={term.id} hour={term.hour} numberDay={term.numberDay} month={term.month} year={term.year} reservation={term.reservation} key={term.id} />)
    //     return test;
    // }


    return <>
        {/*<button onClick={render}>test</button>*/
           render(free)
        }

    </>
}