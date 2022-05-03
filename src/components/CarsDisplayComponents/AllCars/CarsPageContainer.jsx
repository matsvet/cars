import React from "react";
import {connect} from "react-redux";
import {
    addComparatedCarAC,
    addFavouriteCarAC,
    changeComparatedCreator,
    changeFavouriteCreator, getFirstCarsData, getMoreCarsData,
    setCarsAC, setFirstCarsAC
} from "../../../redux/carsReducer";
import CarsPage from "./CarsPage";

let mapStateToProps = (state) => {
    return {
        cars: state.carsPage.cars,
        prevId: state.carsPage.previousCarId,
        dS: state.carsPage.documentSnapshots,
        lV: state.carsPage.lastVisible,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeFavourite: (id) => dispatch(changeFavouriteCreator(id)),
        changeComparated: (id) => dispatch(changeComparatedCreator(id)),
        addFavourite: (car, uid) => dispatch(addFavouriteCarAC(car, uid)),
        addComparation: (car, uid) => dispatch(addComparatedCarAC(car, uid)),
        // applyFilter: (minYear, maxYear) => dispatch(applyFilterCreator()),
        // setDocumentSnapshots: (dS) => dispatch(documentSnapshotsAC(dS)),
        // setLastVisible: (lV) => dispatch(lastVisibleAC(lV)),
        setCars: (cars) => dispatch(setCarsAC(cars)),
    }
}

const CarsPageContainer = connect(mapStateToProps,
    {getFirstCarsData, getMoreCarsData})(CarsPage);

export default CarsPageContainer;