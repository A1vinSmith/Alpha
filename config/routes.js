import ModelYearList    from "../component/carLists/ModelYearList";
import MakeList         from "../component/carLists/MakeList";
import ModelList        from "../component/carLists/ModelList";
import VehicleList      from "../component/carLists/VehicleList";
import VehicleDetails   from "../component/carLists/VehicleDetails";

import LoginScreen      from "../component/login/LoginScreen";
import MainScreen       from "../component/login/MainScreen";
import ProfileScreen    from "../component/login/ProfileScreen";

import LotsOfScreen     from "../component/tabs/App";

const Routes = {
    Login: { screen: LoginScreen },
    Main: { screen: MainScreen },
    Profile: { screen: ProfileScreen },

    Home: { screen: ModelYearList },
    Makes: { screen: MakeList },
    Models: { screen: ModelList },
    Vehicles: { screen: VehicleList },
    VehicleDetails: { screen: VehicleDetails },

    LotsOfScreen: { screen: LotsOfScreen, navigationOptions: { header: null }},
    
};

export default Routes;
