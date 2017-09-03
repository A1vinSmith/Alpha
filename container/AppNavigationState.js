import { connect }              from "react-redux";
import React, { Component }     from "react";
import { addNavigationHelpers } from "react-navigation";

import AppNavigator             from "./AppNavigator";

@connect(state => ({
    nav: state.nav
}))
class AppNavigationState extends Component {
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

export default AppNavigationState