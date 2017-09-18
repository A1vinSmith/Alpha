import TEST from '../data/TEST';
/*
const setVehicle = (vehicle, vehicleDetails) => {
    return {
        type : 'SET_VEHICLE',
        vehicle,
        vehicleDetails
    }
};
*/
export const getCustomData = () => {
    return {
        type: 'TEST_JSON_DATA',
        data: TEST.getCustomData()
    }
        /*
            .then((response) => response.json())
            //.then((modelYears) => dispatch(setModelYears(modelYears)))
            .then((modelYears) => console.log(modelYears))
            .catch((err) => console.log(err));
            */
};