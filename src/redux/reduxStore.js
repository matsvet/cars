import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import carsReducer from "./carsReducer";
import newsReducer from "./newsReducer";
import {firebaseReducer, firestoreReducer} from "react-redux-firebase";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    carsPage: carsReducer,
    newsPage: newsReducer,
}, );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  // для работы расширения
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;