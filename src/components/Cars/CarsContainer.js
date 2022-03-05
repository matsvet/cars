import React from "react";
import {connect} from "react-redux";
import CarsPage from "./CarsPage";

let mapStateToProps = (state) => {
    return {
        cars: state.carsPage.cars,
    }
}

let mapDispatchToProps = (dispatch) => {
    return 'wowowow'
}

const CarsContainer = connect(mapStateToProps, mapDispatchToProps)(CarsPage);

export default CarsContainer;