import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";

export const logIn = createAsyncThunk(
  "admin/login",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("adminUser/login", payload, {
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
  "admin/logout",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post("adminUser/logout", payload, {
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

export const getAdminUsers = createAsyncThunk(
  "getadmin/",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("adminUser/getAdmins", {
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

export const createAdminUser = createAsyncThunk(
  "create/Admin",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("adminUser/register", payload, {
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

export const updateAdminUser = createAsyncThunk(
  "update/Admin",
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

export const deleteAdminUser = createAsyncThunk(
  "delete admins",
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
