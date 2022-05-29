import { combineReducers } from 'redux';

import actualityReducer from './actualityReducer';

const rootReducer = combineReducers({
    actuality: actualityReducer,
});

export default rootReducer;