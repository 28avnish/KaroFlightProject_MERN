import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";

export const logIn = createAsyncThunk(
  "customer/login",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("customer/login", payload, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logout = createAsyncThunk(
  "customer/logout",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post("customer/logout", payload, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// EMAIL SENT
export const localSignUp = createAsyncThunk(
  "create/customer/local",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("customer/signup", payload, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// VERIFY EMAIL OTP
export const verifySignupEmail = createAsyncThunk(
  "customer/verify-signup",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("customer/verify-signup", payload, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateMobileNumber = createAsyncThunk(
  "update/Admin",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch("customer/update", payload, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// EMAIL SENT 
export const forgotPassword = createAsyncThunk(
  "/customer/forgot-password",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("customer/forgot-password", payload, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// VERIFY EMAIL OTP
export const resetForgotPassword = createAsyncThunk(
  "reset-password",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch("customer/reset-password", payload, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);