import React, {useContext} from "react";
import style from './NotePage.module.css'
import NoteItem from "./NoteItem/NoteItem";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Context} from "../../firebase/firebase";

const NotesPage = () => {
    const {firestore} = useContext(Context)
    const [notes, loading] = useCollectionData(
        firestore.collection('notes').orderBy('createdAt')
    )

    if (loading) {return <div>Загруз Очка</div>}

    let arrayNews = notes.map(n =>
        {
            return <NoteItem
            />}
    )

    return <div className={style.notespage}>{arrayNews}</div>
}

export default NotesPage;