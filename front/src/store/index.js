import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducer from '../reducers';

import actualityMiddleware from '../middlewares/actualityMiddleware';
import mainMiddleware from '../middlewares/mainMiddleware';
import partnerMiddleware from '../middlewares/partnerMiddleware';

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
        mainMiddleware,
        partnerMiddleware,
    ],
    // enhancer,
});

export default store;