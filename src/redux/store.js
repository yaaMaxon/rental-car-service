import { configureStore } from "@reduxjs/toolkit";
import { reducerCatalog } from "./cars/slice";
import { reducerRoot } from "./root/slice";

import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const PersistConfig = {
    key: 'root',
    storage,
    whitelist: ['favorite'],
};

export const store = configureStore({
    reducer: {
        catalog: persistReducer(PersistConfig, reducerCatalog),
        root: reducerRoot,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    evTools: process.env.NODE_ENV === 'development',
});


export const persistor = persistStore(store);