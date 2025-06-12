import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducers from "./reducers/authSlice";
import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage"; localstorage
import sessionStorage from "redux-persist/es/storage/session";

const persistConfig = {
  key: "root",
  storage:sessionStorage
};
// it is readable you can understand this by reading only 
// addition code work is to parsist the data in session or local storage and 
// if refresh or reload .then ==>> no data lose
// after reading clear all this comment for batter readibility

const rootReducer = combineReducers({
  auth: authReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // devTools: process.env.NODE_ENV !== 'production',
});

const persistor = persistStore(store);
export { store, persistor };
