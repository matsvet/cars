import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import carsReducer from "./carsReducer";
import newsReducer from "./newsReducer";
import {firebaseReducer, firestoreReducer} from "react-redux-firebase";
import {getFirebase, reactReduxFirebase, } from "react-redux-firebase";
import {getFirestore, reduxFirestore} from "redux-firestore";
import thunk from "redux-thunk";
// import {fbConfig} from "../firebase/firebase";


let reducers = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    carsPage: carsReducer,
    newsPage: newsReducer,
},);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  // для работы расширения
const store = createStore(
    reducers,
    compose(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})))
);

export default store;