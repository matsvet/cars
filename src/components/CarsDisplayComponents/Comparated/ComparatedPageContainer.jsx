import React from "react";
import {connect} from "react-redux";
import {changeComparatedCreator} from "../../../redux/carsReducer";
import ComparatedPage from "./ComparatedPage";


let mapStateToProps = (state) => {
    let comparatedCars = state.carsPage.cars.filter(car => car.clickedByOther)

    return {
        cars: comparatedCars,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeComparated: (id) => dispatch(changeComparatedCreator(id))
    }
}

const ComparatedPageContainer = connect(mapStateToProps, mapDispatchToProps)(ComparatedPage);

export default ComparatedPageContainer;