import { SAVE_MISSION, SAVE_ACTUALITY } from "../actions/main";

const initialState = {
    mission: [],
};

function mainReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SAVE_MISSION:
            return {
                ...state,
                mission: action.mission,
            };
        case SAVE_ACTUALITY:
            return {
                ...state,
                actuality: action.actuality,
            };
        default:
            return state;
    }
}

export default mainReducer;