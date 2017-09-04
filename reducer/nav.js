import { NavigationActions } from 'react-navigation'

import AppNavigator from '../component/AppNavigator'
import * as types from "../constant/ActionType"

//const carAction = AppNavigator.router.getActionForPathAndParams('Login');
//const initCarNavReducer = AppNavigator.router.getStateForAction(carAction);

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

const navReducer = (state = initialNavState, action) => {
    //const newState = AppNavigator.router.getStateForAction(action, state);
    //return newState || state;
    
    let nextState;
    switch (action.type) {
      case types.LOGIN:
        nextState = AppNavigator.router.getStateForAction(
          NavigationActions.back(),
          state
        );
        break;
      case types.LOGOUT:
        nextState = AppNavigator.router.getStateForAction(
          NavigationActions.navigate({ routeName: 'Login' }),
          state
        );
        break;
      default:
        nextState = AppNavigator.router.getStateForAction(action, state);
        break;
    }
  
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};

export default navReducer