import {UserOutlined} from "@ant-design/icons";
import {Button, Checkbox, Table} from "antd";
import React, {useContext, useEffect, useState} from "react";
import style from "./CarsTable.module.css"
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, Context} from "../../../firebase/firebase";

const CarsTable = (props) => {
    const {auth, firestore} = useContext(Context)
    const [user, loading, error] = useAuthState(auth)
    let [cars, setCars] = useState(props.cars)
    useEffect(() => setCars(props.cars), [props.cars])

    let addToComparation = async (car, uid) => {
        let comparatedCar = car
        comparatedCar.uid = uid
        comparatedCar.clickedByOther = true

        let docId = (comparatedCar.id.toString()+uid.toString())
        // await firestore.collection('comparatedCars').add(comparatedCar)
        await firestore.collection('comparatedCars').doc(docId).set(car)
    }

    const columns = [
        {
            title: 'Дата',
            dataIndex: 'publishDate',
            key: 'publishDate',
            render: text => {
                let textDate = text.substr(0, 10)
                return <div>
                    <div className={style.dateText}>
                        {textDate}
                    </div>
                    <div className={style.dateText}>
                        {text.substr(11)}
                    </div>
                </div>
            },
        },
        {
            title: 'Картинка',
            dataIndex: 'imageUrl',
            key: 'imageUrl',
            render: text => <img src={text} className={style.mainImage}/>
        },
        {
            title: 'Модель',
            dataIndex: 'name',
            key: 'name',
            render: text => <div className={style.nameText}>{text}</div>
        },
        {
            title: 'Год',
            dataIndex: 'year',
            key: 'year',
        },
        {
            title: () => <UserOutlined/>,
            key: 'ownerCount',
            dataIndex: 'ownersCount',
        },
        {
            title: 'Цена (₽)',
            key: 'price',
            dataIndex: 'price',
            render: text => <div className={style.priceText}>{text}</div>
        },
        {
            title: 'Пробег (км)',
            key: 'mileage',
            dataIndex: 'mileage',
        },
        {
            title: 'Коробка',
            key: 'transmission',
            dataIndex: 'transmission',
            render: text => {
                let t = ''
                switch (text) {
                    case 2:
                        t = "Механическая"
                }
                return <div>{t}</div>
            }
        },
        {
            title: 'Кузов',
            key: 'bodyType',
            dataIndex: 'bodyType',
            render: text => {
                let t = ''
                switch (text) {
                    case 1:
                        t = "Седан"
                }
                return <div>{t}</div>
            }
        },
        {
            title: 'Город',
            key: 'settlement',
            dataIndex: 'settlement',
        },
        {
            title: 'Избр.',
            key: 'called',
            dataIndex: 'called',
            render: (text, record) => {
                return <Button
                    onClick={() => props.changeFavourite(record.id)}
                    className={style.heartButton}
                >
                    {record.called ? '♥' : '♡'}
                </Button>
            }
        },
        {
            title: 'Сравн.',
            key: 'clickedByOther',
            dataIndex: 'clickedByOther',
            render: (text, record) => {
                return <Checkbox
                    // onChange={() => props.changeComparated(record.id)}
                    // onChange={() => props.addComparation(record, user.uid)}
                    onChange={() => addToComparation(record, user.uid)}
                    checked={record.clickedByOther}
                />
            }
        },
    ];

    const data = cars

    return <Table columns={columns} dataSource={data}/>
}

export default CarsTable;