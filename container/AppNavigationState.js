import React                    from "react"
import { connect }              from "react-redux"
import { addNavigationHelpers } from "react-navigation"

import AppNavigator             from "../component/AppNavigator"

/*
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
*/
const AppNavigationState = ({ dispatch, navCar }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: navCar })} />
)

const mapStateToProps = state => ({
    navCar: state.navReducer,
});
  
export default connect(mapStateToProps)(AppNavigationState)