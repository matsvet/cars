import React from "react";
import style from './NoteItem.module.css';
import {Card} from "antd";

let NoteItem = (props) => {
    return <Card title={props.title} extra={<a href={props.reference}>{props.whereFrom}</a>}>
        <p>{props.text}</p>
    </Card>
}

export default NoteItem;