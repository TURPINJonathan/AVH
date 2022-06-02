import { SAVE_MISSION } from "../actions/main";

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
        default:
            return state;
    }
}

export default mainReducer;