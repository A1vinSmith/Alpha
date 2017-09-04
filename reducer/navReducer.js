import AppNavigator from '../component/AppNavigator'

const carAction = AppNavigator.router.getActionForPathAndParams('Home');
const initCarNavReducer = AppNavigator.router.getStateForAction(carAction);

const navReducer = (state = initCarNavReducer, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

export default navReducer