import LoginScreen      from "../component/login/LoginScreen";
import MainScreen       from "../component/login/MainScreen";
import ProfileScreen    from "../component/login/ProfileScreen";

import MainApp          from "../container/Game/Main"

const Routes = {
    Login: { screen: LoginScreen },
    Main: { screen: MainScreen, navigationOptions: { header: null } },
    Profile: { screen: ProfileScreen, navigationOptions: { header: null } },

    MainDrawer: { screen: MainApp, navigationOptions: { header: null }}
};

export default Routes;
