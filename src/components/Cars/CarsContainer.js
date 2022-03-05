import React from "react";
import {connect} from "react-redux";
import CarsPage from "./CarsPage";
import {changeFavouriteCreator} from "../../redux/carsReducer";

let mapStateToProps = (state) => {
    return {
        cars: state.carsPage.cars,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeFavourite: (id) => dispatch(changeFavouriteCreator(id))
    }
}

const CarsContainer = connect(mapStateToProps, mapDispatchToProps)(CarsPage);

export default CarsContainer;