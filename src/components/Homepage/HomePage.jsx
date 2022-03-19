import React, {useContext} from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {getAuth} from "firebase/auth";
import {Context} from "../../firebase/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import style from './HomePage.module.css'
import {Button} from "antd";
import {useFirebase} from "react-redux-firebase";

const HomePage = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    const firebase = useFirebase()

    function addPoyeben() {
        const sampleTodo = { text: 'Sample', done: false }
        return firebase.push('todos', sampleTodo)
    }

    return user ?
        <div className={style.home}>
            <h1>Добро пожаловать на домашнюю страницу CarList!</h1>
            <Button onClick={addPoyeben}>Сделать очередную хуйню</Button>
        </div>
        :
        <Navigate to="/signin"/>
};

const mapStateToProps = (state) => {

}

export default connect(mapStateToProps, {})(HomePage);