import React from "react";
import style from './NoteItem.module.css';
import {Card} from "antd";

let NoteItem = (props) => {
    return <div title={props.title} extra={<a href={props.reference}>{props.whereFrom}</a>}>
        <p>{props.text}</p>

    </div>
}

export default NoteItem;