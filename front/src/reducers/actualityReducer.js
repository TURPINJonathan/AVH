import { SAVE_ACTUALITY } from "../actions/actuality";

const initialState = {
    actuality: [],
};

function actualityReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SAVE_ACTUALITY:
            return {
                ...state,
                actuality: action.payload,
            };
        default:
            return state;
    }
}

export default actualityReducer;