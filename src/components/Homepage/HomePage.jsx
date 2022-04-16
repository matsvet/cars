import React, {useContext} from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {getAuth} from "firebase/auth";
import {Context} from "../../firebase/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import style from './HomePage.module.css'
import {Button, Carousel} from "antd";
import {useFirebase} from "react-redux-firebase";
import TempStore from "../../tempStore/TempStore";

const HomePage = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)

    const firebase = useFirebase()

    function addSmth() {
        const sampleTodo = { text: 'Sample', done: false }
        return firebase.push('todos', sampleTodo)
    }

    const add = async ({car}) => {
        await firestore.collection('news').add(car)
    }
    const addCars = () => {
        TempStore.news.map(car => add({car}))
    }

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#9dbbff',
    };

    return user ?
        <div className={style.home}>
            <h1>Добро пожаловать на домашнюю страницу CarList!</h1>
            <Carousel autoplay>
                <div>
                    <h2 style={contentStyle}>Поиск автомобиля по заданным параметрам</h2>
                </div>
                <div>
                    <h2 style={contentStyle}>Сохранение понравившихся авто в избранном</h2>
                </div>
                <div>
                    <h2 style={contentStyle}>Таблица сравнения предложений на рынке</h2>
                </div>
            </Carousel>
        </div>
        :
        <Navigate to="/signin"/>
};

const mapStateToProps = (state) => {

}

export default connect(mapStateToProps, {})(HomePage);