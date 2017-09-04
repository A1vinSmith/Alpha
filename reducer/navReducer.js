import AppNavigator from '../component/AppNavigator'

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);

const navReducer = (state = tempNavState, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

export default navReducer