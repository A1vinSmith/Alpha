import { combineReducers } from "redux"

import carReducer   from "./car"
import navReducer   from "./nav"
import authReducer  from "./auth"

import userInfoReducer  from "./userInfo"
import plotReducer      from "./plot"

const getRootReducer = () => {
    return combineReducers({
        nav: navReducer,
        auth: authReducer,
        cars: carReducer,
        userInfo: userInfoReducer,
        plot: plotReducer
    })
};

export default getRootReducer