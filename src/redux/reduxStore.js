import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import carsReducer from "./carsReducer";
import newsReducer from "./newsReducer";
import comparatedCarsReducer from "./comparatedCarsReducer";
import favouriteCarsReducer from "./favouriteCarsReducer";
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    carsPage: carsReducer,
    comparatedCarsPage: comparatedCarsReducer,
    // favouriteCarsPage: favouriteCarsReducer,
    newsPage: newsReducer,
},);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  // для работы расширения
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;