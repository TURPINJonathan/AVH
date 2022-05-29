import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducer from '../reducers';

import actualityMiddleware from '../middlewares/actualityMiddleware';

//! N'EXISTE PLUS DEPUIS configureStore
//! const enhancer = composeWithDevTools(
//!     applyMiddleware(
//!         actualityMiddleware
//!     ),
//! );

const store = configureStore({
    reducer,
    middleware: [
        actualityMiddleware,
    ],
    // enhancer,
});

export default store;