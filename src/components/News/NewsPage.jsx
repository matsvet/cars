import React, {useContext} from "react";
import style from './NewsPage.module.css'
import NewsItem from "./NewsItem/NewsItem";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Context} from "../../firebase/firebase";

const NewsPage = () => {
    const {firestore} = useContext(Context)
    const [news, loading] = useCollectionData(
        firestore.collection('news').orderBy('title')
    )

    if (loading) {return <div>Загруз Очка</div>}

    let arrayNews = news.map(n =>
    {
        return <NewsItem
            key={n.id}
            date={n.date}
            title={n.title}
            text={n.text}
            whereFrom={n.whereFrom}
            reference={n.reference}
        />}
    )

    return <div className={style.newspage}>{arrayNews}</div>
}

export default NewsPage;