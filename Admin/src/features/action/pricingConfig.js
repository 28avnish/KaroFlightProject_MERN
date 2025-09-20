import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";

export const getAllPricingConfig = createAsyncThunk(
  "getPricingConfig",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("pricing-config", {
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

export const addPricingConfig = createAsyncThunk(
  "create/PricingConfig",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("pricing-config", payload, {
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

export const updatePricingConfig = createAsyncThunk(
  "update/PricingConfig",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch("adminUser/update", payload, {
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

export const deletePricingConfig = createAsyncThunk(
  "delete PricingConfig",
  async (id, { rejectWithValue }) => {
    try {
      const response = await instance.delete(`/adminUser/delete/${id}`, {
        withCredentials: true,
      });
      return response;
    } catch (e) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
