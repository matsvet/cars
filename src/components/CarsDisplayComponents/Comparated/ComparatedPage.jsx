import React, {useContext, useEffect} from "react";
import style from './ComparatedPage.module.css'
import CarsTable from "../CarsTable/CarsTable";
import {collection, getDocs, limit, query, startAfter} from "firebase/firestore";
import {Context} from "../../../firebase/firebase";
import {Button} from "antd";
import {connect} from "react-redux";
import {getFirstCmpCarsData, getMoreCmpCarsData} from "../../../redux/comparatedCarsReducer";


const ComparatedPage = (props) => {
    useEffect(() => {
        if (props.cars.length === 0) {props.getFirstCmpCarsData()}
    }, []);

    const {firestore} = useContext(Context)

    return <div>
        <CarsTable cars={props.cars} changeComparated={props.changeComparated}/>
        <div className={style.moreItemsButton} >
            <Button onClick={() => props.getMoreCmpCarsData(props.prevId)}>Загрузить ещё</Button>
        </div>
    </div>
}

let mapStateToProps = (state) => {
    return {
        cars: state.comparatedCarsPage.comparatedCars,
        prevId: state.comparatedCarsPage.previousCmpCarId,
    }
}

export default connect(mapStateToProps, {getFirstCmpCarsData, getMoreCmpCarsData})(ComparatedPage)