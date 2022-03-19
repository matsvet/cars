import React from "react";
import {connect} from "react-redux";
import {applyFilterCreator, changeComparatedCreator, changeFavouriteCreator} from "../../../redux/carsReducer";
import CarsPage from "./CarsPage";

let mapStateToProps = (state) => {
    return {
        cars: state.carsPage.cars,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeFavourite: (id) => dispatch(changeFavouriteCreator(id)),
        changeComparated: (id) => dispatch(changeComparatedCreator(id)),
        applyFilter: (minYear, maxYear) => dispatch(applyFilterCreator()),
    }
}

const CarsPageContainer = connect(mapStateToProps, mapDispatchToProps)(CarsPage);

export default CarsPageContainer;