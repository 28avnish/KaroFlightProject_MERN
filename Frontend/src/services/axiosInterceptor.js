import axios from "axios";
// import { resetCustomerState } from "../features/slices/authentication";

// This code is used to access redux store in this file.
let store;
export const injectStore = (_store) => {
  store = _store;
};

// Creating new axios instance
export const baseURL =
  import.meta.env.VITE_PRODUCTION === "true"
    ? import.meta.env.VITE_REACT_APP_API_BASE_URL_PRODUCTION
    : import.meta.env.VITE_REACT_APP_API_BASE_URL_DEVELOPMENT;

export const instance = axios.create({
  baseURL,
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // store.dispatch(resetCustomerState());
    }
    return Promise.reject(error);
  }
);
