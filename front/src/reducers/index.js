import { combineReducers } from 'redux';

import actualityReducer from './actualityReducer';
import mainReducer from './mainReducer';

const rootReducer = combineReducers({
    actuality: actualityReducer,
    main: mainReducer,
});

export default rootReducer;