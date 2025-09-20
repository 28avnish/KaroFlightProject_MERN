import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { encryptTransform } from "redux-persist-transform-encrypt";
import booking from "./slices/booking";
import tour from "./slices/tour";
import auth from "./slices/auth";
import contactUs from "./slices/contactUs";
import order from "./slices/order";
import offers from './slices/offerSlice'
import pricingConfig from "./slices/pricingConfig";

// Combine your individual reducers here
const rootReducer = combineReducers({
  auth,
  pricingConfig,
  booking,
  tour,
  contactUs,
  order,
  offers,
});

// Custom root reducer handling a clear action
const rootReducerWithClear = (state, action) => {
  if (action.type === "karoFlight/clearReduxStoreData") {
    state = undefined;
    localStorage.clear();
    sessionStorage.clear();
  }
  return rootReducer(state, action);
};

// Redux-persist configuration
const persistConfig = {
  key: "KaroFlightAdminPanel",
  version: 1,
  storage,
  transforms: [
    encryptTransform({
      secretKey: `${import.meta.env.VITE_APP_REDUX_PERSIST_SECRET_KEY}`,
      onError: (err) => {
        // Handle encryption errors if any
      },
    }),
  ],
};

// Persisted root reducer
const persistedReducer = persistReducer(persistConfig, rootReducerWithClear);

// Configure and create the Redux store
const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
