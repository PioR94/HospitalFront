import React from "react";
import './Hour.css'

interface Props {
    hour: string;
}

export const Hour = (props: Props) => {


    const clickDiv = () => {
        console.log("hello");
        return;
    }

    return <>
        <div onClick={clickDiv} className="_hour-div">

                <p>{props.hour}</p>

        </div>
    </>
}