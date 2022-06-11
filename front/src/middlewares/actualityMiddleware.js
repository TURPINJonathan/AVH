import axios from 'axios';
import { FETCH_ACTUALITY, saveActuality } from '../actions/actuality';

import { url } from '../data';

const actualityMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case FETCH_ACTUALITY: {
            axios.get(`${url}actualite/list`)
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