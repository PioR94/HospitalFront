import React from 'react';
import './Btn.css'
import {Link} from "react-router-dom";

interface Props {
    text: string;
    to?: string;
    onClick?: any;
}


export const Btn = (props: Props) => (
    props.to
        ? <Link className="btn" onClick={props.onClick} to={props.to}>{props.text}</Link>
        : <button>{props.text}</button>
)