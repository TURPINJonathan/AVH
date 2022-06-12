import { SAVE_NATIONAL } from "../actions/national";

const initialState = {
    national: [],
};

function nationalReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SAVE_NATIONAL:
            return {
                ...state,
                national: action.national,
            };
        default:
            return state;
    }
}

export default nationalReducer;