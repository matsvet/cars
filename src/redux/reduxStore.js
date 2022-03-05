import {combineReducers, createStore} from "redux";
import carsReducer from "./carsReducer";
import newsReducer from "./newsReducer";

let reducers = combineReducers({
    carsPage: carsReducer,
    newsPage: newsReducer,
}, );

let store = createStore(reducers);

export default store;