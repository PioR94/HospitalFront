import React from "react";
import "./Confirm.css"
import {Btn} from "../Btn/Btn";


interface Props {
    message: string;
}

export const Confirm = (props: Props) => {


    return <div className="confirm-bg">
        <div className="confirm">
            <p>{props.message}</p>
            <Btn text="Tak" class="yes" onClick={console.log('tak')}/>
            <Btn text="Nie" class="no" onClick={console.log('nie')}/>
        </div>
    </div>
}