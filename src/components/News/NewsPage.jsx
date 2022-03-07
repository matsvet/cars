import React from "react";
import style from './NewsPage.module.css'
import NewsItem from "./NewsItem/NewsItem";

const NewsPage = (props) => {

    let news = props.news.map(n =>
        <NewsItem
            key={n.id}
            date={n.date}
            title={n.title}
            text={n.text}
            whereFrom={n.whereFrom}
        />
    )

    return <div className={style.newspage}>
        {news}
    </div>
}

export default NewsPage;