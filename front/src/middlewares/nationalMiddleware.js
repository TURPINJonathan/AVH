import axios from 'axios';
import { FETCH_NATIONAL, saveNational } from '../actions/national';

import { url, DEV_URL } from '../data';

const nationalMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case FETCH_NATIONAL: {
            axios.get(`${url}avhNational/list`)
                .then((response) => {
                    console.log(response.data);
                    store.dispatch(saveNational(response.data));
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

export default nationalMiddleware;