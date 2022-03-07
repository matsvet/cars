import React from "react";
import {connect} from "react-redux";
import {changeFavouriteCreator} from "../../redux/carsReducer";
import CarsTable from "./CarsTable/CarsTable";

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

const CarsContainer = connect(mapStateToProps, mapDispatchToProps)(CarsTable);

export default CarsContainer;