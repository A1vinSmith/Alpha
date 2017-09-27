import { ADD_PLOT_INDEX } from '../constant/ActionType'

const plotReducer = (state = [0], action) => {
    switch (action.type) {
        case ADD_PLOT_INDEX:
            return [
                ...state,
                action.plot_index
            ];
        default:
            return state
    }
};

export default plotReducer