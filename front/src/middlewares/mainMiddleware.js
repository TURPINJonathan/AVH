import axios from 'axios';
import { FETCH_ACTUALITY, FETCH_MISSION, saveMission, saveActuality } from '../actions/main';

import { DEV_URL, url } from '../data';

const mainMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case FETCH_MISSION:
            axios.get(`${url}mission/list`)
                .then((response) => {
                    store.dispatch(saveMission(response.data));
                })
                .catch((error) => {
                    console.warning('Il y a une couille dans le paté');
                    console.log(error);
                });
            break;
        case FETCH_ACTUALITY:
            axios.get(`${url}actualite/list`)
                .then((response) => {
                    store.dispatch(saveActuality(response.data));
                })
                .catch((error) => {
                    console.warning('Il y a une couille dans le paté');
                    console.log(error);
                });
            break;
        default:
            break;
    }
    next(action);
}

export default mainMiddleware;