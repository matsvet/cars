import React from "react";
import style from './FavouritesPage.module.css'
import CarsItem from "../ARKHIV/CarsItem/CarsItem";
import CarsTable from "../Cars/CarsTable/CarsTable";

const FavouritesPageOLD = (props) => {

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

const FavouritesPage = (props) => {

    let favouriteCars = props.cars.filter(car => car.isFavourite)

    return <CarsTable cars={favouriteCars} changeFavourite={props.changeFavourite}/>
}

export default FavouritesPage;