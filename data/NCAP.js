'use strict';
import { BASE_URL, BASE_PARAMS } from "../constant"

const NCAP  = {
    getModelYears () {
        return fetch(`${BASE_URL}?${BASE_PARAMS}`);
    },

    getMakes(modelYear) {
        return fetch(`${BASE_URL}modelyear/${modelYear}?${BASE_PARAMS}`);
    },

    getModels(modelYear, make) {
        return fetch(`${BASE_URL}modelyear/${modelYear}/make/${make}?${BASE_PARAMS}`);
    },

    getVehicles(modelYear, make, model) {
        return fetch(`${BASE_URL}modelyear/${modelYear}/make/${make}/model/${model}?${BASE_PARAMS}`);
    },

    getVehicle(vehicleId) {
        return fetch(`${BASE_URL}VehicleId/${vehicleId}?${BASE_PARAMS}`);
    }
}

export default NCAP;