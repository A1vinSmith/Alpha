import { combineReducers } from "redux";

import carReducer   from "./car";
import navReducer   from "./nav"
import authReducer  from "./auth"

const getRootReducer = () => {
    const rootReducer = combineReducers({
        nav: navReducer,
        auth: authReducer,
        cars: carReducer,
    })
    return rootReducer
}

export default getRootReducer