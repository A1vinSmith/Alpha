import * as types from '../constant/ActionType'

export const setUserName = (name) => {
    return {
        type: types.SET_USER_NAME,
        user_name: name
    }
};