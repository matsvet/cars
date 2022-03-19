import TempStore from "../tempStore/TempStore";
import {Context} from "../index";

const CHANGE_FAVOURITE = 'CHANGE-FAVOURITE';
const CHANGE_COMPARATION = 'CHANGE-COMPARATION';
const APPLY_FILTER = 'APPLY-FILTER';

let initialState = {
    cars: TempStore.cars
}

const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FAVOURITE: {
            return {
                ...state,
                cars: state.cars.map(car => {
                    if (car.id === action.carId) {
                        let antiFav = !car.called
                        return {...car, called: antiFav}
                    }
                    return car
                })
            }
        }
        case CHANGE_COMPARATION: {
            return {
                ...state,
                cars: state.cars.map(car => {
                    if (car.id === action.carId) {
                        let antiCmprtn = !car.clickedByOther
                        return {...car, clickedByOther: antiCmprtn}
                    }
                    return car
                })
            }
        }
        // case APPLY_FILTER: {
        //     return {
        //         ...state,
        //         cars: state.cars.filter(car => {
        //             if (action.carFilter.maxPrice) {
        //                 if (car.price <= action.carFilter.maxPrice) {return car}
        //             }
        //             return car
        //         })
        //     }
        // }
        default:
            return state;
    }
}

export const changeFavouriteCreator = (id) => ({
    type: CHANGE_FAVOURITE,
    carId: id
})
export const changeComparatedCreator = (id) => ({
    type: CHANGE_COMPARATION,
    carId: id
})

const initialFilter = {
    mark: null,
    model: null,
    minPrice: null,
    maxPrice: null,
    minYear: null,
    maxYear: null,
    city: null,
}
export const applyFilterCreator = (filter = initialFilter) => ({
    type: APPLY_FILTER,
    carFilter: filter
})

export default carsReducer;