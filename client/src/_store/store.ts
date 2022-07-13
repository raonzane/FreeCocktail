import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import authSlice from '../_slices/authSlice';
import userSlice from '../_slices/userSlice';
import recipeSlice from '../_slices/recipeSlice';

export const persistConfig = {
  key: 'root',
  storage,
};

//  새로고침시 authReducer에 isInValid를 초기화되도록 블랙리스트 설정
const authReducerConfig = {
  key: 'authSlice',
  storage,
  blacklist: ['isInValid'],
};

export const rootReducer = combineReducers({
  ILoginInfo: persistReducer(authReducerConfig, authSlice),
  userInfo: userSlice,
  recipeInfo: recipeSlice,
});
// ------ rootReducer(rootSlice)

// export type RootState = ReturnType<typeof rootReducer>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistedReducer = persistReducer(persistConfig, rootReducer);

// store
export const store = configureStore({
  reducer: { persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          'authSlice/setAuth/fulfilled',
        ],
      },
    }),
  // devTools
});

export const persistor = persistStore(store);
export default persistReducer(persistConfig, rootReducer);
