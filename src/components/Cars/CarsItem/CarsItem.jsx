import React from "react";
import style from './CarsItem.module.css';

let CarsItem = (props) => {
    let car = props.carInfo;

    return (
        <div className={style.carsitem}>
            <div className={style.txt}>{car.postDate}</div>
            <div className={style.txt}>{car.brand}</div>
            <div className={style.txt}>{car.model}</div>
            <div className={style.txt}>{car.manufactureDate}</div>
            <div className={style.txt}>{car.ownerAmount}</div>
            <div className={style.txt}>{car.price}</div>
            <div className={style.txt}>{car.mileage}</div>
            <div className={style.txt}>{car.engineCapacity}</div>
            <div className={style.txt}>{car.enginePower}</div>
            <div className={style.txt}>{car.transmission}</div>
            <div className={style.txt}>{car.body}</div>
            <div className={style.txt}>{car.city}</div>
            <div className={style.txt}>{car.isFavourite}</div>
        </div>
    )
}

export default CarsItem;