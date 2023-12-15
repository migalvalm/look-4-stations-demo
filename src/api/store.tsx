import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import socketReducer from '@/api/slices/socketSlice';
import stationsReducer from '@/api/slices/stationsSlice';
import searchReducer from '@/api/slices/searchFilterSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['stations']
}

const rootReducer = combineReducers({
  search: searchReducer,
  stations: stationsReducer,
  socket: socketReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;