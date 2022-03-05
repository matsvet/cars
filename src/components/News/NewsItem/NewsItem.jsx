import React from "react";
import style from './NewsItem.module.css';

let NewsItem = (props) => {
    return <div className={style.newsitem}>
        {props.title}
        {props.text}
    </div>
}

export default NewsItem;