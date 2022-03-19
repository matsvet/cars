import React from "react";
import {connect} from "react-redux";
import {changeFavouriteCreator} from "../../../redux/carsReducer";
import FavouritesPage from "./FavouritesPage";


let mapStateToProps = (state) => {
    let favouriteCars = state.carsPage.cars.filter(car => car.called)

    return {
        cars: favouriteCars,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeFavourite: (id) => dispatch(changeFavouriteCreator(id))
    }
}

const FavouritesPageContainer = connect(mapStateToProps, mapDispatchToProps)(FavouritesPage);

export default FavouritesPageContainer;