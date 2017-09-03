import { combineReducers } from "redux";

import cars from "./car";


const getRootReducer = (navReducer) => {
    const rootReducer = combineReducers({
        nav: navReducer,
        cars: cars
    })
    return rootReducer
}

export default getRootReducer