import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../services/axiosInterceptor';


//get all products api
export const getAllProducts = createAsyncThunk(
  'getProducts',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/product`, payload, {
        withCredentials: true,
      });
      
      return response?.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

//delete product api
export const deleteProduct = createAsyncThunk(
  'deleteProduct',
  async (id, { rejectWithValue }) => {
    try {
    
      const response = await instance.delete(
        `/product/${id}`,

        { withCredentials: true }
      );
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

//update Product api
export const updateProduct= createAsyncThunk(
  'updateProduct',
  async ({ id, payload }, { rejectWithValue }) => {
    try {
      const response = await instance.patch(`/product/${id}`, payload, {
        withCredentials: true,
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

//create Product api
export const createProduct = createAsyncThunk(
  'createProduct',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/product`, payload, {
        withCredentials: true,
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
