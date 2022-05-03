import {Context} from "../index";

const CHANGE_FAVOURITE = 'CHANGE-FAVOURITE';
const ADD_FAVOURITE = 'ADD_FAVOURITE';
const ADD_COMPARATION = 'ADD_COMPARATION';
const CHANGE_COMPARATION = 'CHANGE-COMPARATION';
const APPLY_FILTER = 'APPLY-FILTER';
const SET_CARS = 'SET_CARS';
const SET_DS = 'SET_DS';
const SET_LV = 'SET_LV';

let initialState = {
    cars: [],
    favouriteCars: [],
    comparatedCars: [],
}

// const carsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case CHANGE_FAVOURITE: {
//             return {
//                 ...state,
//                 cars: state.cars.map(car => {
//                     if (car.id === action.carId) {
//                         let antiFav = !car.called
//                         return {...car, called: antiFav}
//                     }
//                     return car
//                 })
//             }
//         }
//         case CHANGE_COMPARATION: {
//             return {
//                 ...state,
//                 cars: state.cars.map(car => {
//                     if (car.id === action.carId) {
//                         let antiCmprtn = !car.clickedByOther
//                         return {...car, clickedByOther: antiCmprtn}
//                     }
//                     return car
//                 })
//             }
//         }
//         case ADD_FAVOURITE: {
//             return {
//                 ...state,
//                 favouriteCars: [...state.favouriteCars, action.car],
//             }
//         }
//         case ADD_COMPARATION: {
//             debugger
//             return {
//                 ...state,
//                 comparatedCars: [...state.comparatedCars, action.car],
//             }
//         }
//         case SET_CARS: {
//             return {
//                 ...state,
//                 cars: [...state.cars, ...action.cars],
//             }
//         }
//         case SET_DS: {
//             return {
//                 ...state,
//                 documentSnapshots: action.dS
//             }
//         }
//         case SET_LV: {
//             return {
//                 ...state,
//                 lastVisible: action.lV
//             }
//         }
//         // case APPLY_FILTER: {
//         //     return {
//         //         ...state,
//         //         cars: state.cars.filter(car => {
//         //             if (action.carFilter.maxPrice) {
//         //                 if (car.price <= action.carFilter.maxPrice) {return car}
//         //             }
//         //             return car
//         //         })
//         //     }
//         // }
//         default:
//             return state;
//     }
// }
//
// export const changeFavouriteCreator = (id) => ({
//     type: CHANGE_FAVOURITE,
//     carId: id
// })
// export const changeComparatedCreator = (id) => ({
//     type: CHANGE_COMPARATION,
//     carId: id
// })
// export const addFavouriteCarAC = (car, uid) => ({
//     type: ADD_FAVOURITE,
//     car
// })
// export const addComparatedCarAC = (car, uid) => ({
//     type: ADD_COMPARATION,
//     car
// })
// export const setCarsAC = (cars) => ({
//     type: SET_CARS,
//     cars
// })
//
// export const documentSnapshotsAC = (dS) => ({
//     type: SET_DS,
//     dS
// })
//
// export const lastVisibleAC = (lV) => ({
//     type: SET_LV,
//     lV
// })
//
// const initialFilter = {
//     mark: null,
//     model: null,
//     minPrice: null,
//     maxPrice: null,
//     minYear: null,
//     maxYear: null,
//     city: null,
// }
// export const applyFilterCreator = (filter = initialFilter) => ({
//     type: APPLY_FILTER,
//     carFilter: filter
// })
//
// export default carsReducer;