import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
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
import storageSession from 'redux-persist/es/storage/session';
import userSlice from '../_slices/userSlice';
import recipeSlice from '../_slices/recipeSlice';

export const persistConfig = {
  key: 'root',
  storage: storageSession,
};

export const rootReducer = combineReducers({
  userInfo: userSlice,
  recipeInfo: recipeSlice,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: { persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
