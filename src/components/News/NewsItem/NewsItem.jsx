import React from "react";
import style from './NewsItem.module.css';
import {Card} from "antd";

let NewsItem = (props) => {
    return <Card title={props.title} extra={<a href="#">{props.whereFrom}</a>} >
        <p>{props.text}</p>
    </Card>
}

export default NewsItem;