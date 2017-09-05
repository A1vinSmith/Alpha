import ModelYearList    from "../component/ModelYearList";
import MakeList         from "../component/MakeList";
import ModelList        from "../component/ModelList";
import VehicleList      from "../component/VehicleList";
import VehicleDetails   from "../component/VehicleDetails";

import LoginScreen      from "../component/LoginScreen";
import MainScreen       from "../component/MainScreen";
import ProfileScreen    from "../component/ProfileScreen";

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
