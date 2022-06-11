import axios from 'axios';
import { FETCH_PARTNER, savePartner } from '../actions/partner';

import { DEV_URL } from '../data';

const partnerMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case FETCH_PARTNER: {
            axios.get(`${DEV_URL}/partenaire/list`)
                .then((response) => {
                    store.dispatch(savePartner(response.data));
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

export default partnerMiddleware;