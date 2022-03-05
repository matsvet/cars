import React from "react";
import style from './CarsPage.module.css'
import CarsItem from "./CarsItem/CarsItem";

const CarsPage = (props) => {

    let cars = props.cars.map(car =>
        <CarsItem
            key={car.id}
            carInfo={car}
        />
    )

    return <div className={style.carspage}>
        <div className={style.title}>Здесь неебический список машинок</div>
        {cars}
    </div>
}

export default CarsPage;