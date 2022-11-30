import React from "react";
import './Hour.css'

interface Props {
    hour: string;
    dayOfWeek: any;
    numberDay: string;
    month: any;
}

export const Hour = (props: Props) => {


    const addTerm= () => {
        console.log("hello");
        return;
    }

    return <>
        <div onClick={addTerm} className="_hour-div">

                <p>{props.hour}</p>

        </div>
    </>
}