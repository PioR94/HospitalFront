import React, {useEffect, useRef} from "react";
import "./Confirm.css"
import {Btn} from "../Btn/Btn";
import ReactDOM from "react-dom";


interface Props {
    message: string;
    no: any;
}

export const Confirm = (props: Props) => {


    return ReactDOM.createPortal(
        <div className="confirm-bg">
            <div className="confirm">
                <p>{props.message}</p>
                <Btn text="Tak" class="yes" onClick={console.log('tak')}/>
                <Btn text="Nie" class="no" onClick={props.no}/>
            </div>
        </div>,
        document.body)
}