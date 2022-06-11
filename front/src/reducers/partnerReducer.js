import { SAVE_PARTNER } from "../actions/partner";

const initialState = {
    partner: [],
};

function partnerReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SAVE_PARTNER:
            return {
                ...state,
                partner: action.partner,
            };
        default:
            return state;
    }
}

export default partnerReducer;