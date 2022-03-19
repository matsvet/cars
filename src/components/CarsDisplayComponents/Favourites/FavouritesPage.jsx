import React from "react";
import style from './FavouritesPage.module.css'
import CarsItem from "../../ARKHIV/CarsItem/CarsItem";
import CarsTable from "../CarsTable/CarsTable";


const FavouritesPage = (props) => {

    return <CarsTable cars={props.cars} changeFavourite={props.changeFavourite} makeFilter={props.makeFilter}/>
}

export default FavouritesPage;