import {Context} from "../index"
import {collection, getDocs, limit, query} from "firebase/firestore";
import {firestore} from "../firebase/firebase";
import {setCarsAC, setPreviousCarIdAC} from "./carsReducer";

const ADD_COMPARATION = 'ADD_COMPARATION'
const SET_COMPARATED_CARS = 'SET_COMPARATED_CARS'
const SET_PREVIOUS_CMP_CAR_ID = 'SET_PREVIOUS_CMP_CAR_ID'
const SET_DS = 'SET_DS'
const SET_LV = 'SET_LV'

let initialState = {
    comparatedCars: [],
}

const comparatedCarsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMPARATION: {
            return {
                ...state,
                comparatedCars: [...state.comparatedCars, action.car],
            }
        }
        case SET_COMPARATED_CARS: {
            return {
                ...state,
                comparatedCars: [...state.comparatedCars, ...action.cars],
            }
        }
        case SET_PREVIOUS_CMP_CAR_ID: {
            return {
                ...state,
                previousCmpCarId: action.id,
            }
        }
        default:
            return state;
    }
}

export const addComparatedCarAC = (car, uid) => ({
    type: ADD_COMPARATION,
    car
})
export const setComparatedCarsAC = (cars) => ({
    type: SET_COMPARATED_CARS,
    cars
})
export const setPreviousCmpCarIdAC = (id) => ({
    type: SET_PREVIOUS_CMP_CAR_ID,
    id
})

export const getFirstCmpCarsData = () => {
    return async (dispatch) => {
        let data = await firestore.collection('comparatedCars').orderBy('id').limit(2)
        data.get().then(
            // (doc) => doc.docs.map(item => console.log(item.data()))
            (doc) => {
                let mashinki = []
                doc.docs.map(item => mashinki.push(item.data()))
                dispatch(setComparatedCarsAC(mashinki))

                let prevId = mashinki[mashinki.length-1].id
                dispatch(setPreviousCmpCarIdAC(prevId))
            }
        )
    }
}
export const getMoreCmpCarsData = (prevId) => {
    return async (dispatch) => {
        let data = await firestore.collection('comparatedCars').orderBy('id').startAfter(prevId).limit(2)
        data.get().then(
            // (doc) => doc.docs.map(item => console.log(item.data()))
            (doc) => {
                let mashinki = []
                doc.docs.map(item => mashinki.push(item.data()))
                dispatch(setComparatedCarsAC(mashinki))

                let prevId = mashinki[mashinki.length-1].id
                dispatch(setPreviousCmpCarIdAC(prevId))
            }
        )
    }
}

export default comparatedCarsReducer;