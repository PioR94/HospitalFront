import React from 'react';
import './Btn.css'
import {Link} from "react-router-dom";

interface Props {
    text: string;
    to?: string;
    onClick?: any;
    class? : string;
}


export const Btn = (props: Props) => (
    props.to
        ? <Link className="btn" onClick={props.onClick} to={props.to}>{props.text}</Link>
        : <button className={props.class} onClick={props.onClick}>{props.text}</button>
)