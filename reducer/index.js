import { combineReducers } from "redux";

import carReducer   from "./car";
import navReducer   from "./nav"
import authReducer  from "./auth"

const getRootReducer = () => {
    return combineReducers({
        nav: navReducer,
        auth: authReducer,
        cars: carReducer,
    })
};

export default getRootReducer