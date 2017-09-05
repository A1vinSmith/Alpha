import * as types from "../constant/ActionType"

const initialAuthState = { isLoggedIn: true };

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return { ...state, isLoggedIn: true };
    case types.LOGOUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default authReducer