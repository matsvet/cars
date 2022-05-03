// import React from "react";
// import {connect} from "react-redux";
// import {addComparatedCarAC, setComparatedCarsAC, documentSnapshotsAC, lastVisibleAC} from "../../../redux/comparatedCarsReducer";
// import ComparatedPage from "./ComparatedPage";

//
// let mapStateToProps = (state) => {
//     // let comparatedCars = state.carsPage.cars.filter(car => car.clickedByOther)
//
//     return {
//         cars: state.comparatedCarsPage.comparatedCars,
//         dS: state.comparatedCarsPage.documentSnapshots,
//         lV: state.comparatedCarsPage.lastVisible,
//     }
// }
//
// let mapDispatchToProps = (dispatch) => {
//     return {
//         addComparation: (car) => dispatch(addComparatedCarAC(car)),
//
//         setComparatedCars: (cars) => dispatch(setComparatedCarsAC(cars)),
//         setDocumentSnapshots: (dS) => dispatch(documentSnapshotsAC(dS)),
//         setLastVisible: (lV) => dispatch(lastVisibleAC(lV)),
//     }
// }
//
// const ComparatedPageContainer = connect(mapStateToProps, mapDispatchToProps)(ComparatedPage);
//
// export default ComparatedPageContainer;