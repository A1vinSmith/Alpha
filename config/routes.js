import ModelYearList from "../component/ModelYearList";
import MakeList from "../component/MakeList";
import ModelList from "../component/ModelList";
import VehicleList from "../component/VehicleList";
import VehicleDetails from "../component/VehicleDetails";

const Routes = {
    Home: { screen: ModelYearList },
    Makes: { screen: MakeList },
    Models: { screen: ModelList },
    Vehicles: { screen: VehicleList },
    VehicleDetails: { screen: VehicleDetails }
};

export default Routes;
