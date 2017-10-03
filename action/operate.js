import * as types from '../constant/ActionType'

export const addPlotIndex = (index) => {
    return {
        type: types.ADD_PLOT_INDEX,
        plot_index: index
    }
};

export const saveCurrentPoint = () => {
    return {
        type: types.SAVE_CURRENT_POINT
    }
};

export const loadLastPoint = () => {
    return {
        type: types.LOAD_LAST_POINT
    }
};