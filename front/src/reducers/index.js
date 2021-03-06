import { combineReducers } from 'redux';

import actualityReducer from './actualityReducer';
import contactReducer from './contactReducer';
import mainReducer from './mainReducer';
import nationalReducer from './nationalReducer';
import partnerReducer from './partnerReducer';

const rootReducer = combineReducers({
    actuality: actualityReducer,
    main: mainReducer,
    partner: partnerReducer,
    national: nationalReducer,
    contact: contactReducer,
});

export default rootReducer;