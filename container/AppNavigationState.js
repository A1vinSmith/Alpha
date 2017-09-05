import React, { Component }     from "react"
import { connect }              from "react-redux"
import { addNavigationHelpers } from "react-navigation"
import { Audio }                from 'expo';

import AppNavigator             from "../component/AppNavigator"


@connect(state => ({
    nav: state.nav
}))
class AppNavigationState extends Component {
    async componentWillMount() {
        const source = require('../component/login/assets/mp3/moonLight.mp3');
        try {
            await Audio.setIsEnabledAsync(true);
            const sound = new Audio.Sound();
            await sound.loadAsync(source);
            await sound.playAsync();
        } catch(error) {
            console.error(error);
        }
    }
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

/*
const AppNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppNavigationState)
*/
