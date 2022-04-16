import React, {useContext, useState} from "react";
import style from './NotePage.module.css'
import NoteItem from "./NoteItem/NoteItem";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Context, firebaseApp} from "../../firebase/firebase";
import {Button, Input} from "antd";
import {useAuthState} from "react-firebase-hooks/auth";
import Preloader from "../Preloader/Preloader";

const NotesPage = () => {
    const {firestore, auth} = useContext(Context)
    const [user] = useAuthState(auth)
    const [notes, loading] = useCollectionData(
        firestore.collection('notes').where('uid', '==', user.uid)
    )

    const [note, setNote] = useState()

    const addNote = () => {
        firestore.collection('notes').add({
            text: note,
            isDone: false,
            uid: user.uid,
            createdAt: firebaseApp.firestore.FieldValue.serverTimestamp()
        })
        setNote('')
    }

    if (loading) {return <Preloader/>}

    let arrayNews = notes.map(n =>
        {
            return <NoteItem
                text={n.text}
                isDone={n.isDone}
                uid={n.uid}
            />}
    )

    return <div className={style.notespage}>
        {arrayNews}
        <div>
            <Input value={note} onChange={(e) => setNote(e.target.value)}/>
            <Button onClick={addNote}>Добавить</Button>
        </div>
    </div>
}

export default NotesPage;