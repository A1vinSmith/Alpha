import { AppNavigator } from '../container/AppNavigator'

const initialNavState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams('Home'));

const navReducer = (state = initialNavState , action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

export default navReducer