import React, { Component }                     from "react";
import { Text }                                 from "react-native";
import { Provider, connect }                    from "react-redux";
import { StackNavigator, addNavigationHelpers } from "react-navigation";

import Routes       from "../config/routes";
import getStore     from "../store";
import AppNavigator from "./AppNavigator";

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

@connect(state => ({
    nav: state.nav
}))
class AppWithNavigationState extends Component {
    render() {
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        );
    }
}

const store = getStore(navReducer);

export default function NCAP() {
    return (
        <Provider store={store}>
            <AppWithNavigationState />
        </Provider>
    );
}
