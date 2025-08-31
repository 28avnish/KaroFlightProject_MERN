import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";

//Login Api

export const logIn = createAsyncThunk(
    "admin/login",
    async (payload, { rejectWithValue }) => {
      try {
        const {data} = await instance.post("adminUser/login", payload, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });
        return data;
      } catch (error) {
       return rejectWithValue(error);
      }
    }
  );

  // logout -- logout action to call the logout api
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
      return rejectWithValue(error);
    }
  }
);