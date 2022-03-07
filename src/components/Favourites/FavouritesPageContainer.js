import React from "react";
import {connect} from "react-redux";
import FavouritesPage from "./FavouritesPage";
import {changeFavouriteCreator} from "../../redux/carsReducer";

let mapStateToProps = (state) => {

    let favouriteCars = state.carsPage.cars.filter(car => car.isFavourite)

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