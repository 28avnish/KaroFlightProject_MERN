import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/axiosInterceptor";

//get all product api
export const getAllProducts = createAsyncThunk(
  "getProduct",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.get(
        `/product${payload.search}${payload.productName}${payload.category}`,
        {
          withCredentials: true,
        }
      );

      return response;
    } catch (e) {
      return rejectWithValue(e?.message);
    }
  }
);

//delete product api
export const deleteProduct = createAsyncThunk(
  "deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      console.log(id, "id");
      const response = await instance.delete(
        `/product/${id}`,

        { withCredentials: true }
      );
      return response;
    } catch (e) {
      return rejectWithValue(e?.message);
    }
  }
);

//update Product api
export const updateProduct = createAsyncThunk(
  "updateProduct",
  async ({ id, payload }, { rejectWithValue }) => {
    try {
      const response = await instance.patch(`/product/${id}`, payload, {
        withCredentials: true,
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      return response;
    } catch (e) {
      return rejectWithValue(e?.message);
    }
  }
);

//create Product api
export const createProduct = createAsyncThunk(
  "createProduct",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/product`, payload, {
        withCredentials: true,
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      return response;
    } catch (e) {
      return rejectWithValue(e?.message);
    }
  }
);
