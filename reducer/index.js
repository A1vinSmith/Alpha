import { combineReducers } from "redux";

import cars from "./car";
import navReducer from "./navReducer"

const getRootReducer = () => {
    const rootReducer = combineReducers({
        navReducer: navReducer,
        cars: cars
    })
    return rootReducer
}

export default getRootReducer