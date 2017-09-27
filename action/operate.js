import * as types from '../constant/ActionType'

export const addPlotIndex = (index) => {
    return {
        type: types.ADD_PLOT_INDEX,
        plot_index: index
    }
};