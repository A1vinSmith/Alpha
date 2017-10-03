import { ADD_PLOT_INDEX, SAVE_CURRENT_POINT, LOAD_LAST_POINT } from '../constant/ActionType'

const InitialState = {
    plotIndex : [0],
    saveIndex : [0]
};

const plotReducer = (state = InitialState, action) => {
    switch (action.type) {
        case ADD_PLOT_INDEX:
            return {
                ...state,
                plotIndex :
                [
                    ...state.plotIndex,
                    action.plot_index
                ]
            };
        case SAVE_CURRENT_POINT:
            return {
                ...state,
                saveIndex : state.plotIndex
            };
        case LOAD_LAST_POINT:
            return {
                ...state,
                plotIndex : state.saveIndex
            };
        default:
            return state
    }
};

export default plotReducer