import { combineReducers } from "redux";
import cars from "./car";

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        cars: cars
    });
}

/*
import { combineReducers }  from 'redux'
import navReducer           from './navReducer'

const rootReducer = combineReducers({
    navReducer,
})

export default rootReducer
*/