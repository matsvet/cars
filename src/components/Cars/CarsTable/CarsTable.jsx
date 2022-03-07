import {UserOutlined} from "@ant-design/icons";
import {Button, Table} from "antd";
import React from "react";
import style from "./CarsTable.module.css"

const CarsTable = (props) => {

    // let buttonFavElement = React.createRef()

    // let onFavouriteClick = (e) => {
    //     let id = buttonFavElement.current.id
    //     alert(id)
    //     props.changeFavourite(id)
    // }

    const columns = [
        {
            title: 'Дата',
            dataIndex: 'postDate',
            key: 'postDate',
            render: text => {
                let textDate = text.substr(0, 10)
                return <div>
                    <div>{textDate}</div>
                    <div>{text.substr(11)}</div>
                </div>
            },
        },
        {
            title: 'Модель',
            dataIndex: 'brand',
            key: 'brand',
            render: (text, record) => {
                return <a className={style.priceText} href={record.reference}>{(record.brand + ' ' + record.model)}</a>
            },
        },
        {
            title: 'Год',
            dataIndex: 'manufactureDate',
            key: 'manufactureDate',
        },
        {
            title: () => <UserOutlined/>,
            key: 'ownerAmount',
            dataIndex: 'ownerAmount',
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
        },
        {
            title: 'Кузов',
            key: 'body',
            dataIndex: 'body',
        },
        {
            title: 'Город',
            key: 'city',
            dataIndex: 'city',
        },
        {
            title: 'В избранное',
            key: 'isFavourite',
            dataIndex: 'isFavourite',
            render: (text, record) => {
                return <Button
                    // ref={buttonFavElement}
                    // id={record.id}
                    // onClick={onFavouriteClick}
                    // onClick={() => onFavouriteClick(record.id)}
                    onClick={() => props.changeFavourite(record.id)}
                    className={style.heartButton}
                >
                    {record.isFavourite ? '♥' : '♡'}
                </Button>
            }
        },
    ];

    const data = props.cars

    return <Table columns={columns} dataSource={data}/>
}

export default CarsTable;