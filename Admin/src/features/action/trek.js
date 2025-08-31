import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../../services/axiosInterceptor';


//get all treks api
export const getAllTreks = createAsyncThunk(
  'getTreks',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/trek`, payload, {
        withCredentials: true,
      });
      
      return response?.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

//delete trek api
export const deleteTrek = createAsyncThunk(
  'deleteTrek',
  async (id, { rejectWithValue }) => {
    try {
    
      const response = await instance.delete(
        `/trek/${id}`,

        { withCredentials: true }
      );
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

//update Trek api
export const updateTrek= createAsyncThunk(
  'updateTrek',
  async ({ id, payload }, { rejectWithValue }) => {
    try {
      const response = await instance.patch(`/trek/${id}`, payload, {
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

//create Trek api
export const createTrek = createAsyncThunk(
  'createTrek',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/trek`, payload, {
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
