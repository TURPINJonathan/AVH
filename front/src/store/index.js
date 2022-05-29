import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducer from '../reducers';

import actualityMiddleware from '../middlewares/actualityMiddleware';

const enhancer = composeWithDevTools(
    applyMiddleware(
        actualityMiddleware
    ),
);

const store = configureStore({
    reducer,
    enhancer,
});

export default store;