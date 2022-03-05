import React from "react";
import style from './FavouritesPage.module.css'
import CarsItem from "../Cars/CarsItem/CarsItem";

const FavouritesPage = (props) => {

    let cars = props.cars.map(car => {
            if (car.isFavourite) {
                return <CarsItem
                    key={car.id}
                    carInfo={car}
                />
            }
        }
    )

    return <div className={style.carspage}>
        <div className={style.title}>Cписок любимых машинок</div>
        {cars}
    </div>
}

export default FavouritesPage;