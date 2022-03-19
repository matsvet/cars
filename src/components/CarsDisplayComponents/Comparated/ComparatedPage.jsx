import React from "react";
import style from './ComparatedPage.module.css'
import CarsTable from "../CarsTable/CarsTable";


const ComparatedPage = (props) => {
    return <CarsTable cars={props.cars} changeComparated={props.changeComparated}/>
}

export default ComparatedPage;