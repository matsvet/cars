import React from "react";
import {connect} from "react-redux";
import FavouritesPage from "./FavouritesPage";

let mapStateToProps = (state) => {
    return {
        cars: state.carsPage.cars,
    }
}

let mapDispatchToProps = (dispatch) => {
    return 'wowowow'
}

const FavouritesContainer = connect(mapStateToProps, mapDispatchToProps)(FavouritesPage);

export default FavouritesContainer;