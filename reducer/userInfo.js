import { SET_USER_NAME } from '../constant/ActionType'

const userInfo = (state = {user_name: ''}, action) => {
    switch (action.type) {
        case SET_USER_NAME:
            return Object.assign({}, state, {
                user_name: action.user_name
            });
        default:
            return state
    }
};

export default userInfo