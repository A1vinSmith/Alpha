import NCAP from '../data/NCAP';

const setModelYears = (modelYears) => {
    return {
        type : 'SET_MODEL_YEARS',
        modelYears
    }
}

const setModelYear = (modelYear, makes) => {
    return {
        type : 'SET_MODEL_YEAR',
        modelYear,
        makes
    }
}

const setMake = (make, models) => {
    return {
        type : 'SET_MAKE',
        make,
        models
    }
}

const setModel = (model, vehicles) => {
    return {
        type : 'SET_MODEL',
        model,
        vehicles
    }
}

const setVehicle = (vehicle, vehicleDetails) => {
    return {
        type : 'SET_VEHICLE',
        vehicle,
        vehicleDetails
    }
}

export const fetchModelYears = () => {
    return (dispatch, getState) => {
        return NCAP.getModelYears()
            .then((response) => response.json())
            .then((modelYears) => dispatch(setModelYears(modelYears)))
            .catch((err) => console.log(err));
    }
}

export const fetchMakes = (modelYear) => {
    return (dispatch, getState) => {
        return NCAP.getMakes(modelYear)
            .then((response) => response.json())
            .then((makes) => dispatch(setModelYear(modelYear, makes)))
            .catch((err) => console.log(err));
    }
}

export const fetchModels = (make) => {
    const makeName = make.Make;
    return (dispatch, getState) => {
        return NCAP.getModels(make.ModelYear, makeName)
            .then((response) => response.json())
            .then((models) => dispatch(setMake(makeName, models)))
            .catch((err) => console.log(err));
    }
}

export const fetchVehicles = (model) => {
    const modelName = model.Model;
    return (dispatch, getState) => {
        return NCAP.getVehicles(model.ModelYear, model.Make, modelName)
            .then((response) => response.json())
            .then((vehicles) => dispatch(setModel(modelName, vehicles)))
            .catch((err) => console.log(err));
    }
}

export const fetchVehicleDetails = (vehicle) => {
    return (dispatch, getState) => {
        return NCAP.getVehicle(vehicle.VehicleId)
            .then((response) => response.json())
            .then((vehicleDetails) => dispatch(setVehicle(vehicle.VehicleDescription, vehicleDetails)))
            .catch((err) => console.log(err));
    }
}