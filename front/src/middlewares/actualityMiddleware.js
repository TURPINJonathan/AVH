import axios from 'axios';
import { FETCH_ACTUALITY, saveActuality } from '../actions/actuality';

import { DEV_URL } from '../data';

const actualityMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case FETCH_ACTUALITY: {
            axios.get(`${DEV_URL}/actualite/list`)
                .then((response) => {
                    store.dispatch(saveActuality(response.data));
                })
                .catch((error) => {
                    console.log(error);
                });
            break;
        }
        default:
            break;
    }
    next(action);
};

export default actualityMiddleware;