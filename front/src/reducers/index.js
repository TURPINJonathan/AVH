import { combineReducers } from 'redux';

import actualityReducer from './actualityReducer';
import mainReducer from './mainReducer';
import partnerReducer from './partnerReducer';

const rootReducer = combineReducers({
    actuality: actualityReducer,
    main: mainReducer,
    partner: partnerReducer,
});

export default rootReducer;