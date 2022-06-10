import axios from 'axios';
import { FETCH_ACTUALITY, FETCH_MISSION, saveMission, saveActuality } from '../actions/main';

import url from '../data';

const mainMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case FETCH_MISSION:
            axios.get(`${url}/mission/list`)
                .then((response) => {
                    // console.log('Middleware : ' + response.data);
                    store.dispatch(saveMission(response.data));
                })
                .catch((error) => {
                    console.warning('Il y a une couille dans le paté');
                    console.log(error);
                });
            break;
        case FETCH_ACTUALITY:
            axios.get('http://localhost:8080/api/actualite/list')
                .then((response) => {
                    console.log('Middleware main.actuality : ' + response.data);
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